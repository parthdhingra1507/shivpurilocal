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

    sponsoredItems: [
        {
            title: {
                en: "Traditional Joint Pain Relief from local Shivpuri herbs",
                hi: "शिवपुरी की पारंपरिक जड़ी-बूटियों से जोड़ों के दर्द में पाएं राहत"
            },
            source: {
                en: "Local Wellness",
                hi: "स्थानीय स्वास्थ्य"
            },
            url: "https://shivpurilocal.in/wellness",
            image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?q=80&w=800&auto=format&fit=crop",
            isSponsored: true
        },
        {
            title: {
                en: "Mukhyamantri Pension Scheme - New Registration Drive in Shivpuri",
                hi: "मुख्यमंत्री पेंशन योजना - शिवपुरी में नए पंजीकरण शुरू"
            },
            source: {
                en: "Govt Updates",
                hi: "सरकारी अपडेट"
            },
            url: "https://shivpurilocal.in/govt-updates",
            image: "https://images.unsplash.com/photo-1605705664878-6617a61d87f7?q=80&w=800&auto=format&fit=crop",
            isSponsored: true
        },
        {
            title: {
                en: "Ancient Shiv Temple Special Darshan Timings this Sunday",
                hi: "प्राचीन शिव मंदिर - इस रविवार विशेष दर्शन का समय"
            },
            source: {
                en: "Spiritual",
                hi: "आध्यात्मिक"
            },
            url: "https://shivpurilocal.in/spiritual",
            image: "https://images.unsplash.com/photo-1544026354-996414fd3738?q=80&w=800&auto=format&fit=crop",
            isSponsored: true
        }
    ],

    renderNews(articles) {
        const grid = document.getElementById('news-grid');
        if (!grid) return;

        const isHi = window.i18n ? window.i18n.lang === 'hi' : false;
        const currentLang = window.i18n ? window.i18n.lang : 'en';

        if (!articles || articles.length === 0) {
            grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--gray-600); padding: 2rem;">
                ${isHi ? 'कोई खबर नहीं मिली' : 'No news found'}
            </p>`;
            return;
        }

        grid.innerHTML = '';

        // Merge sponsored items into the feed
        const combinedFeed = [...articles];
        this.sponsoredItems.forEach((sp, index) => {
            const pos = (index + 1) * 3; // Inject every 3rd item
            if (pos <= combinedFeed.length) {
                combinedFeed.splice(pos, 0, sp);
            } else {
                combinedFeed.push(sp);
            }
        });

        combinedFeed.forEach(news => {
            const card = document.createElement('article');
            card.className = news.isSponsored ? 'news-card sponsored-card' : 'news-card';

            const title = news.isSponsored ? news.title[currentLang] : (news.title || '');
            const time = news.isSponsored ? (isHi ? 'प्रायोजित' : 'Sponsored') : this.getRelativeTime(news.publishedAt);
            const source = news.isSponsored ? news.source[currentLang] : (news.source || (isHi ? 'समाचार' : 'News'));
            const url = news.url || '#';

            const shareText = isHi ? 'साझा करें' : 'Share';
            const readText = isHi ? 'पूरा पढ़ें' : 'Read More';

            const whatsappMsg = `📰 *${title}*\n\n🔗 ${url}\n\nvia shivpurilocal.in`;
            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMsg)}`;

            const assetHtml = news.isSponsored ? `
                <div class="news-image-container">
                    <img src="${news.image}" alt="sponsored" class="news-image">
                    <span class="sponsored-badge">${isHi ? 'प्रायोजित' : 'Sponsored'}</span>
                </div>
            ` : '';

            card.innerHTML = `
                ${assetHtml}
                <div class="news-body">
                    <div class="news-meta">
                        <span class="news-source">${source}</span>
                        <span class="news-time">${time}</span>
                    </div>
                    <h3 class="news-title">${title}</h3>
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
