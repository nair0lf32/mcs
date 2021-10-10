if ('serviceWorker' in navigator) {
    // Wait until window is loaded before registering.
    window.addEventListener('load', () => {
        // Register the service worker
        navigator.serviceWorker.register("{{ '/service-worker.js?v=' | append: site.github.build_revision | relative_url }}")
            // Output success/failure of registration.
            .then(() => console.log('SW registered'))
            .catch(() => console.error('SW registration failed'));
    });
}
