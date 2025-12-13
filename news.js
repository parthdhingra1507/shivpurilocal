const NewsApp = {
    API_URL: window.location.hostname === 'localhost'
        ? '/api/news'
        : 'https://shivpurilocal-backend.onrender.com/api/news',

    init() {
        this.fetchNews();
        // Listen for lang changes
        window.addEventListener('lang-changed', () => this.fetchNews());
    },

    getRelativeTime(dateStr) {
        if (!dateStr) return '';
        const date = new Date(dateStr);
        const now = new Date();
        const diff = Math.floor((now - date) / 1000);
        const isHi = window.i18n ? window.i18n.lang === 'hi' : false;

        if (diff < 60) return isHi ? 'अभी' : 'Just now';
        if (diff < 3600) return `${Math.floor(diff / 60)} ${isHi ? 'मिनट पहले' : 'min ago'}`;
        if (diff < 86400) return `${Math.floor(diff / 3600)} ${isHi ? 'घंटे पहले' : 'hours ago'}`;
        return `${Math.floor(diff / 86400)} ${isHi ? 'दिन पहले' : 'days ago'}`;
    },

    renderNews(articles) {
        const grid = document.getElementById('news-grid');
        if (!grid) return;

        const isHi = window.i18n ? window.i18n.lang === 'hi' : false;

        if (!articles || articles.length === 0) {
            grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--gray-600); padding: 2rem;">
                ${isHi ? 'कोई खबर नहीं मिली' : 'No news found'}
            </p>`;
            return;
        }

        grid.innerHTML = '';

        articles.forEach(news => {
            const card = document.createElement('article');
            card.className = 'news-card';

            const title = news.title || '';
            const description = news.description || news.content || '';
            // Truncate description to ~150 characters
            const truncatedDesc = description.length > 150
                ? description.substring(0, 150) + '...'
                : description;

            const time = this.getRelativeTime(news.publishedAt);
            const source = news.source || (isHi ? 'समाचार' : 'News');
            const url = news.url || '#';

            const shareText = isHi ? 'साझा करें' : 'Share';
            const readText = isHi ? 'पूरा पढ़ें' : 'Read More';

            const whatsappMsg = `📰 *${title}*\n\n${truncatedDesc}\n\n🔗 ${url}\n\nvia shivpurilocal.in`;
            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMsg)}`;

            card.innerHTML = `
                <div class="news-body">
                    <div class="news-meta">
                        <span class="news-source">${source}</span>
                        <span class="news-time">${time}</span>
                    </div>
                    <h3 class="news-title">${title}</h3>
                    ${truncatedDesc ? `<p class="news-description">${truncatedDesc}</p>` : ''}
                    <div class="card-actions">
                        <a href="${whatsappUrl}" target="_blank" rel="noopener" class="share-btn">${shareText}</a>
                        <a href="${url}" target="_blank" rel="noopener" class="map-btn">${readText} ↗</a>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    },

    async fetchNews() {
        const grid = document.getElementById('news-grid');
        if (!grid) return;

        const isHi = window.i18n ? window.i18n.lang === 'hi' : false;
        const currentLang = window.i18n ? window.i18n.lang : 'en';

        grid.innerHTML = `<div class="loading-state">
            <div class="loading-spinner"></div>
            <p>${isHi ? 'खबरें लोड हो रही हैं...' : 'Loading news...'}</p>
        </div>`;

        try {
            const res = await fetch(`${this.API_URL}?lang=${currentLang}`);
            if (!res.ok) throw new Error('API error');
            const data = await res.json();
            this.renderNews(data.articles || []);
        } catch (e) {
            console.error('News fetch error:', e);
            grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 2rem;">
                <p style="color: var(--gray-500); margin-bottom: 1rem;">
                    ${isHi ? 'खबरें लोड नहीं हो सकीं' : 'Could not load news'}
                </p>
                <button onclick="NewsApp.fetchNews()" style="padding: 0.5rem 1rem; background: var(--primary); color: white; border: none; border-radius: var(--radius-sm); cursor: pointer;">
                    ${isHi ? 'पुनः प्रयास करें' : 'Retry'}
                </button>
            </div>`;
        }
    }
};

// Listen for Router Page Load
window.addEventListener('page-loaded', (e) => {
    if (e.detail.page === '/news') {
        NewsApp.init();
    }
});

// Initial Check (if loaded directly) - Wait for DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const path = window.location.pathname;
        if (path === '/news' || path === '/news.html') {
            console.log('[News] DOM loaded, initializing');
            NewsApp.init();
        }
    });
} else {
    // DOM already loaded
    const path = window.location.pathname;
    if (path === '/news' || path === '/news.html') {
        console.log('[News] DOM already ready, initializing');
        NewsApp.init();
    }
}
