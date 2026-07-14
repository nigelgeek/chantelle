/**
 * Theme & Design Configuration
 * Centralized color, spacing, and design system definitions
 */

const designSystem = {
    // Color Palette
    colors: {
        primary: '#000e27',        // Dark Navy
        primaryLight: '#d7e3ff',
        primaryDark: '#001b3e',
        
        secondary: '#bc0003',      // French Red
        secondaryLight: '#ffdad5',
        secondaryDark: '#930002',
        
        tertiary: '#0c0f0f',       // Dark Gray
        tertiaryLight: '#e2e2e2',
        
        // Surfaces
        surface: '#f8f9fa',
        surfaceLight: '#ffffff',
        surfaceDark: '#2e3132',
        
        // Semantic Colors
        error: '#ba1a1a',
        errorContainer: '#ffdad6',
        success: '#1b7c3f',
        warning: '#ff9800',
        info: '#2196F3',
        
        // Text Colors
        onPrimary: '#ffffff',
        onSecondary: '#ffffff',
        onBackground: '#191c1d',
        onSurface: '#191c1d',
        onSurfaceVariant: '#44474f',
        
        // Outline
        outline: '#747780',
        outlineVariant: '#c4c6d0'
    },

    // Typography
    typography: {
        fontFamilies: {
            heading: '"Playfair Display", serif',
            body: '"Manrope", sans-serif',
            mono: '"Courier New", monospace'
        },
        fontSizes: {
            xs: '12px',
            sm: '14px',
            base: '16px',
            lg: '18px',
            xl: '24px',
            '2xl': '32px',
            '3xl': '36px',
            '4xl': '48px'
        },
        fontWeights: {
            light: 300,
            normal: 400,
            semibold: 600,
            bold: 700,
            black: 800
        },
        lineHeights: {
            tight: 1.2,
            normal: 1.5,
            relaxed: 1.6
        }
    },

    // Spacing Scale
    spacing: {
        xs: '4px',
        sm: '8px',
        base: '12px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '80px'
    },

    // Border Radius
    borderRadius: {
        sm: '4px',
        base: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        full: '9999px'
    },

    // Shadows
    shadows: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        base: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    },

    // Breakpoints (Mobile First)
    breakpoints: {
        mobile: '0px',
        tablet: '768px',
        desktop: '1024px',
        wide: '1280px',
        ultra: '1920px'
    },

    // Transitions
    transitions: {
        fast: '150ms ease-in-out',
        base: '300ms ease-in-out',
        slow: '500ms ease-in-out'
    },

    // Z-Index Scale
    zIndex: {
        base: 0,
        dropdown: 10,
        sticky: 20,
        fixed: 30,
        modal: 40,
        popover: 50,
        tooltip: 60
    }
};

// Helper function to access theme values
function getThemeValue(path, defaultValue = null) {
    return path.split('.').reduce((obj, key) => obj?.[key], designSystem) || defaultValue;
}

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { designSystem, getThemeValue };
}
