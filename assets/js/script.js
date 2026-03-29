// ===========================
// Om Sree Heights - Main JavaScript
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    initTabs();
    initForms();
    initMonthlyTheme();
    // Check for date change every minute
    setInterval(checkDateChange, 60000);
});

// ===========================
// Monthly Theme System
// ===========================

// Monthly color palettes with festive/seasonal themes
const monthlyThemes = {
    0: { // January - Winter/New Year Theme
        name: 'Winter',
        primary: '#1a5276',      // Deep blue
        secondary: '#2874a6',    // Lighter blue
        accent: '#f39c12',       // Golden yellow
        light_bg: '#d6eaf8'      // Light blue background
    },
    1: { // February - Valentine/Spring Start
        name: 'Spring',
        primary: '#7b241c',      // Deep red (Valentine)
        secondary: '#d63031',    // Vibrant red
        accent: '#ff6b9d',       // Pink
        light_bg: '#fadbd8'      // Light pink background
    },
    2: { // March - Holi/Spring
        name: 'Holi',
        primary: '#27ae60',      // Green
        secondary: '#16a085',    // Teal
        accent: '#f39c12',       // Orange (Holi colors)
        light_bg: '#d5f4e6'      // Light green background
    },
    3: { // April - Summer Start
        name: 'Summer',
        primary: '#e67e22',      // Orange
        secondary: '#f39c12',    // Golden
        accent: '#c0392b',       // Red
        light_bg: '#fdebd0'      // Light orange background
    },
    4: { // May - Early Summer
        name: 'May Fest',
        primary: '#8e44ad',      // Purple
        secondary: '#9b59b6',    // Light purple
        accent: '#3498db',       // Sky blue
        light_bg: '#ebdef0'      // Light purple background
    },
    5: { // June - Monsoon Start
        name: 'Monsoon',
        primary: '#16a085',      // Teal
        secondary: '#1abc9c',    // Bright teal
        accent: '#2980b9',       // Blue
        light_bg: '#d1f2eb'      // Light teal background
    },
    6: { // July - Mid Monsoon
        name: 'Midsummer',
        primary: '#2980b9',      // Blue
        secondary: '#3498db',    // Sky blue
        accent: '#27ae60',       // Green
        light_bg: '#d6eaf8'      // Light blue background
    },
    7: { // August - Janmashtami/Independence
        name: 'Independence',
        primary: '#c0392b',      // Red (Tricolor)
        secondary: '#f39c12',    // Orange (Tricolor)
        accent: '#0e3c26',       // Green (Tricolor)
        light_bg: '#fadbd8'      // Light red background
    },
    8: { // September - Back to School
        name: 'Education',
        primary: '#2c3e50',      // Dark slate
        secondary: '#34495e',    // Slate
        accent: '#3498db',       // Blue
        light_bg: '#ecf0f1'      // Light gray background
    },
    9: { // October - Dussehra/Durga Puja
        name: 'Festive',
        primary: '#7b241c',      // Deep red
        secondary: '#d63031',    // Bright red
        accent: '#f39c12',       // Gold
        light_bg: '#fadbd8'      // Light red background
    },
    10: { // November - Diwali
        name: 'Diwali',
        primary: '#f39c12',      // Gold
        secondary: '#e67e22',    // Orange
        accent: '#c0392b',       // Red
        light_bg: '#fdebd0'      // Light orange background
    },
    11: { // December - Christmas/Year End
        name: 'Winter Celebration',
        primary: '#27ae60',      // Green (Christmas)
        secondary: '#c0392b',    // Red (Christmas)
        accent: '#fff9e6',       // Cream (Lights)
        light_bg: '#d5f4e6'      // Light green background
    }
};

let currentMonth = new Date().getMonth();

/**
 * Initialize monthly theme on page load
 */
function initMonthlyTheme() {
    applyMonthlyTheme();
}

/**
 * Apply theme based on current month
 */
function applyMonthlyTheme() {
    const now = new Date();
    const month = now.getMonth();
    const theme = monthlyThemes[month];
    
    if (!theme) return;
    
    const root = document.documentElement;
    
    // Apply color transitions for smooth theme change
    root.style.transition = 'all 0.6s ease-in-out';
    
    // Update CSS variables
    root.style.setProperty('--primary-color', theme.primary);
    root.style.setProperty('--secondary-color', theme.secondary);
    root.style.setProperty('--accent-color', theme.accent);
    root.style.setProperty('--light-bg', theme.light_bg);
    
    // Log the applied theme
    console.log(`🎨 Monthly Theme Applied: ${theme.name} (${getMonthName(month)})`);
    
    // Display theme info for debugging (optional)
    displayThemeInfo(theme, month);
}

/**
 * Check if date has changed and update theme if needed
 */
function checkDateChange() {
    const now = new Date();
    const month = now.getMonth();
    
    // If month changed, reapply theme
    if (month !== currentMonth) {
        currentMonth = month;
        applyMonthlyTheme();
    }
}

/**
 * Get month name from month number
 */
function getMonthName(monthNum) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[monthNum];
}

/**
 * Display theme information (debugging)
 */
function displayThemeInfo(theme, monthNum) {
    // Add a subtle theme indicator (optional - comment out if not wanted)
    const existingInfo = document.querySelector('.theme-info');
    if (existingInfo) existingInfo.remove();
    
    const themeInfo = document.createElement('div');
    themeInfo.className = 'theme-info';
    themeInfo.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        padding: 0.75rem 1rem;
        background-color: rgba(0, 0, 0, 0.7);
        color: #fff;
        border-radius: 4px;
        font-size: 0.8rem;
        z-index: 999;
        opacity: 0.6;
        transition: opacity 0.3s ease;
    `;
    themeInfo.innerHTML = `
        🎨 ${theme.name} Theme<br>
        <small>${getMonthName(monthNum)}</small>
    `;
    
    // Make it fade on hover
    themeInfo.onmouseover = () => themeInfo.style.opacity = '0.9';
    themeInfo.onmouseout = () => themeInfo.style.opacity = '0.6';
    
    // Only show in development (comment out the return to hide theme info)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        document.body.appendChild(themeInfo);
    }
}


function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
            
            // Scroll to top of main content
            document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

// ===========================
// Form Handling
// ===========================

function initForms() {
    // Newsletter Form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }

    // Feedback Form
    const feedbackForm = document.getElementById('feedback-form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', handleFeedbackSubmit);
    }
}

// ===========================
// Newsletter Form Submission
// ===========================

function handleNewsletterSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const email = formData.get('email') || this.querySelector('input[type="email"]').value;
    
    // Validate email
    if (!isValidEmail(email)) {
        showAlert('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission
    const button = this.querySelector('button');
    const originalText = button.textContent;
    button.textContent = 'Subscribing...';
    button.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        showAlert('Thank you for subscribing! We will send newsletters to ' + email, 'success');
        this.reset();
        button.textContent = originalText;
        button.disabled = false;
    }, 1500);
}

// ===========================
// Contact Form Submission
// ===========================

function handleContactSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Validate form data
    if (!name || !email || !message) {
        showAlert('Please fill in all required fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showAlert('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission
    const button = this.querySelector('button');
    const originalText = button.textContent;
    button.textContent = 'Sending...';
    button.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        showAlert('Thank you for your message, ' + name + '! We will get back to you soon.', 'success');
        this.reset();
        button.textContent = originalText;
        button.disabled = false;
    }, 1500);
}

// ===========================
// Feedback Form Submission
// ===========================

function handleFeedbackSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const flat = formData.get('flat');
    const category = formData.get('category');
    const feedback = formData.get('feedback');
    
    // Validate form data
    if (!name || !email || !flat || !category || !feedback) {
        showAlert('Please fill in all required fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showAlert('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission
    const button = this.querySelector('button');
    const originalText = button.textContent;
    button.textContent = 'Submitting...';
    button.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        showAlert('Thank you for your feedback! Your input helps us improve our community services.', 'success');
        this.reset();
        button.textContent = originalText;
        button.disabled = false;
    }, 1500);
}

// ===========================
// Utility Functions
// ===========================

/**
 * Validate email address format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Display alert message
 */
function showAlert(message, type = 'info') {
    // Remove existing alerts
    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    
    // Add styles dynamically
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 4px;
        font-weight: 500;
        z-index: 1000;
        max-width: 400px;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            alert.style.backgroundColor = '#27ae60';
            alert.style.color = '#fff';
            break;
        case 'error':
            alert.style.backgroundColor = '#e74c3c';
            alert.style.color = '#fff';
            break;
        case 'info':
            alert.style.backgroundColor = '#3498db';
            alert.style.color = '#fff';
            break;
        default:
            alert.style.backgroundColor = '#2c3e50';
            alert.style.color = '#fff';
    }
    
    document.body.appendChild(alert);
    
    // Remove alert after 5 seconds
    setTimeout(() => {
        alert.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => alert.remove(), 300);
    }, 5000);
}

/**
 * Add animation styles to the document
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===========================
// Smooth scrolling for anchor links
// ===========================

document.addEventListener('click', function(event) {
    const target = event.target;
    
    if (target.tagName === 'A' && target.getAttribute('href').startsWith('#')) {
        const href = target.getAttribute('href');
        const element = document.querySelector(href);
        
        if (element) {
            event.preventDefault();
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// ===========================
// Mobile menu close on navigation
// ===========================

document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
        // Close any mobile menus if implemented in the future
    });
});

console.log('Om Sree Heights - Website loaded successfully');
