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

import * as extensionApi from '@podman-desktop/api';

const cats = {
  'Coding Cat': 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
  'Compiling Cat': 'https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif',
  'Testing Cat': 'https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif',
};
export async function activate(context: extensionApi.ExtensionContext): Promise<void> {
  console.log('starting extension webview-sample');

  context.subscriptions.push(
    extensionApi.commands.registerCommand('catCoding.start', () => {
      CatCodingPanel.createOrShow(context.extensionUri);
    }),
  );
  context.subscriptions.push(
    extensionApi.commands.registerCommand('catCoding.doRefactor', () => {
      if (CatCodingPanel.currentPanel) {
        CatCodingPanel.currentPanel.doRefactor();
      }
    }),
  );
}

export function deactivate(): void {
  console.log('stopping webview-sample extension');
}

function getWebviewOptions(extensionUri: extensionApi.Uri): extensionApi.WebviewOptions {
  return {
    // Enable javascript in the webview
    // enableScripts: true,

    // And restrict the webview to only loading content from our extension's `media` directory.
    localResourceRoots: [extensionApi.Uri.joinPath(extensionUri, 'media')],
  };
}

/**
 * Manages cat coding webview panels
 */
class CatCodingPanel {
  /**
   * Track the currently panel. Only allow a single panel to exist at a time.
   */
  public static currentPanel: CatCodingPanel | undefined;

  public static readonly viewType = 'catCoding';

  private readonly _panel: extensionApi.WebviewPanel;
  private readonly _extensionUri: extensionApi.Uri;
  private _disposables: extensionApi.Disposable[] = [];

  public static createOrShow(extensionUri: extensionApi.Uri) {
    // If we already have a panel, show it.
    if (CatCodingPanel.currentPanel) {
      CatCodingPanel.currentPanel._panel.reveal();
      return;
    }

    // Otherwise, create a new panel.
    const panel = extensionApi.window.createWebviewPanel(
      CatCodingPanel.viewType,
      'Cat Coding',
      getWebviewOptions(extensionUri),
    );

    CatCodingPanel.currentPanel = new CatCodingPanel(panel, extensionUri);
  }

  public static revive(panel: extensionApi.WebviewPanel, extensionUri: extensionApi.Uri) {
    CatCodingPanel.currentPanel = new CatCodingPanel(panel, extensionUri);
  }

  private constructor(panel: extensionApi.WebviewPanel, extensionUri: extensionApi.Uri) {
    this._panel = panel;
    this._extensionUri = extensionUri;

    // Set the webview's initial html content
    this._update();

    // Listen for when the panel is disposed
    // This happens when the user closes the panel or when the panel is closed programmatically
    this._panel.onDidDispose(() => this.dispose(), undefined, this._disposables);

    // Update the content based on view changes
    this._panel.onDidChangeViewState(
      _e => {
        if (this._panel.visible) {
          this._update();
        }
      },
      undefined,
      this._disposables,
    );

    // Handle messages from the webview
    this._panel.webview.onDidReceiveMessage(
      message => {
        switch (message.command) {
          case 'alert':
            extensionApi.window.showErrorMessage(message.text);
            return;
        }
      },
      null,
      this._disposables,
    );
  }

  public doRefactor() {
    // Send a message to the webview webview.
    // You can send any JSON serializable data.
    this._panel.webview.postMessage({ command: 'refactor' });
  }

  public dispose() {
    CatCodingPanel.currentPanel = undefined;

    // Clean up our resources
    this._panel.dispose();

    while (this._disposables.length) {
      const x = this._disposables.pop();
      if (x) {
        x.dispose();
      }
    }
  }

  private _update() {
    const webview = this._panel.webview;

    // take randomly one of the key from cats
    const catName = Object.keys(cats)[Math.floor(Math.random() * (Object.keys(cats).length - 1))];
    this._updateForCat(webview, catName as keyof typeof cats);
  }

  private _updateForCat(webview: extensionApi.Webview, catName: keyof typeof cats) {
    this._panel.title = catName;
    this._panel.webview.html = this._getHtmlForWebview(webview, cats[catName]);
  }

  private _getHtmlForWebview(webview: extensionApi.Webview, catGifPath: string) {
    // Local path to main script run in the webview
    const scriptPathOnDisk = extensionApi.Uri.joinPath(this._extensionUri, 'media', 'main.js');

    // And the uri we use to load this script in the webview
    const scriptUri = webview.asWebviewUri(scriptPathOnDisk);

    // Local path to css styles
    const styleResetPath = extensionApi.Uri.joinPath(this._extensionUri, 'media', 'reset.css');
    const stylesPathMainPath = extensionApi.Uri.joinPath(this._extensionUri, 'media', 'vscode.css');

    // Uri to load styles into webview
    const stylesResetUri = webview.asWebviewUri(styleResetPath);
    const stylesMainUri = webview.asWebviewUri(stylesPathMainPath);

    // Use a nonce to only allow specific scripts to be run
    const nonce = getNonce();

    return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">

				<!--
					Use a content security policy to only allow loading images from https or from our extension directory,
					and only allow scripts that have a specific nonce.

				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; img-src ${webview.cspSource} https:; script-src 'nonce-${nonce}';">
				-->
				<meta name="viewport" content="width=device-width, initial-scale=1.0">

				<link href="${stylesResetUri}" rel="stylesheet">
				<link href="${stylesMainUri}" rel="stylesheet">

				<title>Cat Coding</title>
			</head>
			<body>
				<img src="${catGifPath}" width="300" />
				<h1 id="lines-of-code-counter">0</h1>

				<script nonce="${nonce}" src="${scriptUri}"></script>
			</body>
			</html>`;
  }
}

function getNonce() {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
