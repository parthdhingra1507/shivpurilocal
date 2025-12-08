// Common utilities shared across all pages

// Language Data
const translations = {
    en: {
        tagline: "The City Encyclopedia",
        nav_home: "Home",
        nav_transport: "Transport",
        nav_places: "Places",
        nav_food: "Food",
        hero_home_title: "Explore Shivpuri",
        hero_home_desc: "Your complete guide to the city",
        hero_transport_title: "Local Bus Schedule",
        hero_transport_desc: "Find the best route to your destination in Shivpuri.",
        hero_places_title: "Explore Places",
        hero_places_desc: "Discover the best attractions in Shivpuri.",
        hero_food_title: "Food & Dining",
        hero_food_desc: "Find the best restaurants and cafes in Shivpuri.",
        filter_from: "From City",
        filter_to: "To City",
        filter_time: "Any Time",
        filter_time_0_6: "Early Morning (12 AM - 6 AM)",
        filter_time_6_12: "Morning (6 AM - 12 PM)",
        filter_time_12_18: "Afternoon (12 PM - 6 PM)",
        filter_time_18_24: "Evening (6 PM - 12 AM)",
        reset_btn: "Reset",
        load_more: "Load More Buses",
        emergency_title: "Emergency Numbers",
        share_btn: "Share on WhatsApp",
        via: "via",
        daily: "Daily",
        footer: "© 2025 shivpurilocal.in. All rights reserved.",
        welcome_title: "Welcome to Shivpuri",
        welcome_desc: "Your complete guide to local bus schedules, top places, and best food spots.",
        cat_transport_title: "Bus Schedule",
        cat_transport_desc: "Live timings & Routes",
        cat_places_title: "Places to Visit",
        cat_places_desc: "Tourist spots & Nature",
        cat_food_title: "Food & Dining",
        cat_food_desc: "Best Restaurants & Cafes",
        cat_news_title: "City News",
        cat_news_desc: "Latest Updates & Headlines",
        emergency_police: "Police",
        emergency_ambulance: "Ambulance",
        emergency_fire: "Fire",
        emergency_women: "Women Helpline",
        map_btn: "Map",
        nav_news: "News",
        hero_news_title: "City News",
        hero_news_desc: "Latest headlines from Shivpuri & Madhya Pradesh"
    },
    hi: {
        tagline: "शहर का विश्वकोश",
        nav_home: "होम",
        nav_transport: "परिवहन",
        nav_places: "पर्यटन",
        nav_food: "भोजन",
        hero_home_title: "शिवपुरी एक्सप्लोर करें",
        hero_home_desc: "शहर के लिए आपकी पूरी गाइड",
        hero_transport_title: "स्थानीय बस समय सारिणी",
        hero_transport_desc: "शिवपुरी में अपने गंतव्य के लिए सबसे अच्छा मार्ग खोजें।",
        hero_places_title: "स्थानों का अन्वेषण करें",
        hero_places_desc: "शिवपुरी में सर्वश्रेष्ठ आकर्षणों की खोज करें।",
        hero_food_title: "भोजन और भोजन",
        hero_food_desc: "शिवपुरी में सर्वश्रेष्ठ रेस्तरां और कैफे खोजें।",
        filter_from: "कहाँ से",
        filter_to: "कहाँ तक",
        filter_time: "कोई भी समय",
        filter_time_0_6: "तड़के (12 AM - 6 AM)",
        filter_time_6_12: "सुबह (6 AM - 12 PM)",
        filter_time_12_18: "दोपहर (12 PM - 6 PM)",
        filter_time_18_24: "शाम (6 PM - 12 AM)",
        reset_btn: "रीसेट",
        load_more: "और बसें देखें",
        emergency_title: "आपातकालीन नंबर",
        share_btn: "व्हाट्सएप पर शेयर करें",
        via: "द्वारा",
        daily: "रोजाना",
        footer: "© 2025 shivpurilocal.in. सर्वाधिकार सुरक्षित।",
        welcome_title: "शिवपुरी में आपका स्वागत है",
        welcome_desc: "स्थानीय बस समय सारिणी, शीर्ष स्थानों और सर्वोत्तम भोजन स्थलों के लिए आपकी पूर्ण मार्गदर्शिका।",
        cat_transport_title: "बस समय सारिणी",
        cat_transport_desc: "लाइव समय और मार्ग",
        cat_places_title: "घूमने की जगहें",
        cat_places_desc: "पर्यटन स्थल और प्रकृति",
        cat_food_title: "भोजन और भोजन",
        cat_food_desc: "सर्वश्रेष्ठ रेस्तरां और कैफे",
        cat_news_title: "शहर समाचार",
        cat_news_desc: "ताज़ा अपडेट और हेडलाइंस",
        emergency_police: "पुलिस",
        emergency_ambulance: "एम्बुलेंस",
        emergency_fire: "अग्निशमन",
        emergency_women: "महिला हेल्पलाइन",
        map_btn: "मानचित्र",
        nav_news: "समाचार",
        hero_news_title: "शहर समाचार",
        hero_news_desc: "शिवपुरी और मध्य प्रदेश की ताज़ा खबरें"
    }
};

let currentLang = localStorage.getItem('lang') || 'en';
const langToggle = document.getElementById('lang-toggle');

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    if (langToggle) {
        langToggle.textContent = lang === 'en' ? 'हिंदी' : 'English';
    }

    // Update static text
    const tagline = document.querySelector('.tagline');
    if (tagline) tagline.textContent = translations[lang].tagline;

    const heroTitle = document.getElementById('hero-title');
    const heroDesc = document.getElementById('hero-desc');

    // Update based on page
    const path = window.location.pathname;
    if (path.includes('transport')) {
        if (heroTitle) heroTitle.textContent = translations[lang].hero_transport_title;
        if (heroDesc) heroDesc.textContent = translations[lang].hero_transport_desc;
    } else if (path.includes('places')) {
        if (heroTitle) heroTitle.textContent = translations[lang].hero_places_title;
        if (heroDesc) heroDesc.textContent = translations[lang].hero_places_desc;
    } else if (path.includes('food')) {
        if (heroTitle) heroTitle.textContent = translations[lang].hero_food_title;
        if (heroDesc) heroDesc.textContent = translations[lang].hero_food_desc;
    } else if (path.includes('news')) {
        if (heroTitle) heroTitle.textContent = translations[lang].hero_news_title;
        if (heroDesc) heroDesc.textContent = translations[lang].hero_news_desc;
    } else {
        if (heroTitle) heroTitle.textContent = translations[lang].hero_home_title;
        if (heroDesc) heroDesc.textContent = translations[lang].hero_home_desc;
    }

    // Update Nav
    const navLinks = document.querySelectorAll('.main-nav a');
    if (navLinks.length >= 5) {
        navLinks[0].textContent = translations[lang].nav_home;
        navLinks[1].textContent = translations[lang].nav_transport;
        navLinks[2].textContent = translations[lang].nav_places;
        navLinks[3].textContent = translations[lang].nav_food;
        navLinks[4].textContent = translations[lang].nav_news;
    } else if (navLinks.length >= 4) {
        navLinks[0].textContent = translations[lang].nav_home;
        navLinks[1].textContent = translations[lang].nav_transport;
        navLinks[2].textContent = translations[lang].nav_places;
        navLinks[3].textContent = translations[lang].nav_food;
    }

    // Update emergency section
    const emergencyTitle = document.querySelector('.emergency-section h2');
    if (emergencyTitle) emergencyTitle.textContent = translations[lang].emergency_title;

    // Update footer
    const footer = document.querySelector('.main-footer p');
    if (footer) footer.textContent = translations[lang].footer;

    // Update Landing Page (Home) Elements
    if (path === '/' || path === '/index.html' || !path.includes('/')) {
        // Update hero section on home page
        const heroH2 = document.querySelector('.hero h2');
        const heroP = document.querySelector('.hero p');
        if (heroH2) heroH2.textContent = translations[lang].welcome_title;
        if (heroP) heroP.textContent = translations[lang].welcome_desc;

        // Update category cards
        const catTransport = document.getElementById('cat-transport');
        if (catTransport) {
            const h3 = catTransport.querySelector('h3');
            const p = catTransport.querySelector('p');
            if (h3) h3.textContent = translations[lang].cat_transport_title;
            if (p) p.textContent = translations[lang].cat_transport_desc;
        }

        const catPlaces = document.getElementById('cat-places');
        if (catPlaces) {
            const h3 = catPlaces.querySelector('h3');
            const p = catPlaces.querySelector('p');
            if (h3) h3.textContent = translations[lang].cat_places_title;
            if (p) p.textContent = translations[lang].cat_places_desc;
        }

        const catFood = document.getElementById('cat-food');
        if (catFood) {
            const h3 = catFood.querySelector('h3');
            const p = catFood.querySelector('p');
            if (h3) h3.textContent = translations[lang].cat_food_title;
            if (p) p.textContent = translations[lang].cat_food_desc;
        }

        const catNews = document.getElementById('cat-news');
        if (catNews) {
            const h3 = catNews.querySelector('h3');
            const p = catNews.querySelector('p');
            if (h3) h3.textContent = translations[lang].cat_news_title;
            if (p) p.textContent = translations[lang].cat_news_desc;
        }

        // Update emergency cards
        const emergencyCards = document.querySelectorAll('.emergency-card h3');
        if (emergencyCards.length >= 4) {
            emergencyCards[0].textContent = translations[lang].emergency_police;
            emergencyCards[1].textContent = translations[lang].emergency_ambulance;
            emergencyCards[2].textContent = translations[lang].emergency_fire;
            emergencyCards[3].textContent = translations[lang].emergency_women;
        }
    }

    // Trigger page-specific updates if available
    if (typeof updatePageLanguage === 'function') {
        updatePageLanguage(lang);
    }
}

// Initialize language on page load
if (langToggle) {
    langToggle.addEventListener('click', () => {
        updateLanguage(currentLang === 'en' ? 'hi' : 'en');
    });
}

// Set initial language
// Set initial language
updateLanguage(currentLang);

// PWA Install Logic
let deferredPrompt;
const installBtn = document.getElementById('install-btn');

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    if (installBtn) {
        installBtn.style.display = 'block';
        installBtn.addEventListener('click', () => {
            // Show the prompt
            deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                } else {
                    console.log('User dismissed the A2HS prompt');
                }
                deferredPrompt = null;
                // Optionally hide the button after install
                installBtn.style.display = 'none';
            });
        });
    }
});

// Optionally hide button if app is installed
window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
    if (installBtn) installBtn.style.display = 'none';
});
