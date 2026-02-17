// ================================
// Dark/Light Mode Toggle
// ================================

// Initialize theme from localStorage or system preference
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
}

// Update theme icon based on current theme
function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('.theme-icon');
    
    if (theme === 'dark') {
        icon.textContent = '☀️';
        icon.parentElement.title = 'Switch to light mode';
    } else {
        icon.textContent = '🌙';
        icon.parentElement.title = 'Switch to dark mode';
    }
}

// Toggle between light and dark mode
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Add animation effect
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.style.animation = 'none';
    setTimeout(() => {
        themeToggle.style.animation = '';
    }, 10);
}

// ================================
// Contact Form Handling
// ================================

function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validate form
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Validate email format
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission (since this is a frontend-only CV)
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // Simulate network delay
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Show success message
            showNotification('Thank you for your message! I will get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();
        }, 1500);
    });
}

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show notification message
function showNotification(message, type) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            font-weight: 500;
            z-index: 1000;
            animation: slideInUp 0.4s ease-out;
            max-width: 400px;
            word-wrap: break-word;
        }
        
        .notification-success {
            background-color: #10b981;
            color: white;
        }
        
        .notification-error {
            background-color: #ef4444;
            color: white;
        }
        
        @keyframes slideInUp {
            from {
                transform: translateY(100px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutDown {
            from {
                transform: translateY(0);
                opacity: 1;
            }
            to {
                transform: translateY(100px);
                opacity: 0;
            }
        }
        
        @media (max-width: 480px) {
            .notification {
                bottom: 1rem;
                right: 1rem;
                left: 1rem;
                max-width: 100%;
            }
        }
    `;
    
    if (!document.querySelector('style[data-notifications]')) {
        style.setAttribute('data-notifications', 'true');
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutDown 0.4s ease-out forwards';
        setTimeout(() => {
            notification.remove();
        }, 400);
    }, 4000);
}

// ================================
// Active Navigation Link
// ================================

function initializeActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        document.querySelectorAll('section[id]').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 250) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
                link.style.color = 'var(--primary-color)';
            } else {
                link.style.color = '';
            }
        });
    });
}

// ================================
// CV Download Functionality
// ================================

function initializeCVDownload() {
    const downloadBtn = document.querySelector('.download-cv-btn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            // Check if cv.pdf exists, otherwise offer print to PDF
            const fileName = this.getAttribute('href');
            
            if (fileName === 'cv.pdf') {
                // If cv.pdf doesn't exist, offer to print to PDF
                const pdfUrl = this.href;
                fetch(pdfUrl, { method: 'HEAD' }).catch(() => {
                    // File doesn't exist, use print functionality
                    showNotification('Using browser print function to generate PDF. Press Ctrl+P or Cmd+P', 'success');
                });
            }
        });
    }
}

// ================================
// Initialize All Functions
// ================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initializeTheme();
    
    // Theme toggle button
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
        // Also support touch for mobile
        themeToggle.addEventListener('touchend', function(e) {
            e.preventDefault();
            toggleTheme();
        });
    }
    
    // Contact form
    initializeContactForm();
    
    // Active navigation link
    initializeActiveNavLink();
    
    // CV download
    initializeCVDownload();
    
    // Mobile viewport optimization
    optimizeMobileViewport();
});

// ================================
// Mobile Viewport Optimization
// ================================

function optimizeMobileViewport() {
    // Prevent zoom on input focus (except for accessibility)
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            // Allow zoom on focus for accessibility
            document.querySelector('meta[name="viewport"]').setAttribute(
                'content', 
                'width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=5.0, user-scalable=yes'
            );
        });
        
        input.addEventListener('blur', function() {
            // Restore zoom settings after blur
            document.querySelector('meta[name="viewport"]').setAttribute(
                'content', 
                'width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=5.0, user-scalable=yes'
            );
        });
    });
    
    // Handle orientation change
    window.addEventListener('orientationchange', function() {
        // Refresh layout on orientation change
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    });
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Recalculate styles if needed
            initializeIntersectionObserver();
        }, 250);
    });
}