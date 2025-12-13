const foodData = [
    { name: "Hotel Sonchiraiya", name_hi: "होटल सोनचिरैया", category: "Restaurant & Family Dining", category_hi: "रेस्तरां और पारिवारिक भोजन", area: "Circular Road, Shivpuri", area_hi: "सर्कुलर रोड, शिवपुरी", shortDescription: "Family restaurant for Chinese and North Indian dishes.", shortDescription_hi: "चाइनीज और उत्तर भारतीय व्यंजनों के लिए पारिवारिक रेस्तरां।", approxPriceForTwo: 500, tags: ["north-indian", "chinese", "family"] },
    { name: "Zayka Restaurant", name_hi: "ज़ायका रेस्तरां", category: "Restaurant & Family Dining", category_hi: "रेस्तरां और पारिवारिक भोजन", area: "Near Gwalior Bypass Circle, Shivpuri", area_hi: "ग्वालियर बाईपास सर्कल के पास", shortDescription: "Punjabi and Chinese food, popular mid-budget family spot.", shortDescription_hi: "पंजाबी और चाइनीज भोजन, लोकप्रिय मिड-बजट फैमिली स्पॉट।", approxPriceForTwo: 300, tags: ["punjabi", "north-indian", "chinese", "family"] },
    { name: "Varun Restaurant Inn", name_hi: "वरुण रेस्तरां इन", category: "Restaurant & Family Dining", category_hi: "रेस्तरां और पारिवारिक भोजन", area: "Nai Ki Bagiya, Hospital Road, Shivpuri", area_hi: "नई की बगिया, हॉस्पिटल रोड", shortDescription: "Chinese and Punjabi options for travellers and locals.", shortDescription_hi: "यात्रियों और स्थानीय लोगों के लिए चाइनीज और पंजाबी विकल्प।", approxPriceForTwo: 350, tags: ["punjabi", "chinese", "family"] },
    { name: "Shivpuri Club Cafe", name_hi: "शिवपुरी क्लब कैफे", category: "Restaurant / Casual Dining", category_hi: "रेस्तरां / कैजुअल डाइनिंग", area: "Main Road, Shivpuri", area_hi: "मेन रोड, शिवपुरी", shortDescription: "Casual dining with mixed menu and good ambience.", shortDescription_hi: "अच्छे माहौल और मिश्रित मेनू के साथ कैजुअल डाइनिंग।", approxPriceForTwo: 600, tags: ["north-indian", "snacks", "family", "friends"] },
    { name: "Galaxy Restaurant", name_hi: "गैलेक्सी रेस्तरां", category: "Multi-cuisine Restaurant", category_hi: "मल्टी-कुजीन रेस्तरां", area: "Shivpuri Locality", area_hi: "शिवपुरी", shortDescription: "South Indian, North Indian and Chinese in family setting.", shortDescription_hi: "पारिवारिक सेटिंग में दक्षिण भारतीय, उत्तर भारतीय और चाइनीज।", approxPriceForTwo: 200, tags: ["south-indian", "north-indian", "chinese", "family"] },
    { name: "Nanii Treats", name_hi: "नानी ट्रीट (Nanii Treats)", category: "Street Food & North Indian", category_hi: "स्ट्रीट फूड और उत्तर भारतीय", area: "Shivpuri", area_hi: "शिवपुरी", shortDescription: "Budget-friendly North Indian meals and snacks.", shortDescription_hi: "बजट के अनुकूल उत्तर भारतीय भोजन और नाश्ता।", approxPriceForTwo: 200, tags: ["street-food", "north-indian", "budget"] },
    { name: "Desi Planet", name_hi: "देसी प्लैनेट", category: "Fast Food & Momos", category_hi: "फास्ट फूड और मोमोज", area: "Shivpuri", area_hi: "शिवपुरी", shortDescription: "Momos and fast food for quick bites.", shortDescription_hi: "क्विक बाइट्स के लिए मोमोज और फास्ट फूड।", approxPriceForTwo: 200, tags: ["fast-food", "momos", "street-food"] },
    { name: "Hotel That Baat", name_hi: "होटल ठाठ बात", category: "Street Food / North Indian", category_hi: "स्ट्रीट फूड / उत्तर भारतीय", area: "Shivpuri", area_hi: "शिवपुरी", shortDescription: "Street-style North Indian dishes and beverages.", shortDescription_hi: "स्ट्रीट-स्टाइल उत्तर भारतीय व्यंजन और पेय।", approxPriceForTwo: 400, tags: ["north-indian", "street-food"] },
    { name: "Manoj Nashta Corner", name_hi: "मनोज नाश्ता कॉर्नर", category: "Street Food & Breakfast", category_hi: "स्ट्रीट फूड और नाश्ता", area: "Shivpuri", area_hi: "शिवपुरी", shortDescription: "Popular for nashta items like poha, kachori and jalebi.", shortDescription_hi: "पोहा, कचौरी और जलेबी जैसे नाश्ते के लिए लोकप्रिय।", approxPriceForTwo: 150, tags: ["breakfast", "street-food", "snacks"] },
    { name: "Shiva's Cafe", name_hi: "शिवा कैफे", category: "Cafe & Restaurant", category_hi: "कैफे और रेस्तरां", area: "Physical College Road, Shivpuri", area_hi: "फिजिकल कॉलेज रोड", shortDescription: "Cafe-style hangout with coffee and snacks.", shortDescription_hi: "कॉफी और नाश्ते के साथ कैफे-स्टाइल हैंगआउट।", approxPriceForTwo: 400, tags: ["cafe", "coffee", "snacks", "college-crowd"] },
    { name: "Hum Tum Aur Chai", name_hi: "हम तुम और चाय", category: "Tea Cafe", category_hi: "टी कैफे", area: "In front of Science College, Kamla Ganj", area_hi: "साइंस कॉलेज के सामने, कमला गंज", shortDescription: "Chai-focused cafe with light snacks.", shortDescription_hi: "हल्के नाश्ते के साथ चाय-केंद्रित कैफे।", approxPriceForTwo: 250, tags: ["chai", "cafe", "snacks"] },
    { name: "MP33 Cafe", name_hi: "MP33 कैफे", category: "Cafe & Fast Food", category_hi: "कैफे और फास्ट फूड", area: "Shivpuri", area_hi: "शिवपुरी", shortDescription: "Urban cafe serving fast food, chaats and cheesy dishes.", shortDescription_hi: "फास्ट फूड, चाट और लजीज व्यंजन परोसने वाला अर्बन कैफे।", approxPriceForTwo: 300, tags: ["cafe", "fast-food", "friends"] },
    { name: "Lakapse Cafe & Lounge", name_hi: "लाकाप्स कैफे और लाउंज", category: "Cafe", category_hi: "कैफे", area: "Shivpuri", area_hi: "शिवपुरी", shortDescription: "Lounge-style cafe for coffee and snacks.", shortDescription_hi: "कॉफी और नाश्ते के लिए लाउंज-स्टाइल कैफे।", approxPriceForTwo: 400, tags: ["cafe", "coffee", "snacks"] },
    { name: "Foodose Cafe", name_hi: "फूडोज़ कैफे", category: "Cafe / Coffeehouse", category_hi: "कैफे / कॉफीहाउस", area: "Shivpuri", area_hi: "शिवपुरी", shortDescription: "Coffeehouse with light cafe menu.", shortDescription_hi: "हल्के कैफे मेनू वाला कॉफीहाउस।", approxPriceForTwo: 350, tags: ["coffee", "cafe", "snacks"] },
    { name: "Suman Bakery", name_hi: "सुमन बेकरी", category: "Bakery & Cake Shop", category_hi: "बेकरी और केक शॉप", area: "Lakshmibai Road / Krishnapuram Colony", area_hi: "लक्ष्मीबाई रोड / कृष्णापुरम कॉलोनी", shortDescription: "Cakes, pastries, pizza and baked snacks.", shortDescription_hi: "केक, पेस्ट्री, पिज्जा और बेक्ड स्नैक्स।", approxPriceForTwo: 300, tags: ["bakery", "cakes", "pastries"] },
    { name: "Mahakal Bakery", name_hi: "महाकाल बेकरी", category: "Bakery & Cake Shop", category_hi: "बेकरी और केक शॉप", area: "Ward 26, Mela Ground, Jawahar Colony", area_hi: "जवाहर कॉलोनी", shortDescription: "Local bakery known for fresh morning products.", shortDescription_hi: "ताजा सुबह के उत्पादों के लिए जानी जाने वाली स्थानीय बेकरी।", approxPriceForTwo: 250, tags: ["bakery", "cakes", "snacks"] },
    { name: "Mahadev Bakery", name_hi: "महादेव बेकरी", category: "Bakery & Cake Shop", category_hi: "बेकरी और केक शॉप", area: "Indira Colony, Shivpuri", area_hi: "इंदिरा कॉलोनी", shortDescription: "Neighbourhood bakery for cakes and baked goods.", shortDescription_hi: "केक और बेक्ड सामानों के लिए पड़ोस की बेकरी।", approxPriceForTwo: 250, tags: ["bakery", "cakes"] },
    { name: "Kapil Juice Store", name_hi: "कपिल जूस स्टोर", category: "Juice & Shakes", category_hi: "जूस और शेक", area: "Shivpuri", area_hi: "शिवपुरी", shortDescription: "Fresh fruit juices and milkshakes.", shortDescription_hi: "ताजे फलों के रस और मिल्कशेक।", approxPriceForTwo: 200, tags: ["juice", "shakes", "cold-drinks"] }
];

function renderFood() {
    console.log('[Food] renderFood() called');
    // Similarly check for grid existence. It's likely sharing 'schedule-grid' in existing HTML.
    const grid = document.getElementById('food-grid') || document.getElementById('schedule-grid');
    console.log('[Food] Grid element:', grid);
    if (!grid) {
        console.error('[Food] Grid not found!');
        return;
    }

    grid.innerHTML = '';

    const isHi = window.i18n ? window.i18n.lang === 'hi' : false;
    console.log('[Food] Language:', isHi ? 'Hindi' : 'English');
    const noFoodText = isHi ? "कोई खाने की जगह नहीं मिली।" : "No food spots found.";

    if (foodData.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">${noFoodText}</p>`;
        return;
    }

    console.log('[Food] Rendering', foodData.length, 'food items');

    foodData.forEach(item => {
        const name = isHi ? (item.name_hi || item.name) : item.name;
        const category = isHi ? (item.category_hi || item.category) : item.category;
        const area = isHi ? (item.area_hi || item.area) : item.area;
        const desc = isHi ? (item.shortDescription_hi || item.shortDescription) : item.shortDescription;

        const card = document.createElement('div');
        card.className = 'food-card';

        const shareText = `🍽️ *${name}*\\n\\n${desc}\\n\\nCategory: ${category}\\nArea: ${area}\\nPrice for 2: ₹${item.approxPriceForTwo}\\n\\nExplore more on: https://shivpurilocal.in/food`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

        card.innerHTML = `
            <div class="food-content">
                <span class="food-cat">${category}</span>
                <h3 class="food-name">${name}</h3>
                <p class="food-area">📍 ${area}</p>
                <p class="food-price">💳 ₹${item.approxPriceForTwo} for two</p>
                <p class="food-desc">${desc}</p>

                <div class="food-tags">
                    ${item.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>

                <div class="card-actions">
                    <a href="${whatsappUrl}" target="_blank" class="share-btn">${window.i18n && window.i18n.t ? window.i18n.t('share') : 'Share'}</a>
                    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ' Shivpuri')}" target="_blank" class="map-btn">${window.i18n && window.i18n.t ? window.i18n.t('map') : 'Map'}</a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    console.log('[Food] Rendering complete');
}

function initFood() {
    const path = window.location.pathname;
    const shouldInit = document.querySelector('.page-food') || path === '/food' || path === '/food.html';

    if (shouldInit) {
        console.log('[Food] Initializing food page');
        renderFood();
    }
}

// Router Event
document.addEventListener('page-loaded', (e) => {
    const page = e.detail.page;
    if (page === '/food' || page === '/food.html' || page.includes('/food')) {
        console.log('[Food] page-loaded event triggered for:', page);
        initFood();
    }
});

// Lang Change Event
window.addEventListener('lang-changed', () => {
    initFood();
});

// Direct Load - Wait for DOM
function tryInitFood() {
    const path = window.location.pathname;
    if (path === '/food' || path === '/food.html') {
        console.log('[Food] Attempting to initialize');
        // Use requestAnimationFrame to ensure DOM is fully rendered
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                initFood();
            });
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tryInitFood);
} else {
    // DOM already loaded, but still use RAF to ensure rendering is complete
    tryInitFood();
}

