/**
 * EA Network Colombia - Landing Page JavaScript
 * Functionality for interactive elements and form handling
 */

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const forms = document.querySelectorAll('.registration-form');

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeForms();
    initializeScrollAnimations();
    initializeSmoothScrolling();
});

/**
 * Navigation functionality
 */
function initializeNavigation() {
    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Header scroll effect
    window.addEventListener('scroll', handleHeaderScroll);
}

function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
}

function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.classList.remove('menu-open');
}

function handleHeaderScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

/**
 * Form handling
 */
function initializeForms() {
    forms.forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Show loading state
    showLoadingState(submitButton);
    
    try {
        // Simulate API call (replace with actual endpoint)
        await simulateFormSubmission(formData);
        
        // Show success message
        showSuccessMessage(form);
        form.reset();
        
    } catch (error) {
        // Show error message
        showErrorMessage(form, error.message);
    } finally {
        // Remove loading state
        hideLoadingState(submitButton);
    }
}

function showLoadingState(button) {
    const originalText = button.textContent;
    button.textContent = 'Enviando...';
    button.disabled = true;
    button.classList.add('loading');
    button.dataset.originalText = originalText;
}

function hideLoadingState(button) {
    button.textContent = button.dataset.originalText || 'Enviar';
    button.disabled = false;
    button.classList.remove('loading');
}

function showSuccessMessage(form) {
    // Create success message
    const successDiv = document.createElement('div');
    successDiv.className = 'alert alert-success';
    successDiv.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>¡Registro exitoso! Te contactaremos pronto.</span>
    `;
    
    // Insert before form
    form.parentNode.insertBefore(successDiv, form);
    
    // Remove after 5 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
    
    // Scroll to message
    successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function showErrorMessage(form, message) {
    // Create error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-error';
    errorDiv.innerHTML = `
        <i class="fas fa-exclamation-triangle"></i>
        <span>Error: ${message}</span>
    `;
    
    // Insert before form
    form.parentNode.insertBefore(errorDiv, form);
    
    // Remove after 5 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

// Simulate form submission (replace with actual API call)
function simulateFormSubmission(formData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate random success/failure for demo
            if (Math.random() > 0.1) {
                resolve({ success: true });
            } else {
                reject(new Error('Error de conexión. Inténtalo de nuevo.'));
            }
        }, 2000);
    });
}

/**
 * Scroll animations
 */
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Observe elements that should animate
    const animatedElements = document.querySelectorAll('.about-item, .training-card, .job-card, .registration-card');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}

/**
 * Smooth scrolling for navigation links
 */
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 15;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Form validation
 */
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showFieldError(field, 'Este campo es requerido');
            isValid = false;
        } else {
            clearFieldError(field);
            
            // Specific validations
            if (field.type === 'email' && !isValidEmail(field.value)) {
                showFieldError(field, 'Ingresa un email válido');
                isValid = false;
            }
            
            if (field.type === 'tel' && !isValidPhone(field.value)) {
                showFieldError(field, 'Ingresa un teléfono válido');
                isValid = false;
            }
        }
    });
    
    return isValid;
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    field.classList.add('error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
    field.classList.remove('error');
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[\d\s\-\(\)]{7,}$/;
    return phoneRegex.test(phone);
}

/**
 * Utility functions
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add CSS for mobile menu and alerts
const additionalCSS = `
/* Mobile Menu Styles */
@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        top: 40px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 40px);
        background: var(--white);
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 2rem 0;
        transition: left 0.3s ease;
        box-shadow: 0 5px 20px rgba(26, 54, 93, 0.1);
    }
    
    .nav-menu.active {
        left: 0;
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(6px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -6px);
    }
    
    body.menu-open {
        overflow: hidden;
    }
}

/* Alert Styles */
.alert {
    padding: 1rem 1.5rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 500;
}

.alert-success {
    background: #f0fff4;
    color: #22543d;
    border: 1px solid #9ae6b4;
}

.alert-error {
    background: #fed7d7;
    color: #822727;
    border: 1px solid #fc8181;
}

.field-error {
    color: #e53e3e;
    font-size: 0.875rem;
    margin-top: 0.25rem;
}

/* Header scroll effect */
.header.scrolled {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
}
`;

// Inject additional CSS
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);