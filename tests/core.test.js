// Core Logic Tests

// Wait for scripts to load
setTimeout(() => {

    // --- 1. i18n Tests ---
    describe('i18n Module', () => {
        it('should exist globally', () => {
            expect(window.i18n).toBeTruthy();
        });

        it('should have translations for English', () => {
            expect(window.i18n.translations['en']).toBeTruthy();
        });

        it('should translate a known key correctly', () => {
            // Setup
            window.i18n.currentLang = 'en';
            // "hero.title": "Your Shivpuri, Your Guide"
            const result = window.i18n.t('hero.title');
            expect(result).toBe('Your Shivpuri, Your Guide');
        });

        it('should switch language', () => {
            window.i18n.setLanguage('hi');
            expect(window.i18n.currentLang).toBe('hi');
            expect(document.documentElement.lang).toBe('hi');

            // Clean up
            window.i18n.setLanguage('en');
        });
    });

    // --- 2. Common Utils Tests ---
    describe('Common Utils', () => {
        it('should toggle theme correctly', () => {
            // Reset to light
            document.documentElement.classList.remove('dark-mode');

            // Toggle
            window.toggleTheme();
            expect(document.documentElement.classList.contains('dark-mode')).toBeTruthy();

            // Toggle back
            window.toggleTheme();
            expect(document.documentElement.classList.contains('dark-mode')).toBeFalsy();
        });
    });

    // --- 3. Router Tests ---
    describe('Router', () => {
        it('should exist globally', () => {
            expect(window.router).toBeTruthy();
        });

        it('should have a cache', () => {
            expect(window.router.cache).toBeTruthy();
        });

        it('should update active nav link', () => {
            // Create dummy nav in tests.html (or execute against existing if loaded)
            // Ideally we mock the DOM, but here we can just test the logic if we inject elements
            const nav = document.createElement('nav');
            nav.className = 'main-nav';
            nav.innerHTML = '<a href="/" id="home-link">Home</a><a href="/places" id="places-link">Places</a>';
            document.body.appendChild(nav);

            window.router.updateNav('/places');

            const placesLink = document.getElementById('places-link');
            expect(placesLink.classList.contains('active')).toBeTruthy();

            const homeLink = document.getElementById('home-link');
            expect(homeLink.classList.contains('active')).toBeFalsy();

            // Cleanup
            document.body.removeChild(nav);
        });
    });

}, 500); // Small delay to ensure scripts parsed
