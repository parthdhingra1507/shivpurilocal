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
        footer: "© 2025 shivpurilocal.in. All rights reserved."
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
        footer: "© 2025 shivpurilocal.in. सर्वाधिकार सुरक्षित।"
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
    } else {
        if (heroTitle) heroTitle.textContent = translations[lang].hero_home_title;
        if (heroDesc) heroDesc.textContent = translations[lang].hero_home_desc;
    }

    // Update Nav
    const navLinks = document.querySelectorAll('.main-nav a');
    if (navLinks.length >= 4) {
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
updateLanguage(currentLang);
