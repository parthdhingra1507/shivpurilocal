const placesData = [
    { name: "Madhav National Park", name_hi: "माधव राष्ट्रीय उद्यान", category: "Nature & Wildlife", category_hi: "प्रकृति और वन्यजीव", area: "Near Shivpuri", area_hi: "शिवपुरी के पास", shortDescription: "National park / tiger reserve with lakes, deer, leopards and rich birdlife.", shortDescription_hi: "नील गाय, तेंदुए और पक्षियों से समृद्ध राष्ट्रीय उद्यान।", tags: ["wildlife", "tiger-reserve", "safari", "birding", "family-outing"] },
    { name: "Sakhya Sagar Lake", name_hi: "साख्य सागर झील", category: "Lake", category_hi: "झील", area: "Edge of Madhav National Park", area_hi: "माधव नेशनल पार्क के पास", shortDescription: "Scenic lake and Ramsar site, known for crocodiles, birds and sunset views.", shortDescription_hi: "मगरमच्छ और पक्षियों के लिए प्रसिद्ध सुंदर झील।", tags: ["lake", "sunset", "boating", "bird-watching"] },
    { name: "Bhadaiya Kund", name_hi: "भदैया कुंड", category: "Waterfall / Spring", category_hi: "झरना / कुंड", area: "Outskirts of Shivpuri", area_hi: "शिवपुरी बाहरी क्षेत्र", shortDescription: "Natural spring and small waterfall, popular local picnic spot.", shortDescription_hi: "प्राकृतिक झरना, लोकप्रिय पिकनिक स्थल।", tags: ["waterfall", "picnic", "monsoon-spot", "nature"] },
    { name: "Bhoora Khon Waterfall", name_hi: "भूरा खो झरना", category: "Waterfall", category_hi: "झरना", area: "Near Shivpuri (forest side)", area_hi: "शिवपुरी के पास (जंगल)", shortDescription: "Tall seasonal waterfall with greenery and a small Shiva temple nearby.", shortDescription_hi: "हरियाली और शिव मंदिर के पास मौसमी झरना।", tags: ["waterfall", "photography", "picnic", "offbeat"] },
    { name: "Motisagar Talab Viewpoint", name_hi: "मोतीसागर तालाब व्यूपॉइंट", category: "Lake / Viewpoint", category_hi: "झील / नज़ारा", area: "Shivpuri town", area_hi: "शिवपुरी शहर", shortDescription: "Quiet lake with viewpoint, good for evening walk and sunset.", shortDescription_hi: "शाम की सैर और सूर्यास्त के लिए शांत झील।", tags: ["lake", "sunset", "evening-walk", "relax"] },
    { name: "Royal Scindia Chhatris", name_hi: "सिंधिया छत्री", category: "Heritage Monument", category_hi: "स्मारक", area: "Shivpuri town", area_hi: "शिवपुरी शहर", shortDescription: "White marble royal cenotaphs with intricate carving and gardens.", shortDescription_hi: "सफेद संगमरमर की शाही छतरियां और उद्यान।", tags: ["heritage", "architecture", "photography", "evening-visit"] },
    { name: "Madhav Vilas Palace", name_hi: "माधव विलास पैलेस", category: "Palace / Heritage", category_hi: "महल / विरासत", area: "Near Madhav National Park", area_hi: "माधव नेशनल पार्क के पास", shortDescription: "Former Scindia summer palace with pink European-style architecture.", shortDescription_hi: "गुलाबी यूरोपीय वास्तुकला वाला सिंधिया ग्रीष्मकालीन महल।", tags: ["palace", "royal", "architecture", "history"] },
    { name: "George Castle", name_hi: "जॉर्ज कैसल", category: "Viewpoint / Heritage", category_hi: "नज़ारा / विरासत", area: "Inside Madhav National Park", area_hi: "माधव नेशनल पार्क के अंदर", shortDescription: "Hilltop hunting lodge with panoramic view of lakes and forest.", shortDescription_hi: "पहाड़ी की चोटी पर स्थित शिकारगाह (लॉज)।", tags: ["viewpoint", "sunset", "heritage", "inside-park"] },
    { name: "Tatya Tope Memorial Park", name_hi: "तात्या टोपे स्मारक पार्क", category: "Memorial / Park", category_hi: "स्मारक / पार्क", area: "Shivpuri", area_hi: "शिवपुरी", shortDescription: "Park and statue dedicated to freedom fighter Tatya Tope.", shortDescription_hi: "स्वतंत्रता सेनानी तात्या टोपे को समर्पित पार्क।", tags: ["freedom-struggle", "park", "history"] },
    { name: "Survaya ki Garhi", name_hi: "सुरवाया की गढ़ी", category: "Fort & Temple Complex", category_hi: "किला और मंदिर परिसर", area: "Near Narwar (~20 km from Shivpuri)", area_hi: "नरवर के पास", shortDescription: "Ruined fort with carved temples, monastery and stepwell.", shortDescription_hi: "नक्काशीदार मंदिरों और बावड़ी वाला पुराना किला।", tags: ["heritage", "temples", "architecture", "day-trip"] },
    { name: "Narwar Fort", name_hi: "नरवर किला", category: "Hill Fort", category_hi: "पहाड़ी किला", area: "Narwar (~40 km from Shivpuri)", area_hi: "नरवर", shortDescription: "Large historic hilltop fort with expansive views.", shortDescription_hi: "विशाल ऐतिहासिक पहाड़ी किला।", tags: ["fort", "history", "viewpoint", "day-trip"] },
    { name: "Siddheshwar Temple", name_hi: "सिद्धेश्वर मंदिर", category: "Temple", category_hi: "मंदिर", area: "Chhatri Road, Shivpuri", area_hi: "छत्री रोड, शिवपुरी", shortDescription: "Important Shiva temple, crowded during Mahashivratri fair.", shortDescription_hi: "महत्वपूर्ण शिव मंदिर।", tags: ["shiv-temple", "mahashivratri", "pilgrimage"] },
    { name: "Banganga", name_hi: "बाणगंगा", category: "Holy Kund", category_hi: "पवित्र कुंड", area: "Near Shivpuri", area_hi: "शिवपुरी के पास", shortDescription: "Sacred water body associated with Siddheshwar and rituals.", shortDescription_hi: "सिद्धेश्वर और अनुष्ठानों से जुड़ा पवित्र जल निकाय।", tags: ["holy-water", "pilgrimage"] },
    { name: "Panihar", name_hi: "पनिहार", category: "Spring / Pilgrimage", category_hi: "झरना / तीर्थ", area: "On road between Gwalior and Shivpuri", area_hi: "ग्वालियर और शिवपुरी के बीच", shortDescription: "Holy springs and ghats used for ritual bathing.", shortDescription_hi: "स्नान के लिए पवित्र झरने और घाट।", tags: ["spring", "bathing-ghat", "religious"] },
    { name: "Madhav Sagar Lake", name_hi: "माधव सागर झील", category: "Lake", category_hi: "झील", area: "Madhav landscape, near Shivpuri", area_hi: "शिवपुरी", shortDescription: "Lake forming part of the park's scenic and wildlife habitat.", shortDescription_hi: "पार्क का सुंदर झील और वन्यजीव आवास।", tags: ["lake", "scenic", "wildlife-habitat"] },
    { name: "Chhatri Road Market", name_hi: "छत्री रोड बाजार", category: "Market / Street", category_hi: "बाजार", area: "Shivpuri town", area_hi: "शिवपुरी शहर", shortDescription: "Busy street with shops, temples and local food stalls.", shortDescription_hi: "दुकानों और स्थानीय भोजन स्टालों वाला व्यस्त बाजार।", tags: ["market", "street-food", "shopping", "evening-walk"] },
    { name: "Jhansi Road Food Belt", name_hi: "झांसी रोड फूड बेल्ट", category: "Market / Food Street", category_hi: "फूड स्ट्रीट", area: "Jhansi Road, Shivpuri", area_hi: "झांसी रोड, शिवपुरी", shortDescription: "Stretch known for Chinese-style street food and small shops.", shortDescription_hi: "चाइनीज स्ट्रीट फूड और छोटी दुकानों के लिए जाना जाता है।", tags: ["street-food", "chinese", "shopping", "local-vibe"] },
    { name: "Circular Road Food Belt", name_hi: "सर्कुलर रोड फूड बेल्ट", category: "Food Street", category_hi: "फूड स्ट्रीट", area: "Circular Road, Shivpuri", area_hi: "सर्कुलर रोड, शिवपुरी", shortDescription: "Cluster of veg and non-veg restaurants and kebab joints.", shortDescription_hi: "शाकाहारी और मांसाहारी रेस्तरां का समूह।", tags: ["restaurants", "street-food", "evening", "local-favourite"] },
    { name: "Kuno National Park", name_hi: "कूनो राष्ट्रीय उद्यान", category: "Nature & Wildlife (Nearby)", category_hi: "वन्यजीव (पास में)", area: "Approx 60–80 km from Shivpuri", area_hi: "शिवपुरी से 60-80 किमी", shortDescription: "Cheetah reintroduction site and wildlife reserve near Shivpuri.", shortDescription_hi: "चीता पुनर्वास स्थल और वन्यजीव अभ्यारण्य।", tags: ["wildlife", "cheetah", "day-trip"] },
    { name: "Datia Palace", name_hi: "दतिया महल", category: "Heritage (Nearby)", category_hi: "विरासत (पास में)", area: "Datia (~100 km from Shivpuri)", area_hi: "दतिया", shortDescription: "Seven-storey palace with Rajput–Mughal architecture.", shortDescription_hi: "राजपूत-मुगल वास्तुकला वाला सात मंजिला महल।", tags: ["heritage", "palace", "day-trip"] }
];

function renderPlaces() {
    const grid = document.getElementById('places-grid') || document.getElementById('schedule-grid');
    // fallback for now if IDs are mixed up, but 'places' page uses 'schedule-grid' in original HTML?
    // Let's check original logic: const grid = document.getElementById('schedule-grid'); was global.
    // In places.html (which I haven't seen but inferred), it likely uses the same grid ID or I should update it.
    // Actually, looking at index.html, there is no grid. Logic was in script.js which targeted 'schedule-grid'.
    // I should ensure the HTML for places has 'schedule-grid' OR 'places-grid'. 
    // Best to stick to 'schedule-grid' to match existing HTML unless I change it.

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

        card.innerHTML = `
            <div class="place-content">
                <span class="place-cat">${category}</span>
                <h3 class="place-name">${name}</h3>
                <p class="place-area">📍 ${area}</p>
                <p class="place-desc">${desc}</p>
                
                <div class="place-tags">
                    ${place.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>

                <div class="card-actions">
                    <a href="${whatsappUrl}" target="_blank" class="share-btn">${window.i18n.t('share') || 'Share'}</a>
                    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ' Shivpuri')}" target="_blank" class="map-btn">${window.i18n.t('map') || 'Map'}</a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function initPlaces() {
    const path = window.location.pathname;
    const shouldInit = document.querySelector('.page-places') || path === '/places' || path === '/places.html';

    if (shouldInit) {
        console.log('[Places] Initializing places page');
        renderPlaces();
    }
}

// Router Event
document.addEventListener('page-loaded', (e) => {
    if (e.detail.page === '/places') {
        initPlaces();
    }
});

// Lang Change Event
window.addEventListener('lang-changed', () => {
    initPlaces();
});

// Direct Load - Wait for DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const path = window.location.pathname;
        if (path === '/places' || path === '/places.html') {
            console.log('[Places] DOM loaded, initializing');
            initPlaces();
        }
    });
} else {
    // DOM already loaded
    const path = window.location.pathname;
    if (path === '/places' || path === '/places.html') {
        console.log('[Places] DOM already ready, initializing');
        initPlaces();
    }
}
