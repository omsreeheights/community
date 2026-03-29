// ===========================
// Content Loader - Dynamically Load Content from Files
// ===========================

async function loadContent() {
    try {
        // Load notices
        await loadNotices();
        // Load events
        await loadEvents();
        // Load gallery
        await loadGallery();
        // Load calendar events
        await loadCalendarEvents();
    } catch (error) {
        console.error('Error loading content:', error);
    }
}

// Parse frontmatter from markdown
function parseFrontmatter(content) {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = content.match(frontmatterRegex);
    
    if (!match) {
        return { metadata: {}, content: content };
    }

    const metadataStr = match[1];
    const bodyContent = match[2];
    const metadata = {};

    // Simple YAML parser for frontmatter
    metadataStr.split('\n').forEach(line => {
        if (line.trim()) {
            const [key, ...valueParts] = line.split(':');
            const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
            metadata[key.trim()] = value;
        }
    });

    return { metadata, content: bodyContent };
}

// Load notices from markdown files
async function loadNotices() {
    const container = document.querySelector('#notice-board .notices-container');
    if (!container) return;
    
    container.innerHTML = ''; // Clear existing content

    // Load notice files
    const noticeFiles = ['notice1.md', 'notice2.md'];
    
    for (let file of noticeFiles) {
        try {
            const response = await fetch(`content/notices/${file}`);
            if (!response.ok) continue;
            
            const content = await response.text();
            const { metadata, content: body } = parseFrontmatter(content);
            
            const noticeHTML = `
                <div class="notice-item">
                    <div class="notice-header">
                        <h3>${metadata.title || 'Notice'}</h3>
                        <span class="notice-date">${metadata.date || 'N/A'}</span>
                    </div>
                    <p>${body.trim()}</p>
                </div>
            `;
            
            container.insertAdjacentHTML('beforeend', noticeHTML);
        } catch (error) {
            console.warn(`Could not load ${file}:`, error);
        }
    }
}

// Load events from markdown files
async function loadEvents() {
    const container = document.querySelector('#events .events-container');
    if (!container) return;
    
    container.innerHTML = ''; // Clear existing content

    // Load event files
    const eventFiles = ['event1.md', 'event2.md'];
    
    for (let file of eventFiles) {
        try {
            const response = await fetch(`content/events/${file}`);
            if (!response.ok) continue;
            
            const content = await response.text();
            const { metadata, content: body } = parseFrontmatter(content);
            
            const eventHTML = `
                <div class="event-item">
                    <div class="event-header">
                        <h3>${metadata.title || 'Event'}</h3>
                        <span class="event-date">${metadata.date || 'N/A'}</span>
                    </div>
                    <p><strong>Time:</strong> ${metadata.time || 'TBD'}</p>
                    <p><strong>Location:</strong> ${metadata.location || 'TBD'}</p>
                    <p class="event-description">${body.trim()}</p>
                    <div class="event-gallery">
                        <img src="assets/images/placeholder-event.png" alt="${metadata.title}">
                    </div>
                </div>
            `;
            
            container.insertAdjacentHTML('beforeend', eventHTML);
        } catch (error) {
            console.warn(`Could not load ${file}:`, error);
        }
    }
}

// Load gallery from markdown files
async function loadGallery() {
    const container = document.querySelector('#gallery .gallery-container');
    if (!container) return;
    
    container.innerHTML = ''; // Clear existing content

    // Load gallery files
    const galleryFiles = ['gallery1.md', 'gallery2.md'];
    
    for (let file of galleryFiles) {
        try {
            const response = await fetch(`content/gallery/${file}`);
            if (!response.ok) continue;
            
            const content = await response.text();
            const { metadata } = parseFrontmatter(content);
            
            const galleryHTML = `
                <div class="gallery-item">
                    <img src="${metadata.image}" alt="${metadata.title}">
                    <p class="gallery-caption">${metadata.caption || metadata.title || 'Gallery Image'}</p>
                </div>
            `;
            
            container.insertAdjacentHTML('beforeend', galleryHTML);
        } catch (error) {
            console.warn(`Could not load ${file}:`, error);
        }
    }
}

// Load calendar events from JSON
async function loadCalendarEvents() {
    try {
        const response = await fetch('content/calendar-events.json');
        if (!response.ok) return;
        
        const events = await response.json();
        // Update the global communityEvents
        Object.assign(window.communityEvents, events);
    } catch (error) {
        console.warn('Could not load calendar events:', error);
    }
}

// Initialize content loading
document.addEventListener('DOMContentLoaded', function() {
    loadContent();
});
