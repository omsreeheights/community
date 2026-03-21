// ===== DYNAMIC CONTENT RENDERING =====
// This script loads content from config.js and applies it to the page

document.addEventListener('DOMContentLoaded', function() {
    // Initialize page
    initializeTheme();
    renderAnnouncements();
    renderEvents();
    renderGallery();
    renderAbout();
    renderContact();
    setupEventListeners();
});

// ===== THEME MANAGEMENT =====

function initializeTheme() {
    const today = new Date();
    const currentMonth = today.getMonth();
    
    // Apply current month theme
    setTheme(currentMonth);
    
    // Update month selector
    const monthSelector = document.getElementById('monthSelector');
    monthSelector.value = currentMonth;
    monthSelector.addEventListener('change', (e) => {
        setTheme(parseInt(e.target.value));
    });
}

function setTheme(monthIndex) {
    // Remove all theme classes
    document.body.classList.remove(...MONTHLY_THEMES);
    
    // Add current theme
    document.body.classList.add(MONTHLY_THEMES[monthIndex]);
    
    // Store in localStorage for persistence
    localStorage.setItem('selectedMonth', monthIndex);
}

// ===== ANNOUNCEMENTS RENDERING =====

function renderAnnouncements() {
    const container = document.getElementById('announcementsContainer');
    container.innerHTML = '';
    
    CONFIG.announcements.forEach(announcement => {
        const card = document.createElement('div');
        card.className = 'announcement-card';
        card.innerHTML = `
            <div class="date">${announcement.date}</div>
            <h3>${announcement.title}</h3>
            <p>${announcement.description}</p>
        `;
        container.appendChild(card);
    });
}

// ===== EVENTS RENDERING =====

function renderEvents() {
    const container = document.getElementById('eventsContainer');
    container.innerHTML = '';
    
    CONFIG.events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.className = 'event-item';
        eventItem.innerHTML = `
            <div class="event-date">
                <div class="month">${event.month}</div>
                <div class="day">${event.day}</div>
            </div>
            <div class="event-details">
                <h3>${event.title}</h3>
                <p class="event-time">⏰ ${event.time}</p>
                <p>${event.description}</p>
            </div>
        `;
        container.appendChild(eventItem);
    });
}

// ===== GALLERY RENDERING =====

function renderGallery() {
    const container = document.getElementById('galleryContainer');
    container.innerHTML = '';
    
    CONFIG.gallery.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${item.src}" alt="${item.caption}" onerror="this.src='assets/images/placeholder.jpg'">
            <div class="gallery-overlay">
                <div class="gallery-caption">${item.caption}</div>
            </div>
        `;
        container.appendChild(galleryItem);
    });
}

// ===== ABOUT RENDERING =====

function renderAbout() {
    const container = document.getElementById('aboutContainer');
    
    let featuresHTML = '<div class="features-list">';
    CONFIG.about.features.forEach(feature => {
        featuresHTML += `
            <div class="feature">
                <div class="feature-icon">✓</div>
                <div class="feature-text">
                    <h4>${feature.title}</h4>
                    <p>${feature.description}</p>
                </div>
            </div>
        `;
    });
    featuresHTML += '</div>';
    
    const aboutImage = 'assets/images/about-community.jpg';
    
    container.innerHTML = `
        <div class="about-content">
            <div class="about-text">
                <h3>${CONFIG.about.title}</h3>
                <p>${CONFIG.about.mainText}</p>
                <p>${CONFIG.about.additionalText}</p>
                ${featuresHTML}
            </div>
            <div class="about-image">
                <img src="${aboutImage}" alt="Community" onerror="this.src='assets/images/placeholder.jpg'">
            </div>
        </div>
    `;
}

// ===== CONTACT RENDERING =====

function renderContact() {
    const container = document.getElementById('contactContainer');
    
    let contactHTML = '';
    Object.values(CONFIG.contact).forEach(item => {
        contactHTML += `
            <div class="contact-item">
                <div class="contact-icon">${item.icon}</div>
                <div class="contact-details">
                    <h3>${item.title}</h3>
                    <p>${item.details}</p>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = contactHTML;
}

// ===== EVENT LISTENERS =====

function setupEventListeners() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send this to a server
    // For now, we'll just show a success message
    console.log('Form Submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    document.getElementById('contactForm').reset();
}

// ===== UTILITY FUNCTIONS =====

// Function to update content dynamically (can be called from console or other scripts)
function updateAnnouncement(id, newData) {
    const announcement = CONFIG.announcements.find(a => a.id === id);
    if (announcement) {
        Object.assign(announcement, newData);
        renderAnnouncements();
    }
}

function addAnnouncement(announcement) {
    announcement.id = Math.max(...CONFIG.announcements.map(a => a.id), 0) + 1;
    CONFIG.announcements.unshift(announcement);
    renderAnnouncements();
}

function removeAnnouncement(id) {
    const index = CONFIG.announcements.findIndex(a => a.id === id);
    if (index > -1) {
        CONFIG.announcements.splice(index, 1);
        renderAnnouncements();
    }
}

// Open gallery item in full view
document.addEventListener('click', (e) => {
    if (e.target.closest('.gallery-item img')) {
        const img = e.target;
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            cursor: pointer;
        `;
        modal.innerHTML = `
            <img src="${img.src}" alt="${img.alt}" style="max-width: 90%; max-height: 90%; border-radius: 8px;">
        `;
        document.body.appendChild(modal);
        modal.addEventListener('click', () => {
            modal.remove();
        });
    }
});

// ===== SMOOTH SCROLLING FOR NAVIGATION =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
