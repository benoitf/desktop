/**********************************************************************
 * Copyright (C) 2022-2023 Red Hat, Inc.
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

/**
 * @module preload
 */
import type { WebviewInfo } from '../../main/src/plugin/api/webview-info';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { contextBridge, ipcRenderer } from 'electron';

let webviewInfo: WebviewInfo | undefined;

interface ErrorMessage {
  name: string;
  message: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extra: any;
}

function decodeError(error: ErrorMessage) {
  const e = new Error(error.message);
  e.name = error.name;
  Object.assign(e, error.extra);
  return e;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function ipcInvoke(channel: string, ...args: any) {
  const { error, result } = await ipcRenderer.invoke(channel, ...args);
  if (error) {
    throw decodeError(error);
  }
  return result;
}

function postWebviewMessage(message: any) {
  ipcInvoke('webviewRegistry:post-message',
    webviewInfo?.id,
    message,
  );
}

function initExposure(): void {
  let acquiredApi = false;
  const acquirePodmanDesktopApi = function () {
    let state: unknown = {};

    if (acquiredApi) {
      throw new Error('An instance of the VS Code API has already been acquired');
    }
    // can only be called once;
    acquiredApi = true;
    return Object.freeze({
      getState: function () {
        return state;
      },
      postMessage: (msg: any) => {
        return postWebviewMessage({ command: 'onmessage', data: msg });
      },
      setState: function (newState: unknown) {
        state = newState;
      },
    });
  };
  contextBridge.exposeInMainWorld('acquirePodmanDesktopApi', acquirePodmanDesktopApi);
}

// expose methods
initExposure();

function changeContent() {
  let webviewHtmlContent = '';
  if (webviewInfo) {
    webviewHtmlContent = webviewInfo.html;
  }
  const webviewContentHtml = new DOMParser().parseFromString(webviewHtmlContent, 'text/html');

  webviewContentHtml.documentElement.style.setProperty('font-family', 'monospace');

  const htmlContent = '<!DOCTYPE html>\n' + webviewContentHtml.documentElement.outerHTML;
  console.log('want to write content', htmlContent);

  document.open();
  document.write(htmlContent);
  document.close();
}

document.addEventListener('DOMContentLoaded', () => {
  // wait 50ms before changing content
  setTimeout(() => {
    changeContent();
  }, 50);

  // what is the content of the html page
  console.log('document.documentElement', document.documentElement.outerHTML);
});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const webviewId = urlParams.get('webviewId');
ipcInvoke('webviewRegistry:listWebviews')
  .then((webviews: WebviewInfo[]) => {
    webviewInfo = webviews.find(webview => webview.id === webviewId);
    console.log('webviewInfo is', webviewInfo);
  })
  .catch(error => {
    console.log('error is', error);
  });

ipcRenderer.on('webview-post-message', (_, target: any) => {
  console.log('receive an event webview:postMessage', target);
  window.dispatchEvent(new MessageEvent('message', { data: target.message }));
});
