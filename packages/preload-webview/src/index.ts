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


/*
export class DockerExtensionPreload {

  listImages(options?: any): Promise<ImageInfo[]> {
    return ipcInvoke('container-provider-registry:listImages', options);
  }

  listContainers(options?: any): Promise<SimpleContainerInfo[]> {
    return ipcInvoke('container-provider-registry:listSimpleContainers', options);
  }

  initializeDesktopClientAPI(): unknown {


    const

    return result;
  }
}*/

// initialize extension loader mechanism
function initExposure(): void {
  /*
ipcRenderer.on(
  'docker-plugin-adapter:exec-onClose',
  (_, onDockerPluginExecOnCloseCallbackId: number) => {
    // grab callback from the map
    const callback = this.onDockerPluginExecOnCloseCallback.get(onDockerPluginExecOnCloseCallbackId);
    if (callback) {
      callback();
    }
  },
);


  //const dockerExtensionPreload = new DockerExtensionPreload();
  //  const ddClient = dockerExtensionPreload.initializeDesktopClientAPI();
*/
  const hello = function () {
    console.log('hello world in preload code');
  };

  contextBridge.exposeInMainWorld('preloadhello', hello);


  let acquiredApi = false;
  const acquirePodmanDesktopApi = function () {

    let state: unknown = {};




    console.log('acquirePodmanDesktopApi called and window is', window);


    console.log('acquirePodmanDesktopApi called and window.postMessage is', window.postMessage);

    if (acquiredApi) {
      throw new Error('An instance of the VS Code API has already been acquired');
    }
    // can only be called once;
    acquiredApi = true;
    return Object.freeze({
      getState: function () {
        console.log('getState called');
        return state;
      },
      postMessage: (msg: any) => {
        return window.postMessage({ command: 'onmessage', data: msg });
    },
      setState: function (newState: unknown) {
        state = newState;
      }

    });
  }
  contextBridge.exposeInMainWorld('acquirePodmanDesktopApi', acquirePodmanDesktopApi);




}

// expose methods
initExposure();


// add some query selector on did-start-loading
// add some query selector on did-stop-loading
// add some query selector on did-finish-load

function changeContent() {


  let webviewHtmlContent = '';
  if (webviewInfo) {
    webviewHtmlContent = webviewInfo.html;
  }
  const webviewContentHtml = new DOMParser().parseFromString(webviewHtmlContent, 'text/html');

  /*
  `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <title>hello world</title>
    </head>
  <h1>hello injected world</h1><button onclick="foo()">Click</button><img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" />

  </html>
  `
  */

/*
  const additionalScript = webviewContentHtml.createElement('script');
  additionalScript.textContent = 'function foo() { console.log("foo injected");}';

//   additionalScript.textContent += 'const acquirePodmanDesktopApi = (function()  { console.log("podmanDesktopApi being called");})();';

  // append the script to the head
    webviewContentHtml.head.appendChild(additionalScript);*/




  webviewContentHtml.documentElement.style.setProperty('font-family', 'monospace');

  const htmlContent = '<!DOCTYPE html>\n' + webviewContentHtml.documentElement.outerHTML;
console.log('want to write content', htmlContent);

 document.open();
  document.write(htmlContent);
  document.close();


}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');

  // wait 5s before changing content
  setTimeout(() => {
    console.log('changing content');
    changeContent();
  }, 5000);

  // what is the content of the html page
  console.log('document.documentElement', document.documentElement.outerHTML);




});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
console.log('url params are', urlParams);

console.log('query string is', queryString);

const webviewId = urlParams.get('webviewId');
console.log('webviewId is', webviewId);
ipcInvoke('webviewRegistry:listWebviews').then((webviews: WebviewInfo[]) => {
  console.log('webviews are', webviews);
  webviewInfo = webviews.find(webview => webview.id === webviewId);
  console.log('webviewInfo is', webviewInfo);
}).catch((error) => {
  console.log('error is', error);
}
);


ipcRenderer.on('webview-post-message', (_, target: any) => {
 console.log('receive an event webview:postMessage', target)
 window.dispatchEvent(new MessageEvent('message', { data: target.message }));
});
