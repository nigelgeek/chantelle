/**
 * Main JavaScript file for Frenching Up Your Life
 * Handles navigation, interactions, and animations
 */

// ===================================
// MODULE: Navigation
// ===================================

const Navigation = (() => {
    const init = () => {
        setupSmoothScroll();
        setupMobileMenu();
    };

    const setupSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    closeMobileMenu();
                }
            });
        });
    };

    const setupMobileMenu = () => {
        const menuBtn = document.getElementById('mobile-menu-btn');
        if (menuBtn) {
            menuBtn.addEventListener('click', toggleMobileMenu);
        }
    };

    const toggleMobileMenu = () => {
        const nav = document.querySelector('nav');
        nav.classList.toggle('mobile-menu-open');
    };

    const closeMobileMenu = () => {
        const nav = document.querySelector('nav');
        nav.classList.remove('mobile-menu-open');
    };

    return {
        init
    };
})();

// ===================================
// MODULE: Animations
// ===================================

const Animations = (() => {
    const init = () => {
        setupIntersectionObserver();
    };

    const setupIntersectionObserver = () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                    // Unobserve after animation
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('section').forEach((section) => {
            section.classList.add('transition-all', 'duration-1000');
            observer.observe(section);
        });

        // Observe all cards
        document.querySelectorAll('[class*="card"], [class*="rounded"]').forEach((card) => {
            if (card.offsetHeight > 100) {
                observer.observe(card);
            }
        });
    };

    return {
        init
    };
})();

// ===================================
// MODULE: Forms & CTAs
// ===================================

const Forms = (() => {
    const init = () => {
        setupCtaButtons();
    };

    const setupCtaButtons = () => {
        const bookBtn = document.querySelector('button[class*="BOOK"]');
        const whatsappBtn = document.querySelector('button:contains("WHATSAPP")');

        document.querySelectorAll('button').forEach((btn) => {
            // Add feedback on click
            btn.addEventListener('click', (e) => {
                if (btn.classList.contains('book-btn') || btn.textContent.includes('Book')) {
                    handleBookingClick(e);
                }
                if (btn.textContent.includes('WHATSAPP')) {
                    handleWhatsAppClick(e);
                }
            });
        });
    };

    const handleBookingClick = (e) => {
        // Add visual feedback
        const btn = e.target.closest('button');
        btn.classList.add('scale-95');
        setTimeout(() => btn.classList.remove('scale-95'), 100);

        // Scroll to contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleWhatsAppClick = (e) => {
        // Open WhatsApp
        const phoneNumber = '233550148633'; // Ghana country code
        const message = encodeURIComponent('Hi Chantelle, I would like to book a free assessment for my child.');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return {
        init
    };
})();

// ===================================
// MODULE: Performance & Utilities
// ===================================

const Utils = (() => {
    const init = () => {
        setupPerformanceObserver();
        logPageInfo();
    };

    const setupPerformanceObserver = () => {
        if ('PerformanceObserver' in window) {
            try {
                const observer = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        console.log(`${entry.name}: ${entry.duration}ms`);
                    }
                });

                observer.observe({ entryTypes: ['navigation', 'resource'] });
            } catch (e) {
                console.log('Performance observer not available');
            }
        }
    };

    const logPageInfo = () => {
        console.log(
            '%cFrenching Up Your Life',
            'font-size: 20px; font-weight: bold; color: #000e27;'
        );
        console.log(
            'Welcome! This website is optimized for performance and accessibility.'
        );
    };

    return {
        init
    };
})();

// ===================================
// APP INITIALIZATION
// ===================================

const App = (() => {
    const init = () => {
        // Ensure DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', start);
        } else {
            start();
        }
    };

    const start = () => {
        Navigation.init();
        Animations.init();
        Forms.init();
        Utils.init();

        console.log('✓ App initialized successfully');
    };

    return {
        init
    };
})();

// Start the application
App.init();
