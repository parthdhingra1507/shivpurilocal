class Router {
    constructor() {
        this.cache = new Map();
        this.init();
    }

    init() {
        // Intercept global link clicks for SPA navigation
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link) {
                const href = link.getAttribute('href');
                // Only handle internal links that aren't #anchors or external
                if (href && href.startsWith('/') && !href.startsWith('//') && !href.includes('#')) {
                    e.preventDefault();
                    this.navigate(href);
                }
            }
        });

        // Handle back/forward navigation
        window.addEventListener('popstate', (e) => {
            this.loadPage(window.location.pathname, false);
        });
    }

    async navigate(url) {
        if (window.location.pathname === url) return;
        history.pushState(null, '', url);
        await this.loadPage(url, true);
    }

    async loadPage(url, stickyScroll = true) {
        // Show loading state if slow
        const loadingTimeout = setTimeout(() => document.body.classList.add('loading'), 300);

        try {
            let html;
            if (this.cache.has(url)) {
                html = this.cache.get(url);
            } else {
                const res = await fetch(url);
                if (!res.ok) throw new Error('Network error');
                html = await res.text();
                this.cache.set(url, html);
            }

            clearTimeout(loadingTimeout);
            document.body.classList.remove('loading');

            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const newContent = doc.querySelector('.content-area');
            const currentContent = document.querySelector('.content-area');

            if (newContent && currentContent) {
                // The Update Logic wrapped in View Transition
                const updateDOM = () => {
                    currentContent.innerHTML = newContent.innerHTML;
                    document.title = doc.title;
                    if (stickyScroll) window.scrollTo(0, 0);

                    this.updateNav(url);

                    // Re-run i18n
                    if (window.i18n) window.i18n.updateDOM();

                    // Initialize Scripts
                    requestAnimationFrame(() => {
                        this.runPageScripts(url);
                        // Re-initialize swipe nav if needed or any other global listeners
                    });
                };

                // Use View Transition API if supported
                if (document.startViewTransition) {
                    await document.startViewTransition(() => {
                        updateDOM();
                    }).finished;
                } else {
                    // Fallback for older browsers
                    updateDOM();
                }
            }
        } catch (err) {
            console.error('Route error:', err);
            window.location.href = url; // Fallback to full reload
        }
    }

    updateNav(url) {
        const path = url === '/' ? '/' : url.split('?')[0];
        document.querySelectorAll('.main-nav a').forEach(a => {
            const href = a.getAttribute('href');
            if (href === path || (path !== '/' && href.startsWith(path))) {
                a.classList.add('active');
            } else {
                a.classList.remove('active');
            }
        });
    }

    runPageScripts(url) {
        const path = url;
        console.log('[Router] Dispatching page-loaded for:', path);
        window.dispatchEvent(new CustomEvent('page-loaded', { detail: { page: path } }));
    }
}

// Initialize and expose global instance
window.router = new Router();
