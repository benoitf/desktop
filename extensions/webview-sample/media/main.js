// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.

(function () {

console.log('globl objects are', Object.keys(window));

  console.log('function acquirePodmanDesktopApi is ', acquirePodmanDesktopApi);


  const podmanDesktopApi = acquirePodmanDesktopApi();

console.log('found podmanDesktopApi', podmanDesktopApi);

  const oldState = /** @type {{ count: number} | undefined} */ (podmanDesktopApi.getState());

  console.log('Initial state', oldState);

  const counter = /** @type {HTMLElement} */ (document.getElementById('lines-of-code-counter'));

  let currentCount = (oldState && oldState.count) || 0;
  console.log('currentCount is', currentCount);
  counter.textContent = `${currentCount}`;

  setInterval(() => {
      counter.textContent = `${currentCount++} `;

      // Update state
      podmanDesktopApi.setState({ count: currentCount });

      // Alert the extension when the cat introduces a bug
      if (Math.random() < Math.min(0.001 * currentCount, 0.05)) {
        // Send a message back to the extension
         /*podmanDesktopApi.postMessage({
              command: 'alert',
              text: '🐛  on line ' + currentCount
          });*/
      }
  }, 100);

  // Handle messages sent from the extension to the webview
  window.addEventListener('message', event => {
      const message = event.data; // The json data that the extension sent
      console.log('receive message through window event listener', event);
      console.log('receive message.command through window event listener', message.command);
      switch (message.command) {
          case 'refactor':
            const oldCount = currentCount;
            currentCount = Math.ceil(currentCount * 0.5);
            console.log('We have refactor, currentCount is', currentCount, 'and oldCount is', oldCount);
              counter.textContent = `${currentCount}`;
              break;
      }
  });
}());
