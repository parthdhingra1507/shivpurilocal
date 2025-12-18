
let placesData = [];

async function fetchPlacesData() {
    try {
        const response = await fetch('/api/places');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        // Map API response to frontend structure
        return data.map(p => ({
            name: p.name_en,
            name_hi: p.name_hi,
            category: p.category,
            category_hi: p.category_hi,
            area: p.area,
            area_hi: p.area_hi,
            shortDescription: p.description_en,
            shortDescription_hi: p.description_hi,
            tags: parseTags(p.tags),
            image_url: p.image_url
        }));
    } catch (error) {
        console.error('Error fetching places data:', error);
        return [];
    }
}

function parseTags(tags) {
    if (Array.isArray(tags)) return tags;
    if (typeof tags === 'string') {
        try {
            // Try JSON parse first
            return JSON.parse(tags);
        } catch {
            return tags.split(',').map(t => t.trim());
        }
    }
    return [];
}

function renderPlaces() {
    const grid = document.getElementById('places-grid') || document.getElementById('schedule-grid');

    if (!grid) return;

    grid.innerHTML = '';

    const isHi = window.i18n ? window.i18n.lang === 'hi' : false;
    const noPlacesText = isHi ? "कोई जगह नहीं मिली।" : "No places found.";

    if (placesData.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">${noPlacesText}</p>`;
        return;
    }

    placesData.forEach(place => {
        const name = isHi ? (place.name_hi || place.name) : place.name;
        const category = isHi ? (place.category_hi || place.category) : place.category;
        const area = isHi ? (place.area_hi || place.area) : place.area;
        const desc = isHi ? (place.shortDescription_hi || place.shortDescription) : place.shortDescription;

        const card = document.createElement('div');
        card.className = 'place-card';

        const shareText = `📍 *${name}*\n\n${desc}\n\nCategory: ${category}\nArea: ${area}\n\nExplore more on: https://shivpurilocal.in/places`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

        // Tags logic
        const tagsHtml = (place.tags || []).slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('');

        card.innerHTML = `
            <div class="place-content">
                <span class="place-cat">${category}</span>
                <h3 class="place-name">${name}</h3>
                <p class="place-area">📍 ${area}</p>
                <p class="place-desc">${desc}</p>
                
                <div class="place-tags">
                    ${tagsHtml}
                </div>

                <div class="card-actions">
                    <a href="${whatsappUrl}" target="_blank" class="share-btn">${window.i18n && window.i18n.t ? window.i18n.t('share') : 'Share'}</a>
                    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ' Shivpuri')}" target="_blank" class="map-btn">${window.i18n && window.i18n.t ? window.i18n.t('map') : 'Map'}</a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

async function initPlaces() {
    const path = window.location.pathname;
    const shouldInit = document.querySelector('.page-places') || path === '/places' || path === '/places.html';

    if (shouldInit) {
        console.log('[Places] Initializing places page');
        placesData = await fetchPlacesData();
        renderPlaces();
    }
}

// Router Event
document.addEventListener('page-loaded', (e) => {
    const page = e.detail.page;
    if (page === '/places' || page === '/places.html' || page.includes('/places')) {
        console.log('[Places] page-loaded event triggered for:', page);
        initPlaces();
    }
});

// Lang Change Event
window.addEventListener('lang-changed', () => {
    // Only re-render if we are on places page
    const path = window.location.pathname;
    if (path === '/places' || path === '/places.html') {
        renderPlaces();
    }
});

// Direct Load - Wait for DOM
function tryInitPlaces() {
    const path = window.location.pathname;
    if (path === '/places' || path === '/places.html') {
        console.log('[Places] Attempting to initialize');
        // Use requestAnimationFrame to ensure DOM is fully rendered
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                initPlaces();
            });
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tryInitPlaces);
} else {
    // DOM already loaded, but still use RAF to ensure rendering is complete
    tryInitPlaces();
}
