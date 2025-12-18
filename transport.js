
let busData = [];

async function fetchTransportData() {
    try {
        const response = await fetch('/api/transport');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching transport data:', error);
        return [];
    }
}


const cityTranslations = {
    "Bhopal": "भोपाल", "Shivpuri": "शिवपुरी", "Guna": "गुना", "Datia": "दतिया",
    "Gwalior": "ग्वालियर", "Indore": "इंदौर", "Jaipur": "जयपुर", "Jhansi": "झांसी",
    "Kota": "कोटा", "Sheopur": "श्योपुर", "Biaora": "ब्यावरा", "Dewas": "देवास",
    "Raghogarh": "राघोगढ़", "Badarwas": "बदरवास", "Dabra": "डबरा", "Mohna": "मोहना",
    "Kolaras": "कोलारस", "Dausa": "दौसा", "Lalsot": "लालसोट", "Pohri": "पोहरी",
    "Karahal": "कराहल", "Baran": "बारां"
};

const busTypeTranslations = {
    "AC Sleeper 2+1": "एसी स्लीपर 2+1",
    "AC Seater 2+2": "एसी सीटर 2+2",
    "Non-AC Sleeper 2+1": "नॉन-एसी स्लीपर 2+1",
    "Express Seater 3+2": "एक्सप्रेस सीटर 3+2",
    "Volvo B11R Sleeper 2+1": "वोल्वो B11R स्लीपर 2+1"
};

// DOM elements will be queried inside initTransport() when DOM is ready


function formatTime(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'UTC'
    });
}

function formatTimeString(timeStr) {
    if (!timeStr) return '';
    const [time, modifier] = timeStr.split(' ');
    let [hours, minutes] = time.split(':');
    hours = parseInt(hours);

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    let formatted = `${hours}:${minutes} ${ampm}`;
    if (modifier) {
        formatted += ` ${modifier}`;
    }
    return formatted;
}

function populateDropdowns() {
    const filterFrom = document.getElementById('filter-from');
    const filterTo = document.getElementById('filter-to');

    if (!filterFrom || !filterTo) return;

    const allFromCities = [...new Set(busData.map(bus => bus.route_from))];
    const allToCities = [...new Set(busData.map(bus => bus.route_to))];

    // Initial population
    updateFromDropdown(allFromCities, '');
    updateToDropdown(allToCities, '');

    // Add change event listeners for smart filtering
    filterFrom.addEventListener('change', () => {
        const selectedFrom = filterFrom.value;

        if (selectedFrom && selectedFrom !== 'Shivpuri') {
            // If non-Shivpuri city selected in From, To can only be Shivpuri
            updateToDropdown(['Shivpuri'], 'Shivpuri');
        } else {
            // Reset To dropdown to all cities
            updateToDropdown(allToCities, filterTo.value);
        }
        applyFilters();
    });

    filterTo.addEventListener('change', () => {
        const selectedTo = filterTo.value;

        if (selectedTo && selectedTo !== 'Shivpuri') {
            // If non-Shivpuri city selected in To, From can only be Shivpuri
            updateFromDropdown(['Shivpuri'], 'Shivpuri');
        } else {
            // Reset From dropdown to all cities
            updateFromDropdown(allFromCities, filterFrom.value);
        }
        applyFilters();
    });
}

function updateFromDropdown(cities, selectedValue) {
    const filterFrom = document.getElementById('filter-from');
    if (!filterFrom) return;

    const currentValue = selectedValue || filterFrom.value;
    filterFrom.innerHTML = '<option value="">From City</option>';

    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        if (city === currentValue) option.selected = true;
        filterFrom.appendChild(option);
    });

    // If current value is not in new options, auto-select if only one option
    if (cities.length === 1) {
        filterFrom.value = cities[0];
    }
}

function updateToDropdown(cities, selectedValue) {
    const filterTo = document.getElementById('filter-to');
    if (!filterTo) return;

    const currentValue = selectedValue || filterTo.value;
    filterTo.innerHTML = '<option value="">To City</option>';

    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        if (city === currentValue) option.selected = true;
        filterTo.appendChild(option);
    });

    // If current value is not in new options, auto-select if only one option
    if (cities.length === 1) {
        filterTo.value = cities[0];
    }
}

function getHourFromTimestamp(timestamp) {
    const date = new Date(timestamp);
    // Get UTC hour because our timestamps are UTC-based for this app logic
    return date.getUTCHours();
}

let currentBuses = [];
let visibleCount = 6;
const ITEMS_PER_PAGE = 6;
const loadMoreContainer = document.getElementById('load-more-container');
const loadMoreBtn = document.getElementById('load-more-btn');

// --- PAGE UPDATES FOR LANGUAGE ---
// --- PAGE UPDATES FOR LANGUAGE ---
// --- PAGE UPDATES FOR LANGUAGE ---
function updateTransportLanguage(lang) {
    const filterFrom = document.getElementById('filter-from');
    const filterTo = document.getElementById('filter-to');
    const filterTime = document.getElementById('filter-time');
    const resetBtn = document.getElementById('reset-btn');
    const loadMoreBtn = document.getElementById('load-more-btn');

    const isHi = lang === 'hi';
    const t = window.i18n.translations ? window.i18n.translations[lang] : {};

    // Update Filters
    if (filterFrom && filterFrom.options.length > 0) filterFrom.options[0].text = window.i18n.t('filter_from');
    if (filterTo && filterTo.options.length > 0) filterTo.options[0].text = window.i18n.t('filter_to');

    if (filterTime && filterTime.options.length > 0) {
        filterTime.options[0].text = window.i18n.t('filter_time');
        filterTime.options[1].text = window.i18n.t('filter_time_0_6');
        filterTime.options[2].text = window.i18n.t('filter_time_6_12');
        filterTime.options[3].text = window.i18n.t('filter_time_12_18');
        filterTime.options[4].text = window.i18n.t('filter_time_18_24');
    }

    // Update static buttons
    if (resetBtn) resetBtn.textContent = window.i18n.t('reset_btn');
    if (loadMoreBtn) loadMoreBtn.textContent = window.i18n.t('load_more');

    // Re-render buses
    renderBuses(currentBuses.length > 0 ? currentBuses : busData);
}

function renderBuses(buses, append = false) {
    const grid = document.getElementById('schedule-grid');
    const loadMoreContainer = document.getElementById('load-more-container');
    if (!grid) return;

    if (!append) {
        grid.innerHTML = '';
        visibleCount = ITEMS_PER_PAGE;
        currentBuses = buses;
    }

    if (buses.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No buses found matching your search.</p>';
        if (loadMoreContainer) loadMoreContainer.style.display = 'none';
        return;
    }

    // Sort: Departure Time Ascending
    // Note: If appending, we assume 'buses' is already sorted or we are rendering a slice
    // Ideally, we sort the main array once and then slice it.
    // For simplicity in this structure: 'currentBuses' holds the full sorted list.

    if (!append) {
        currentBuses.sort((a, b) => a.departure_time - b.departure_time);
    }

    const busesToShow = currentBuses.slice(0, visibleCount);

    // Clear grid if not appending (already done above, but safe to ensure logic)
    if (!append) grid.innerHTML = '';

    // If appending, we only want to render the NEW items, but simplistic approach is re-render or render slice.
    // Better approach: Render only the slice range.

    const start = append ? visibleCount - ITEMS_PER_PAGE : 0;
    const end = visibleCount;
    const sliceToRender = currentBuses.slice(start, end);



    sliceToRender.forEach(bus => {
        const isHi = window.i18n.lang === 'hi';

        // Translate Fields
        let from = bus.route_from;
        let to = bus.route_to;
        let via = bus.via;
        let type = bus.bus_type;
        let days = bus.days_of_operation;

        if (isHi) {
            from = cityTranslations[from] || from;
            to = cityTranslations[to] || to;
            type = busTypeTranslations[type] || type;
            days = days === "Daily" ? "रोजाना" : days;

            // Translate Via (Simple split/join)
            via = via.split(' • ').map(v => cityTranslations[v] || v).join(' • ');
        }

        const card = document.createElement('div');
        card.className = 'bus-card';

        const departure = formatTime(bus.departure_time);
        const arrival = formatTimeString(bus.arrival_time);

        // Update dynamic text in card
        // WhatsApp Message
        const shareText = `🚌 *Bus Schedule Alert*\n\n*${bus.operator_name}*\nFrom: ${from}\nTo: ${to}\nTime: ${departure}\n${isHi ? "द्वारा" : "Via"}: ${via}\n\nCheck full schedule on: https://shivpurilocal.in/transport`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

        card.innerHTML = `
            <div class="card-header">
                <h3 class="operator-name">${bus.operator_name}</h3>
                <span class="bus-type">${type}</span>
            </div>
            
            <div class="route-info">
                <div class="time-loc">
                    <span class="time">${departure}</span>
                    <span class="location">${from}</span>
                </div>
                <div class="duration-bar">
                    <span class="duration-text">${Math.floor(bus.distance_km / 50)}h 30m</span>
                    <div class="line">
                        <div class="dot start"></div>
                        <div class="dot end"></div>
                    </div>
                </div>
                <div class="time-loc" style="text-align: right;">
                    <span class="time">${arrival}</span>
                    <span class="location">${to}</span>
                </div>
            </div>

            <div class="meta-row">
                <div class="meta-item">
                    <span class="label">${isHi ? "द्वारा" : "Via"}</span>
                    <span class="value">${via}</span>
                </div>
                 <div class="meta-item">
                    <span class="label">${isHi ? "दिन" : "Days"}</span>
                    <span class="value">${days}</span>
                </div>
            </div>
            <a href="${whatsappUrl}" target="_blank" class="share-btn">${isHi ? "साझा करें" : "Share"}</a>
        `;
        grid.appendChild(card);
    });
}

function applyFilters() {
    const filterFrom = document.getElementById('filter-from');
    const filterTo = document.getElementById('filter-to');
    const filterTime = document.getElementById('filter-time');
    const resetBtn = document.getElementById('reset-btn');

    if (!filterFrom || !filterTo || !filterTime) return;

    const fromVal = filterFrom.value;
    const toVal = filterTo.value;
    const timeVal = filterTime.value;

    // Toggle Reset Button State
    if (resetBtn) {
        const hasFilters = fromVal !== "" || toVal !== "" || timeVal !== "";
        if (hasFilters) {
            resetBtn.textContent = window.i18n.t('reset_btn_reset');

            resetBtn.classList.add("reset-mode");
        } else {
            resetBtn.textContent = window.i18n.t('reset_btn');

            resetBtn.classList.remove("reset-mode");
        }
    }

    const filtered = busData.filter(bus => {
        // Dropdown Filters
        const matchesFrom = fromVal === "" || bus.route_from === fromVal;
        const matchesTo = toVal === "" || bus.route_to === toVal;

        // Time Filter
        let matchesTime = true;
        if (timeVal !== "") {
            const hour = getHourFromTimestamp(bus.departure_time);
            const [start, end] = timeVal.split('-').map(Number);
            matchesTime = hour >= start && hour < end;
        }

        return matchesFrom && matchesTo && matchesTime;
    });

    renderBuses(filtered);
}

// Toast Notification Logic
function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);
    toast.offsetHeight; // Trigger reflow
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            container.removeChild(toast);
        }, 300);
    }, 3000);
}

// --- PAGE INITIALIZATION LOGIC ---

async function initTransport() {
    // Re-grab DOM elements as they are new after swap
    const filterFrom = document.getElementById('filter-from');
    const filterTo = document.getElementById('filter-to');
    const filterTime = document.getElementById('filter-time');
    const resetBtn = document.getElementById('reset-btn');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const grid = document.getElementById('schedule-grid'); // Update global if needed, but better to use local or re-query

    if (filterFrom) {
        // Fetch dynamic data
        busData = await fetchTransportData();

        populateDropdowns();
        renderBuses(busData);

        filterFrom.addEventListener('change', applyFilters);
        filterTo.addEventListener('change', applyFilters);
        filterTime.addEventListener('change', applyFilters);

        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                if (resetBtn.classList.contains('reset-mode')) {
                    filterFrom.value = '';
                    filterTo.value = '';
                    filterTime.value = '';
                    applyFilters();
                } else {
                    if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        }

        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                visibleCount += ITEMS_PER_PAGE;
                renderBuses(currentBuses, true);
            });
        }

        // Initial Lang Update
        updateTransportLanguage(window.i18n.lang);
    }
}

// Listen for Router Page Load
document.addEventListener('page-loaded', (e) => {
    const page = e.detail.page;
    if (page === '/transport' || page === '/transport.html' || page.includes('/transport')) {
        console.log('[Transport] page-loaded event triggered for:', page);
        initTransport();
    }
});

// Listen for Language Changes
window.addEventListener('lang-changed', (e) => {
    // Only update if we are on transport page (simple check: if filterFrom exists)
    if (document.getElementById('filter-from')) {
        updateTransportLanguage(e.detail.lang);
    }
});

// Initial Check (in case loaded directly) - Wait for DOM
function tryInitTransport() {
    const path = window.location.pathname;
    if (path === '/transport' || path === '/transport.html') {
        console.log('[Transport] Attempting to initialize');
        // Use requestAnimationFrame to ensure DOM is fully rendered
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                initTransport();
            });
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tryInitTransport);
} else {
    // DOM already loaded, but still use RAF to ensure rendering is complete
    tryInitTransport();
}
