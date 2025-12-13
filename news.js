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
            const time = this.getRelativeTime(news.publishedAt);
            const source = news.source || (isHi ? 'समाचार' : 'News');
            const url = news.url || '#';

            const shareText = isHi ? 'साझा करें' : 'Share';
            const readText = isHi ? 'पूरा पढ़ें' : 'Read More';

            const whatsappMsg = `📰 *${title}*\n\n🔗 ${url}\n\nvia shivpurilocal.in`;
            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMsg)}`;

            card.innerHTML = `
                <div class="news-body">
                    <div class="news-meta">
                        <span class="news-source">${source}</span>
                        <span class="news-time">${time}</span>
                    </div>
                    <h3 class="news-title">${title}</h3>
                    <div class="card-actions">
                        <a href="${whatsappUrl}" target="_blank" rel="noopener" class="share-btn">${shareText}</a>
                        <button class="map-btn" onclick="NewsApp.openArticle('${url.replace(/'/g, "\\'")}', '${title.replace(/'/g, "\\'")}')">
                            ${readText} ↗
                        </button>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    },

    openArticle(url, title) {
        // Create modal if it doesn't exist
        let modal = document.getElementById('article-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'article-modal';
            modal.className = 'article-modal';
            modal.innerHTML = `
                <div class="article-modal-content">
                    <div class="article-modal-header">
                        <button class="article-back-btn" onclick="NewsApp.closeArticle()">
                            ← Back to News
                        </button>
                        <h3 class="article-modal-title"></h3>
                        <button class="article-close-btn" onclick="NewsApp.closeArticle()">✕</button>
                    </div>
                    <div class="article-loading">
                        <div class="loading-spinner"></div>
                        <p>Loading article...</p>
                    </div>
                    <iframe class="article-iframe" frameborder="0" allowfullscreen></iframe>
                    <div class="article-blocked" style="display: none;">
                        <div style="text-align: center; padding: 40px;">
                            <div style="font-size: 48px; margin-bottom: 16px;">🔒</div>
                            <h3 style="margin-bottom: 12px;">Cannot Display Article</h3>
                            <p style="color: var(--gray-600); margin-bottom: 24px;">
                                This website doesn't allow embedding. Opening in new tab...
                            </p>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
        }

        // Update modal content
        const iframe = modal.querySelector('.article-iframe');
        const modalTitle = modal.querySelector('.article-modal-title');
        const loading = modal.querySelector('.article-loading');
        const blocked = modal.querySelector('.article-blocked');

        modalTitle.textContent = title;

        // Reset states
        loading.style.display = 'flex';
        iframe.style.display = 'none';
        blocked.style.display = 'none';

        // Try to load in iframe
        iframe.src = url;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Detect if iframe is blocked
        let iframeLoaded = false;

        iframe.onload = () => {
            iframeLoaded = true;
            loading.style.display = 'none';
            iframe.style.display = 'block';
        };

        // If iframe doesn't load in 3 seconds, assume it's blocked
        setTimeout(() => {
            if (!iframeLoaded) {
                loading.style.display = 'none';
                blocked.style.display = 'flex';

                // Open in new tab after 2 seconds
                setTimeout(() => {
                    window.open(url, '_blank');
                    NewsApp.closeArticle();
                }, 2000);
            }
        }, 3000);
    },

    closeArticle() {
        const modal = document.getElementById('article-modal');
        if (modal) {
            modal.classList.remove('active');
            const iframe = modal.querySelector('.article-iframe');
            iframe.src = ''; // Stop loading
            document.body.style.overflow = ''; // Restore scroll
        }
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
