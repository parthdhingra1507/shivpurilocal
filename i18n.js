const translations = {
    en: {
        tagline: "The City Encyclopedia",
        nav_home: "Home",
        nav_transport: "Transport",
        nav_places: "Places",
        nav_food: "Food",
        nav_news: "News",
        nav_forum: "Forum",
        hero_title: "Welcome to Shivpuri",
        hero_desc: "Your complete guide to local bus schedules, top places, and best food spots.",
        cat_transport_title: "Bus Schedule",
        cat_transport_desc: "Live timings & Routes",
        cat_places_title: "Places to Visit",
        cat_places_desc: "Tourist spots & Nature",
        cat_food_title: "Food & Dining",
        cat_food_desc: "Best Restaurants & Cafes",
        cat_news_title: "City News",
        cat_news_desc: "Latest Updates & Headlines",
        emerg_title: "Emergency Numbers",
        emerg_police: "Police",
        emerg_ambulance: "Ambulance",
        emerg_fire: "Fire",
        emerg_women: "Women Helpline",
        footer_rights: "© 2025 shivpurilocal.in. All rights reserved.",
        footer_add_biz: "Add Your Business",
        footer_feedback: "Feedback",
        // Transport Page
        filter_from: "From City",
        filter_to: "To City",
        filter_time: "Time",
        filter_time_0_6: "Morning (00:00 - 06:00)",
        filter_time_6_12: "Day (06:00 - 12:00)",
        filter_time_12_18: "Afternoon (12:00 - 18:00)",
        filter_time_18_24: "Evening (18:00 - 24:00)",
        reset_btn: "Search Buses",
        reset_btn_reset: "Reset Filters",
        load_more: "Load More",
        no_buses: "No buses found matching your search.",
        // Places & Food
        no_places: "No places found.",
        no_food: "No food spots found.",
        share: "Share",
        map: "Map",
        read: "Read",
        // Forum Page
        hero_forum_title: "Community Forum",
        hero_forum_desc: "Connect with Shivpuri locals. Discuss, help, and share.",
        start_discussion: "Start a Discussion",
        post: "Post"
    },
    hi: {
        tagline: "शहर का विश्वकोश",
        nav_home: "होम",
        nav_transport: "परिवहन",
        nav_places: "स्थान",
        nav_food: "भोजन",
        nav_news: "समाचार",
        nav_forum: "फोरम",
        hero_title: "शिवपुरी में आपका स्वागत है",
        hero_desc: "स्थानीय बस समय सारिणी, प्रमुख स्थानों और बेहतरीन भोजन स्थलों के लिए आपका पूरा गाइड।",
        cat_transport_title: "बस समय सारिणी",
        cat_transport_desc: "लाइव समय और मार्ग",
        cat_places_title: "घूमने की जगहें",
        cat_places_desc: "पर्यटक स्थल और प्रकृति",
        cat_food_title: "भोजन और डाइनिंग",
        cat_food_desc: "बेहतरीन रेस्तरां और कैफे",
        cat_news_title: "शहर की खबरें",
        cat_news_desc: "नवीनतम अपडेट और सुर्खियां",
        emerg_title: "आपातकालीन नंबर",
        emerg_police: "पुलिस",
        emerg_ambulance: "एम्बुलेंस",
        emerg_fire: "फायर ब्रिगेड",
        emerg_women: "महिला हेल्पलाइन",
        footer_rights: "© 2025 shivpurilocal.in. सर्वाधिकार सुरक्षित।",
        footer_add_biz: "अपना व्यवसाय जोड़ें",
        footer_feedback: "प्रतिक्रिया",
        // Transport Page
        filter_from: "कहाँ से",
        filter_to: "कहाँ तक",
        filter_time: "समय",
        filter_time_0_6: "सुबह (00:00 - 06:00)",
        filter_time_6_12: "दिन (06:00 - 12:00)",
        filter_time_12_18: "दोपहर (12:00 - 18:00)",
        filter_time_18_24: "शाम (18:00 - 24:00)",
        reset_btn: "बस खोजें",
        reset_btn_reset: "रीसेट",
        load_more: "और लोड करें",
        no_buses: "आपकी खोज से कोई बस नहीं मिली।",
        // Places & Food
        no_places: "कोई जगह नहीं मिली।",
        no_food: "कोई खाने की जगह नहीं मिली।",
        share: "साझा करें",
        map: "मानचित्र",
        read: "पढ़ें",
        // Forum Page
        hero_forum_title: "समुदाय फोरम",
        hero_forum_desc: "शिवपुरी के लोगों से जुड़ें। चर्चा करें, मदद करें, साझा करें।",
        start_discussion: "चर्चा शुरू करें",
        post: "पोस्ट करें"
    }
};

window.i18n = {
    lang: localStorage.getItem('lang') || 'en',

    toggle() {
        this.lang = this.lang === 'en' ? 'hi' : 'en';
        localStorage.setItem('lang', this.lang);
        this.updateDOM();
        window.dispatchEvent(new CustomEvent('lang-changed', { detail: { lang: this.lang } }));
    },

    updateDOM() {
        // Update html lang attribute
        document.documentElement.lang = this.lang;

        // Update Toggle Button Text
        const toggleBtn = document.getElementById('lang-toggle');
        if (toggleBtn) {
            toggleBtn.textContent = this.lang === 'en' ? 'हिंदी' : 'English';
        }

        // Update all data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[this.lang][key]) {
                if (el.tagName === 'INPUT' && el.type === 'placeholder') {
                    el.placeholder = translations[this.lang][key];
                } else {
                    el.textContent = translations[this.lang][key];
                }
            }
        });
    },

    t(key) {
        return translations[this.lang][key] || key;
    },

    init() {
        this.updateDOM();
    }
};

// Initialize immediately so other scripts can see it
window.i18n.init();
