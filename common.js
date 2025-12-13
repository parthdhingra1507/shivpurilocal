// Theme Toggle Logic
const darkToggle = document.getElementById('dark-toggle');
const html = document.documentElement;

// Initialize Theme
if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark-mode');
    if (darkToggle) darkToggle.textContent = '☀️';
}

if (darkToggle) {
    darkToggle.addEventListener('click', () => {
        html.classList.toggle('dark-mode');
        const isDark = html.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        darkToggle.textContent = isDark ? '☀️' : '🌙';
    });
}

// Language Toggle Connector (Connects UI button to i18n system)
const langToggle = document.getElementById('lang-toggle');
if (langToggle && window.i18n) {
    langToggle.addEventListener('click', () => {
        window.i18n.toggle();
    });
}

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
