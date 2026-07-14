/**
 * Analytics Configuration
 * Integrate with Google Analytics, Hotjar, or other tracking services
 */

// Google Analytics Configuration
const analyticsConfig = {
    enabled: false, // Set to true when ready for production
    measurementId: 'G-XXXXXXXXXX', // Replace with your Google Analytics ID
    trackingEvents: {
        pageView: true,
        bookingClick: true,
        linkClick: true,
        formSubmission: true
    }
};

// Hotjar Configuration (Session Recording & Heatmaps)
const hotjarConfig = {
    enabled: false,
    siteId: null, // Add Hotjar Site ID when ready
};

// Email Service Configuration (for contact forms)
const emailConfig = {
    enabled: false,
    provider: 'sendgrid', // or 'mailchimp', 'formspree', etc.
    apiKey: null,
    fromEmail: 'noreply@frenchingupyourlife.com',
    toEmail: 'frenchingupyourlife@gmail.com'
};

// Booking Service Configuration (for calendar/booking integration)
const bookingConfig = {
    enabled: false,
    provider: 'calendly', // or 'acuity', 'setmore', etc.
    calendarUrl: null,
};

// Feature Flags
const featureFlags = {
    enableBookingSystem: false,
    enableNewsletterSignup: false,
    enableReviews: false,
    enableChat: false,
    enableVideoTutorials: false,
    maintenanceMode: false
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        analyticsConfig,
        hotjarConfig,
        emailConfig,
        bookingConfig,
        featureFlags
    };
}
