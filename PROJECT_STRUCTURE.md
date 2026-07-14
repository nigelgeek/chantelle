# Project Structure Guide

## 📂 Complete Directory Layout

```
Chantelle/
│
├── index.html                          # Main entry point - Semantic HTML structure
│
├── css/
│   └── styles.css                      # Custom styling, animations, utilities
│
├── js/
│   ├── tailwind-config.js             # Tailwind CSS theme configuration
│   ├── script.js                       # Main application logic (modular)
│   └── [future: modules/]
│
├── assets/
│   ├── images/                         # Photos, illustrations, SVGs
│   │   ├── hero/                       # Hero section images
│   │   ├── team/                       # Team/staff photos
│   │   └── gallery/                    # General gallery images
│   │
│   ├── icons/                          # Custom icons and SVG assets
│   │   ├── social/                     # Social media icons
│   │   ├── features/                   # Feature icons
│   │   └── common/                     # General UI icons
│   │
│   └── fonts/                          # Custom font files (if not using CDN)
│       └── [future: self-hosted fonts]
│
├── config/
│   ├── analytics.js                    # Analytics & tracking configuration
│   ├── theme.js                        # Design system constants
│   └── [future: other configs]
│
├── docs/                               # Documentation (future)
│   ├── API.md
│   ├── DEPLOYMENT.md
│   └── TROUBLESHOOTING.md
│
├── README.md                           # Project overview & setup guide
├── DEVELOPMENT.md                      # Development guidelines
├── CONTRIBUTING.md                     # Contribution guidelines (future)
├── package.json                        # NPM configuration
├── .gitignore                          # Git ignore patterns
└── [future: other configs]
```

## 📄 File Descriptions

### Root Level Files

#### `index.html`
- **Size**: ~12 KB
- **Purpose**: Main HTML document
- **Structure**:
  - `<head>`: Meta tags, fonts, stylesheets, configuration
  - `<body>`: Navigation, main content, footer
- **Sections**: Hero, About, Programs, Services, Why Choose, CTA, Contact
- **Dependencies**: Tailwind CDN, Material Symbols, Google Fonts
- **External Scripts**: tailwind-config.js, script.js

### CSS Directory

#### `css/styles.css`
- **Size**: ~3 KB
- **Sections**:
  1. **Material Icons** - Icon font configuration
  2. **Utilities** - Decorative classes (gradient, glass-card, etc.)
  3. **Animations** - @keyframes (float, fadeInUp, etc.)
  4. **Section Styles** - Component-specific styles
  5. **Button Styles** - `.btn`, `.btn-primary`, `.btn-secondary`
  6. **Navigation** - `.nav-link` and menu styling
  7. **Responsive** - Mobile and desktop utilities
  8. **Accessibility** - Reduced motion, focus states
  9. **Print** - Print-friendly styles

### JavaScript Directory

#### `js/tailwind-config.js`
- **Size**: ~4 KB
- **Purpose**: Tailwind CSS configuration
- **Exports**: `tailwind.config` object
- **Customizations**:
  - 50+ custom colors
  - 8 typography scales
  - Custom spacing system
  - Border radius values
  - Font families and sizes

#### `js/script.js`
- **Size**: ~6 KB
- **Architecture**: Module Pattern (Revealing Module Pattern)
- **Modules**:
  ```javascript
  Navigation    // Menu, smooth scroll
  ├── setupSmoothScroll()
  ├── setupMobileMenu()
  ├── toggleMobileMenu()
  └── closeMobileMenu()
  
  Animations    // Scroll effects
  ├── setupIntersectionObserver()
  ├── init()
  
  Forms         // CTA interactions
  ├── setupCtaButtons()
  ├── handleBookingClick()
  └── handleWhatsAppClick()
  
  Utils         // Performance & logging
  ├── setupPerformanceObserver()
  ├── logPageInfo()
  
  App           // Application initialization
  └── init()
  ```

### Assets Directory

#### `assets/images/`
- **Purpose**: Store all image files
- **Subdirectories**:
  - `hero/`: Hero section image (profile photo)
  - `team/`: Team member photos
  - `gallery/`: Testimonials, class photos
  - `logos/`: Brand assets (future)

#### `assets/icons/`
- **Purpose**: Custom SVG icons and icon assets
- **Subdirectories**:
  - `social/`: LinkedIn, Facebook, Instagram, WhatsApp
  - `features/`: Education, verification, etc.
  - `common/`: Navigation icons, close, etc.

#### `assets/fonts/`
- **Purpose**: Self-hosted font files (for offline use)
- **Note**: Currently using Google Fonts CDN

### Config Directory

#### `config/analytics.js`
- **Purpose**: Analytics and tracking setup
- **Exports**: Configuration objects for:
  - Google Analytics
  - Hotjar
  - Email services
  - Booking services
  - Feature flags

#### `config/theme.js`
- **Purpose**: Design system constants
- **Exports**: Centralized design tokens:
  - Colors (primary, secondary, semantic)
  - Typography (families, sizes, weights)
  - Spacing scale
  - Border radius
  - Shadows
  - Breakpoints
  - Z-index scale
  - Transitions

## 🔄 Data Flow

```
index.html
    ↓
[CDN: Tailwind, Fonts, Icons]
    ↓
css/styles.css
    ↓
js/tailwind-config.js (applied to Tailwind)
    ↓
js/script.js (DOM manipulation & interactions)
    ↓
Browser renders optimized UI
```

## 🔗 Dependency Graph

```
index.html
├── CDN: Tailwind CSS
│   └── Applies Tailwind utilities
│
├── Google Fonts
│   ├── Playfair Display
│   └── Manrope
│
├── Material Symbols
│   └── Provides icon fonts
│
├── js/tailwind-config.js
│   └── Extends Tailwind theme
│
├── css/styles.css
│   └── Custom animations & utilities
│
└── js/script.js
    ├── Requires: DOM is loaded
    ├── Uses: Navigation, Animations, Forms
    └── Calls: config/analytics.js (optional)
```

## 📊 File Statistics

| Directory | Files | Purpose | Total Size |
|-----------|-------|---------|------------|
| Root | 6 | Config & docs | ~50 KB |
| css/ | 1 | Styling | ~3 KB |
| js/ | 2 | Logic & config | ~10 KB |
| assets/ | 0 (empty) | Media & icons | ~1 MB (when filled) |
| config/ | 2 | Configuration | ~5 KB |
| **Total** | **11** | **Complete app** | **~70 KB (static)** |

## 🎯 Implementation Checklist

### Phase 1: Foundation ✅
- [x] HTML structure
- [x] CSS styling
- [x] JavaScript modules
- [x] Configuration files
- [x] Documentation

### Phase 2: Enhancements (Future)
- [ ] Blog section
- [ ] Testimonials slider
- [ ] Booking system
- [ ] Newsletter signup
- [ ] Dark mode
- [ ] Analytics integration

### Phase 3: Optimization (Future)
- [ ] Image optimization
- [ ] CSS minification
- [ ] JavaScript bundling
- [ ] Performance monitoring
- [ ] SEO optimization

### Phase 4: Maintenance (Ongoing)
- [ ] Browser testing
- [ ] Link verification
- [ ] Content updates
- [ ] Security patches
- [ ] Performance monitoring

## 🚀 Scaling Guidelines

### Adding New Features

**1. New Section Template**
```
1. Add HTML to index.html
   └── Use semantic tags, follow naming convention
   
2. Add CSS to css/styles.css
   └── Prefix classes with section name
   
3. Add JavaScript to js/script.js
   └── Create new module if complex
   
4. Add assets to assets/
   └── Organize in appropriate subdirectory
   
5. Update documentation
   └── Add to README.md
```

**2. New Configuration**
```
1. Create config/feature.js
2. Export configuration object
3. Import in js/script.js
4. Document in DEVELOPMENT.md
```

**3. New Styling Theme**
```
1. Add colors to config/theme.js
2. Use in css/styles.css
3. Test across breakpoints
4. Update design documentation
```

## 🔒 Security Considerations

### Frontend Security
- No secrets in client-side code
- Validate user input
- Use HTTPS in production
- Content Security Policy header
- Keep dependencies updated

### File Organization
- Never commit sensitive data
- Use environment variables for secrets
- Secure external API calls
- Validate external content

## 📱 Responsive Structure

The project uses a **mobile-first approach**:
- Base styles for mobile (320px+)
- `md:` prefix for tablet (768px+)
- No prefix for max-width containers (1280px max)
- Flexible grid layouts with CSS Grid

## ✨ Code Quality Standards

- **HTML**: Semantic, accessible, valid
- **CSS**: DRY, organized, performant
- **JavaScript**: Modular, efficient, documented
- **Documentation**: Comprehensive, up-to-date
- **Performance**: Optimized, fast-loading
- **Accessibility**: WCAG 2.1 AA compliant

---

**For detailed implementation guidance, see DEVELOPMENT.md**
**For project overview, see README.md**
