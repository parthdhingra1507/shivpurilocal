/**
 * Version Control & Cache Busting
 * Automatically adds cache-busting query params to all local assets
 */

(function () {
    // Generate version from current deploy (changes every deploy via git push)
    // For truly dynamic versioning, this should be set at build time
    window.APP_BUILD = '20251224-1935'; // UPDATE THIS ON EVERY DEPLOY

    // Add version to dynamically loaded resources
    window.getVersionedUrl = function (url) {
        if (url.includes('?')) {
            return url + '&_v=' + window.APP_BUILD;
        }
        return url + '?_v=' + window.APP_BUILD;
    };

    console.log('[App] Build version:', window.APP_BUILD);
})();
