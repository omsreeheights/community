// ===========================
// Content Loader - Dynamically Load Content from Files
// ===========================

async function loadContent() {
    try {
        console.log('Starting content loading...');
        // Load notices
        await loadNotices();
        // Load events
        await loadEvents();
        // Load gallery
        await loadGallery();
        // Load calendar events
        await loadCalendarEvents();
        console.log('Content loading completed');
    } catch (error) {
        console.error('Error loading content:', error);
    }
}

// Helper function to fetch content with fallback for local files
async function fetchContent(path) {
    try {
        const response = await fetch(path);
        if (!response.ok) {
            console.warn(`Failed to fetch ${path}: ${response.status} ${response.statusText}`);
            return null;
        }
        return await response.text();
    } catch (error) {
        console.warn(`Fetch error for ${path}:`, error);
        // Try alternative path resolution
        if (!path.startsWith('/')) {
            try {
                const altResponse = await fetch('/' + path);
                if (altResponse.ok) {
                    return await altResponse.text();
                }
            } catch (altError) {
                console.warn(`Alternative path also failed for ${path}`);
            }
        }
        return null;
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
    if (!container) {
        console.warn('Notice container not found');
        return;
    }
    
    container.innerHTML = ''; // Clear existing content

    // Load notice files
    const noticeFiles = ['notice1.md', 'notice2.md'];
    let loadedCount = 0;
    
    for (let file of noticeFiles) {
        const filePath = `content/notices/${file}`;
        console.log(`Loading notice: ${filePath}`);
        const content = await fetchContent(filePath);
        
        if (!content) {
            console.warn(`Could not load ${filePath}`);
            continue;
        }
        
        try {
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
            loadedCount++;
            console.log(`✓ Loaded notice: ${metadata.title}`);
        } catch (error) {
            console.error(`Error parsing ${file}:`, error);
        }
    }
    
    if (loadedCount === 0) {
        container.innerHTML = '<p style="text-align: center; color: #999;">No notices available</p>';
    }
}

// Load events from markdown files
async function loadEvents() {
    const container = document.querySelector('#events .events-container');
    if (!container) {
        console.warn('Events container not found');
        return;
    }
    
    container.innerHTML = ''; // Clear existing content

    // Load event files
    const eventFiles = ['event1.md', 'event2.md'];
    let loadedCount = 0;
    
    for (let file of eventFiles) {
        const filePath = `content/events/${file}`;
        console.log(`Loading event: ${filePath}`);
        const content = await fetchContent(filePath);
        
        if (!content) {
            console.warn(`Could not load ${filePath}`);
            continue;
        }
        
        try {
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
            loadedCount++;
            console.log(`✓ Loaded event: ${metadata.title}`);
        } catch (error) {
            console.error(`Error parsing ${file}:`, error);
        }
    }
    
    if (loadedCount === 0) {
        container.innerHTML = '<p style="text-align: center; color: #999;">No events available</p>';
    }
}

// Load gallery from markdown files
async function loadGallery() {
    const container = document.querySelector('#gallery .gallery-container');
    if (!container) {
        console.warn('Gallery container not found');
        return;
    }
    
    container.innerHTML = ''; // Clear existing content

    // Load gallery files
    const galleryFiles = ['gallery1.md', 'gallery2.md'];
    let loadedCount = 0;
    
    for (let file of galleryFiles) {
        const filePath = `content/gallery/${file}`;
        console.log(`Loading gallery: ${filePath}`);
        const content = await fetchContent(filePath);
        
        if (!content) {
            console.warn(`Could not load ${filePath}`);
            continue;
        }
        
        try {
            const { metadata } = parseFrontmatter(content);
            
            const galleryHTML = `
                <div class="gallery-item">
                    <img src="${metadata.image}" alt="${metadata.title}">
                    <p class="gallery-caption">${metadata.caption || metadata.title || 'Gallery Image'}</p>
                </div>
            `;
            
            container.insertAdjacentHTML('beforeend', galleryHTML);
            loadedCount++;
            console.log(`✓ Loaded gallery: ${metadata.title}`);
        } catch (error) {
            console.error(`Error parsing ${file}:`, error);
        }
    }
    
    if (loadedCount === 0) {
        container.innerHTML = '<p style="text-align: center; color: #999;">No gallery items available</p>';
    }
}

// Load calendar events from JSON
async function loadCalendarEvents() {
    console.log('Loading calendar events...');
    const content = await fetchContent('content/calendar-events.json');
    
    if (!content) {
        console.warn('Could not load calendar events file');
        return;
    }
    
    try {
        const events = JSON.parse(content);
        // Update the global communityEvents
        Object.assign(window.communityEvents, events);
        console.log(`✓ Loaded ${Object.keys(events).length} calendar events`);
    } catch (error) {
        console.error('Error parsing calendar events JSON:', error);
    }
}

// Initialize content loading after page is fully loaded
if (document.readyState === 'loading') {
    // Still loading, wait for DOMContentLoaded
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(loadContent, 100);
    });
} else {
    // Already loaded
    setTimeout(loadContent, 100);
}

// Also listen for any page state changes
window.addEventListener('load', function() {
    console.log('Window loaded event');
    loadContent();
});
