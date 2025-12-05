const busData = [
    {
        id: 1,
        number: "SH-01",
        type: "Local AC",
        route: ["Shivpuri Circle", "Medical College", "Bus Stand", "Railway Station"],
        timings: ["08:00 AM", "08:15 AM", "08:30 AM", "08:45 AM"],
        status: "On Time"
    },
    {
        id: 2,
        number: "SH-05",
        type: "Express",
        route: ["Madhav Chowk", "Tourist Village", "Sakhya Sagar", "Chhatri"],
        timings: ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM"],
        status: "Delayed"
    },
    {
        id: 3,
        number: "SH-12",
        type: "Local",
        route: ["Physical College", "Hospital Road", "Court", "Collectorate"],
        timings: ["07:30 AM", "08:00 AM", "08:30 AM", "09:00 AM"],
        status: "On Time"
    },
    {
        id: 4,
        number: "SH-08",
        type: "Shuttle",
        route: ["Railway Station", "Bus Stand", "Madhav Chowk"],
        timings: ["Every 15 mins"],
        status: "On Time"
    },
    {
        id: 5,
        number: "SH-20",
        type: "Night Service",
        route: ["Shivpuri Circle", "Highway Junction", "Industrial Area"],
        timings: ["09:00 PM", "10:00 PM", "11:00 PM"],
        status: "On Time"
    }
];

const grid = document.getElementById('schedule-grid');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

function renderBuses(buses) {
    grid.innerHTML = '';
    
    if (buses.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No buses found matching your search.</p>';
        return;
    }

    buses.forEach(bus => {
        const card = document.createElement('div');
        card.className = 'bus-card';
        
        const start = bus.route[0];
        const end = bus.route[bus.route.length - 1];
        const nextTime = bus.timings[0]; // Simplified for demo

        card.innerHTML = `
            <div class="bus-header">
                <span class="bus-number">${bus.number}</span>
                <span class="bus-type">${bus.type}</span>
            </div>
            <div class="route-info">
                <div class="route-stop">
                    <span class="stop-time">Start</span>
                    <span class="stop-name">${start}</span>
                </div>
                <div class="arrow-icon">↓</div>
                <div class="route-stop">
                    <span class="stop-time">End</span>
                    <span class="stop-name">${end}</span>
                </div>
            </div>
            <div class="bus-footer">
                <span>Next: ${nextTime}</span>
                <span><span class="status-badge" style="background-color: ${bus.status === 'Delayed' ? '#ef4444' : '#10b981'}"></span>${bus.status}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterBuses(query) {
    const lowerQuery = query.toLowerCase();
    const filtered = busData.filter(bus => 
        bus.number.toLowerCase().includes(lowerQuery) ||
        bus.route.some(stop => stop.toLowerCase().includes(lowerQuery))
    );
    renderBuses(filtered);
}

// Initial render
renderBuses(busData);

// Event listeners
searchBtn.addEventListener('click', () => {
    filterBuses(searchInput.value);
});

searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        filterBuses(searchInput.value);
    } else {
        // Optional: Real-time search
        filterBuses(searchInput.value);
    }
});
