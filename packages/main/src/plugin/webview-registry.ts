/**********************************************************************
 * Copyright (C) 2023 Red Hat, Inc.
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

export class WebviewRegistry {
  #count = 0;
  #webviews: Map<string, WebviewPanelImpl>;

  #apiSender: ApiSenderType;

  constructor(apiSender: ApiSenderType) {
    this.#apiSender = apiSender;
    this.#webviews = new Map();
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

    this.#webviews.set(webviewPanelImpl.internalId, webviewPanelImpl);
    this.#apiSender.send('webview-create', webviewPanelImpl.internalId);
    console.log('sending webview-create event...');
    return webviewPanelImpl;
  }

  disposeWebviewPanel(webviewPanelImpl: WebviewPanelImpl): void {
    this.#webviews.delete(webviewPanelImpl.internalId);
    this.#apiSender.send('webview-delete', webviewPanelImpl.internalId);
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
