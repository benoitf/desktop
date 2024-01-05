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

import type { Event, Webview, WebviewOptions } from '@podman-desktop/api';
import { Emitter } from './events/emitter.js';
import type { ApiSenderType } from './api.js';
import { Uri } from './types/uri.js';
import {randomUUID} from 'node:crypto';

export class WebviewImpl implements Webview {
  readonly #apiSender: ApiSenderType;
  readonly #extensionInfo: { id: string; extensionPath: string };
  readonly #internalId: string;
  readonly #viewType: string;

  #html: string = '';
  #options: WebviewOptions;
  #disposed: boolean = false;
  #uuid: string = '';

  readonly #onDidReceiveMessage = new Emitter<unknown>();
  readonly onDidReceiveMessage: Event<unknown> = this.#onDidReceiveMessage.event;

  constructor(
    readonly viewType: string,
    readonly internalId: string,
    readonly apiSender: ApiSenderType,
    readonly extensionInfoData: { id: string; extensionPath: string },
    options: WebviewOptions,
  ) {
    this.#viewType = viewType;
    this.#internalId = internalId;
    this.#apiSender = apiSender;
    this.#extensionInfo = extensionInfoData;
    this.#options = options;
    this.#uuid = randomUUID();
    console.log('creating webview', this.#internalId);
  }

  get html(): string {
    this.assertNotDisposed();
    return this.#html;
  }

  public get cspSource(): string {
    return `http://*.webview.localhost:9999/`;
  }

  set html(val: string) {
    this.assertNotDisposed();
    if (this.#html !== val) {
      this.#html = val;
      // need to notify the render that the html has changed
      this.#apiSender.send('webview-update:html', { id: this.#internalId, html: val });
    }
  }

  get options(): WebviewOptions {
    this.assertNotDisposed();
    return this.#options;
  }

  // not public interface
  get extensionInfo(): { id: string; extensionPath: string } {
    return this.#extensionInfo;
  }

  // not public interface
  get uuid():string {
    return this.#uuid;
  }

  set options(newOptions: WebviewOptions) {
    this.assertNotDisposed();

    if (JSON.stringify(this.#options ?? {}) !== JSON.stringify(newOptions)) {
      // need to notify the render that the html has changed
      this.#apiSender.send('webview-update:options', { id: this.#internalId, options: newOptions });
    }

    this.#options = newOptions;
  }

  async postMessage(message: unknown): Promise<boolean> {
    if (this.#disposed) {
      return false;
    }
    this.#apiSender.send('webview-post-message', { id: this.#internalId, message });
    return true;
  }

  // notify the consumer if we receive a message
  async handleMessage(message: unknown): Promise<void> {
    this.#onDidReceiveMessage.fire(message);
  }

  protected assertNotDisposed(): void {
    if (this.#disposed) {
      throw new Error(`The webview coming from ${this.#viewType} has been disposed.`);
    }
  }

  asWebviewUri(resource: Uri): Uri {
    // if it comes from http/https, do not convert
    if (resource.scheme === 'http' || resource.scheme === 'https') {
      return resource;
    }

    // if it's a file, encode it
    if (resource.scheme === 'file') {
      // return new Uri('podman-desktop-webview', resource.authority, resource.path, resource.query, resource.fragment);

      // get substring of path
      // remove extension path from path
      const subPath = resource.path.substring(this.#extensionInfo.extensionPath.length);
      console.log('subPath is ', subPath);

      return new Uri( 'http', `${this.#uuid}.webview.localhost:45000`, `${this.#extensionInfo.id}/extensionPath=${subPath}`, resource.query, resource.fragment);
    }
    throw new Error(`The resource ${resource.toString()} is not supported.`);
  }

  dispose(): void {
    if (this.#disposed) {
      return;
    }
    this.#disposed = true;

    // dispose emitters
    this.#onDidReceiveMessage.dispose();
  }
}
