class Router {
    constructor() {
        this.cache = new Map();
        this.init();
    }

    init() {
        // Intercept clicks
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (!link) return;

            const href = link.getAttribute('href');

            // Ignore external links, anchors, or new tab links
            if (!href ||
                href.startsWith('http') ||
                href.startsWith('//') ||
                href.startsWith('#') ||
                link.target === '_blank' ||
                href.startsWith('mailto:') ||
                href.startsWith('tel:')) {
                return;
            }

            e.preventDefault();
            this.navigate(href);
        });

        // Handle Back/Forward
        window.addEventListener('popstate', (e) => {
            this.loadPage(window.location.pathname, false);
        });
    }

    async navigate(url) {
        history.pushState(null, '', url);
        await this.loadPage(url, true);
    }

    async loadPage(url, stickyScroll = true) {
        // Show loading bar (optional)
        document.body.classList.add('loading');

        try {
            let html;
            // Simple cache
            if (this.cache.has(url)) {
                html = this.cache.get(url);
            } else {
                const res = await fetch(url);
                if (!res.ok) throw new Error('Network error');
                html = await res.text();
                this.cache.set(url, html);
            }

            // Parse HTML
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const newContent = doc.querySelector('.content-area');
            const currentContent = document.querySelector('.content-area');

            if (newContent && currentContent) {
                // Fade out
                currentContent.style.opacity = '0';

                setTimeout(() => {
                    currentContent.innerHTML = newContent.innerHTML;
                    document.title = doc.title;

                    // Update Active Nav State
                    this.updateNav(url);

                    // Re-run i18n
                    if (window.i18n) window.i18n.updateDOM();

                    // Re-initialize Page Logic
                    this.runPageScripts(url);

                    // Fade in
                    currentContent.style.opacity = '1';
                    if (stickyScroll) window.scrollTo(0, 0);

                    document.body.classList.remove('loading');
                }, 200);
            }
        } catch (err) {
            console.error('Route error:', err);
            window.location.href = url; // Fallback to full reload
        }
    }

    updateNav(url) {
        const path = url === '/' ? '/' : url.split('?')[0]; // Simple path match
        document.querySelectorAll('.main-nav a').forEach(a => {
            if (a.getAttribute('href') === path) {
                a.classList.add('active');
            } else {
                a.classList.remove('active');
            }
        });
    }

    runPageScripts(url) {
        // Dispatch event so other scripts can re-init
        const path = url === '/' ? 'home' : url.replace('/', '');
        const event = new CustomEvent('page-loaded', { detail: { page: path } });
        window.dispatchEvent(event);
    }
}

// Initialize
window.router = new Router();
