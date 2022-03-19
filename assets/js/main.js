// Only trigger if service workers are supported in browser.
if ('serviceWorker' in navigator) {
    // Wait until window is loaded before registering.
    window.addEventListener('load', () => {
        // Register the service worker with default scope.
        navigator.serviceWorker.register("./service-worker.js")
            // Debugging.
            .then(() => console.log('SW registered!'))
            .catch((error) => console.error('SW registration failed!', error));
    });
}