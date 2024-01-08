<script lang="ts">
import { afterUpdate, onDestroy, onMount } from 'svelte';
import Route from '../../Route.svelte';

import { webviews } from '/@/stores/webviews';
import { get } from 'svelte/store';
import type { WebviewInfo } from '../../../../main/src/plugin/api/webview-info';

export let id: string;

let source: string | undefined;
let name: string | undefined;
// should use a 'webviews' store to get all webviews

let preloadPath: string;

let matchingWebview: WebviewInfo | undefined;

$: matchingWebview = get(webviews).find(webview => webview.id === id);

source = 'file:///Users/benoitf/git/benoitf/webview-example/index.html';
name = matchingWebview?.name;

let timeout: NodeJS.Timeout;

async function updateData(): Promise<void> {
  // grab matching webview object from the id

  console.log('found matching webview', matchingWebview);

  preloadPath = await window.getWebviewPreloadPath();
  console.log('preload path is', String(preloadPath));
}

afterUpdate(() => {
  console.log('after update id is', id);
  updateData();
});

onMount(async () => {
  await updateData();

  // after 3s open dev tools
  timeout = setTimeout(() => {
    (webviewElement as any).openDevTools();
  }, 1000);
});

onDestroy(() => {
  console.log('destroying webview');
  // destroy webview
  // webviewElement.remove();

  timeout && clearTimeout(timeout);
});

let webviewElement: HTMLWebViewElement;

// if matching id, send message to webview
window.events?.receive('webview-post-message', (webviewEvent: { id: string; message: unknown }) => {
  console.log(
    'something posted a message to webview',
    webviewEvent.id,
    'with message ',
    webviewEvent.message,
    'and current id is',
    id,
  );

  if (id === webviewEvent.id) {
    console.log('sending message to webview as id is matching', webviewEvent.message);
    (webviewElement as any).send('webview-post-message', { message: webviewEvent.message });
  }
});
</script>

{#if source && preloadPath}
  <Route path="/*" breadcrumb="{name}">
    <webview
      bind:this="{webviewElement}"
      httpreferrer="http://{matchingWebview?.uuid}.webview.localhost:45000"
      src="http://{matchingWebview?.uuid}.webview.localhost:45000?webviewId={matchingWebview?.id}"
      preload="{preloadPath}"
      style="height: 100%; width: 100%"></webview>
  </Route>
{/if}
