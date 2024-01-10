/**********************************************************************
 * Copyright (C) 2024 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/

import type * as podmanDesktopAPI from '@podman-desktop/api';
import { WebviewPanelImpl } from './webview-panel-impl.js';
import type { ApiSenderType } from './api.js';
import { Uri } from './types/uri.js';
import { WebviewImpl } from './webview-impl.js';
import type { WebviewInfo } from './api/webview-info.js';

type IconPath = Uri | { readonly light: Uri; readonly dark: Uri };

import type { Application } from 'express';
import express from 'express';
// // import type { CorsOptions } from 'cors';
import type * as http from 'node:http';
// // import cors from 'node:cors';
import { getFreePort } from './util/port.js';
import { resolve } from 'node:path';
import { existsSync } from 'node:fs';

export class HttpServer {
  #app: Application;

  #instance: http.Server | undefined;

  constructor(app: Application) {
    this.#app = app;
    this.config(app);
  }

  private config(_app: Application): void {}

  async start(): Promise<void> {
    // listen on a given port being free
    const serverPort = await getFreePort(45000);

    console.log('Starting http server to handle webviews on port', serverPort);
    // now listen on the port
    await new Promise<void>((resolve, reject) => {
      this.#instance = this.#app
        .listen(serverPort, () => {
          resolve();
        })
        .on('error', (err: unknown) => {
          reject(new Error(String(err)));
        });
    });
  }

  async stop(): Promise<void> {
    if (!this.#instance) {
      return;
    }
    return new Promise<void>((resolve, reject) => {
      this.#instance?.close((err: unknown) => {
        if (err) {
          reject(new Error(String(err)));
        } else {
          resolve();
        }
      });
    });
  }
}

export class WebviewRegistry {
  #count = 0;
  #webviews: Map<string, WebviewPanelImpl>;

  #apiSender: ApiSenderType;

  // express server instance for serving webviews
  #expressServer: HttpServer;

  #router: express.Router;

  #uuidAndPaths: Map<string, string>;

  constructor(apiSender: ApiSenderType) {
    this.#apiSender = apiSender;
    this.#webviews = new Map();
    this.#uuidAndPaths = new Map();

    const app: Application = express();
    this.#expressServer = new HttpServer(app);

    this.#router = express.Router({
      strict: true,
    });


    this.#router.get('/*', (req, res) => {

      // no referrer, reject request
      if (!req.headers.referer) {
        res.status(500).send('invalid request');
        return;
      }

      // return empty page in  case of root path access
      if (req.path === '/') {
        res.send('<html></html>');
        return;
      }

        // get uuid of the request using the host
        // extract 58b7cdef-294f-4ace-93cc-de6e0a139592 from req.hostname 58b7cdef-294f-4ace-93cc-de6e0a139592.webview.localhost
        // check if hostname matches uuid pattern
        const uuidPattern = new RegExp('^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$');
        const uuid = req.hostname.split('.')[0];
        console.log('uuid is', uuid);
        if (!uuidPattern.test(uuid)) {
          res.status(404).send('not found');
          return;
        }

        // check if webview with uuid exists
        const rootExtensionPath = this.#uuidAndPaths.get(uuid);

        if (!rootExtensionPath) {

       // throw an error (500)
       res.status(500).send('missing parameter');
       return;
        }

         // construct path from root path and req.path
         const fullPath = `${rootExtensionPath}/${req.path}`;

         // make it absolute
         const absolutePath = resolve(fullPath);

         // root path in absolute form
         const rootExtensionPathAbsolute = resolve(rootExtensionPath);

         // check that path is subfolder of root path
         if (!absolutePath.startsWith(rootExtensionPathAbsolute)) {
           res.status(404).send('not found');
           return;
         }

         // check that path exists on the filesystem
         if (!existsSync(absolutePath)) {
           res.status(404).send('not found');
           return;
         }

         // send content of absolute path with express
         res.sendFile(absolutePath);

    });

    app.use('/', this.#router);

  }

  // start the express server
  async start(): Promise<void> {
    await this.#expressServer.start();
  }

  // stop the express server
  async stop(): Promise<void> {
    await this.#expressServer.stop();
  }

  createWebviewPanel(
    extensionInfo: { id: string; extensionPath: string; icon?: string | { light: string; dark: string } },
    viewType: string,
    title: string,
    options?: podmanDesktopAPI.WebviewOptions,
  ): podmanDesktopAPI.WebviewPanel {
    const id = `${this.#count}`;
    this.#count++;

    // build webwiew

    let iconPath: IconPath | undefined = undefined;
    if (extensionInfo.icon) {
      if (typeof extensionInfo.icon === 'string') {
        iconPath = Uri.file(extensionInfo.icon);
      } else {
        iconPath = {
          light: Uri.file(extensionInfo.icon.light),
          dark: Uri.file(extensionInfo.icon.dark),
        };
      }
    }
    const webview: WebviewImpl = new WebviewImpl(viewType, id, this.#apiSender, extensionInfo, options ?? {});

    // default icon is the extension icon

    const webviewPanelImpl = new WebviewPanelImpl(id, this, this.#apiSender, webview, {
      title,
      iconPath,
      webviewOptions: options,
      viewType,
    });

    this.#uuidAndPaths.set(webview.uuid, extensionInfo.extensionPath);
    this.#webviews.set(webviewPanelImpl.internalId, webviewPanelImpl);
    this.#apiSender.send('webview-create', webviewPanelImpl.internalId);
    console.log('sending webview-create event...');
    return webviewPanelImpl;
  }

  disposeWebviewPanel(webviewPanelImpl: WebviewPanelImpl): void {
    this.#webviews.delete(webviewPanelImpl.internalId);
    this.#apiSender.send('webview-delete', webviewPanelImpl.internalId);
  }

  async postMessageToWebview(id: string, message: {data: unknown}): Promise<void> {

    /// grab the webview
    const webviewPanelImpl = this.#webviews.get(id);

    await webviewPanelImpl?.webview.handleMessage(message.data);


  }


  listWebviews(): WebviewInfo[] {
    return Array.from(this.#webviews.entries()).map(entry => {
      const id = entry[0];
      const webviewPanelImpl = entry[1];
      const viewType: string = webviewPanelImpl.viewType;
      const sourcePath = webviewPanelImpl.webview.extensionInfo.extensionPath;
      const html = webviewPanelImpl.webview.html;
      let icon;
      if (webviewPanelImpl.iconPath instanceof Uri) {
        icon = webviewPanelImpl.iconPath.fsPath;
      }

      return {
        id,
        viewType,
        sourcePath,
        html,
        icon,
        name: webviewPanelImpl.title,
        uuid: webviewPanelImpl.webview.uuid,
      };
    });
  }
}
