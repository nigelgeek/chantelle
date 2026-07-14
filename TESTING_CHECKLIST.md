# Developer Checklist & QA Guide

Quick reference checklist for development, testing, and deployment.

## ✅ Pre-Development Checklist

### Setup
- [ ] Clone/download project
- [ ] Open in preferred editor (VS Code recommended)
- [ ] Start development server (`python -m http.server 8000`)
- [ ] Open browser to `http://localhost:8000`
- [ ] Open DevTools (F12) to check console

### Environment
- [ ] Node.js installed (v14+) if using npm
- [ ] Python installed if using Python server
- [ ] Git configured (if using version control)
- [ ] Editor extensions installed:
  - Tailwind CSS IntelliSense
  - HTML Formatter
  - Prettier (optional)

## 🔧 Development Checklist

### Before Starting
- [ ] Create feature branch: `git checkout -b feature/name`
- [ ] Read DEVELOPMENT.md for guidelines
- [ ] Check PROJECT_STRUCTURE.md for file locations
- [ ] Review existing similar code as reference

### While Coding
- [ ] Follow naming conventions
- [ ] Use semantic HTML elements
- [ ] Apply Tailwind utilities first
- [ ] Add comments for complex logic
- [ ] Keep files organized
- [ ] Test frequently (Ctrl+Shift+R hard refresh)

### HTML Changes
- [ ] Validate HTML structure
- [ ] Add proper semantic tags
- [ ] Include alt text for images
- [ ] Add aria-label for interactive elements
- [ ] Use proper heading hierarchy
- [ ] Check for broken links

### CSS Changes
- [ ] Use Tailwind utilities when possible
- [ ] Avoid !important
- [ ] Test on mobile (320px, 375px)
- [ ] Test on tablet (768px)
- [ ] Test on desktop (1920px+)
- [ ] Check color contrast
- [ ] Verify animations performance

### JavaScript Changes
- [ ] Use module pattern for organization
- [ ] Add error handling
- [ ] Test in console (F12)
- [ ] Check for memory leaks
- [ ] Validate browser compatibility
- [ ] Add comments for complex functions

## 🧪 Testing Checklist

### Functionality Testing
- [ ] Navigation menu works
- [ ] Smooth scrolling functions
- [ ] All links are clickable
- [ ] Buttons respond to clicks
- [ ] Mobile menu toggles open/close
- [ ] Forms can be submitted
- [ ] No console errors (F12 → Console)
- [ ] No console warnings (F12 → Console)

### Responsiveness Testing

#### Mobile (320px - 480px)
- [ ] Layout is single column
- [ ] Text is readable
- [ ] Buttons are touch-friendly (>48px)
- [ ] Images scale correctly
- [ ] Navigation is hamburger menu
- [ ] No horizontal scrolling

#### Tablet (768px - 1024px)
- [ ] Two-column layout works
- [ ] Cards are properly sized
- [ ] Navigation is visible
- [ ] Spacing is balanced
- [ ] Images are sized appropriately

#### Desktop (1920px+)
- [ ] Max-width constraints applied
- [ ] Full navigation visible
- [ ] Multi-column layouts work
- [ ] Hover effects present
- [ ] Spacing is generous

### Browser Compatibility

#### Chrome/Edge (Latest)
- [ ] All features work
- [ ] Styling correct
- [ ] Performance good

#### Firefox (Latest)
- [ ] All features work
- [ ] Styling correct
- [ ] Layout unchanged

#### Safari (Latest)
- [ ] All features work
- [ ] Styling correct
- [ ] Webkit prefixes if needed

#### Mobile Browsers
- [ ] iOS Safari works
- [ ] Android Chrome works
- [ ] Touch interactions work

### Performance Testing

#### Lighthouse Audit
- [ ] Performance > 90
- [ ] Accessibility > 95
- [ ] Best Practices > 90
- [ ] SEO > 90

#### Page Load
- [ ] Page loads in < 3 seconds
- [ ] First Contentful Paint < 2s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1

#### Network
- [ ] Test on slow 3G
- [ ] Test on offline
- [ ] Monitor network tab (F12 → Network)
- [ ] Check for 404 errors

### Accessibility Testing

#### Keyboard Navigation
- [ ] Tab order makes sense
- [ ] Tab focus is visible
- [ ] Can activate buttons with Enter
- [ ] Can use links with Enter
- [ ] Menu closes on Escape

#### Screen Reader (Use NVDA or JAWS)
- [ ] Page title is descriptive
- [ ] Headings are properly nested
- [ ] Form labels are associated
- [ ] Images have alt text
- [ ] Links have descriptive text
- [ ] Button purposes are clear

#### Color & Contrast
- [ ] Text contrast 4.5:1 (normal)
- [ ] Text contrast 3:1 (large)
- [ ] Color not only indicator
- [ ] Works in high contrast mode
- [ ] Links distinguished from text

#### Visual Clarity
- [ ] Font size >= 12px
- [ ] Line spacing >= 1.4
- [ ] No auto-playing media
- [ ] Animations don't distract
- [ ] Focus indicators visible

## 📝 Code Quality Checklist

### HTML Quality
- [ ] Valid HTML (W3C validator)
- [ ] Semantic tags used
- [ ] No deprecated elements
- [ ] Proper nesting
- [ ] Consistent indentation
- [ ] Meaningful class names
- [ ] No inline styles
- [ ] Accessibility attributes present

### CSS Quality
- [ ] No unused CSS
- [ ] Consistent naming
- [ ] BEM naming where applicable
- [ ] Responsive design working
- [ ] No magic numbers
- [ ] Logical organization
- [ ] Comments for complex rules
- [ ] No vendor prefixes needed

### JavaScript Quality
- [ ] No console errors
- [ ] No console warnings
- [ ] Meaningful variable names
- [ ] Functions do one thing
- [ ] No global variables
- [ ] Proper error handling
- [ ] Comments for complex logic
- [ ] Performance optimized

### Documentation Quality
- [ ] README.md updated
- [ ] Code comments present
- [ ] Examples provided
- [ ] Setup instructions clear
- [ ] API documented
- [ ] Known issues listed

## 📊 Security Checklist

### Data Security
- [ ] No sensitive data in code
- [ ] API keys not exposed
- [ ] Passwords not in commits
- [ ] No hardcoded credentials
- [ ] .env file in .gitignore
- [ ] Security headers configured

### Code Security
- [ ] Input validated
- [ ] Output encoded
- [ ] XSS prevention
- [ ] CSRF protection (if applicable)
- [ ] SQL injection protection (if applicable)
- [ ] Dependencies up-to-date

## 🚀 Deployment Checklist

### Pre-Deployment
- [ ] All tests passing
- [ ] Code reviewed
- [ ] Lighthouse score > 90
- [ ] No console errors
- [ ] No console warnings
- [ ] Performance acceptable

### Deployment Steps
- [ ] Build artifacts created
- [ ] Environment variables set
- [ ] Database migrations run (if applicable)
- [ ] Assets deployed
- [ ] SSL/HTTPS configured
- [ ] Domain configured
- [ ] DNS propagated
- [ ] Monitoring enabled

### Post-Deployment
- [ ] Smoke test production
- [ ] Verify all features
- [ ] Check analytics
- [ ] Monitor errors
- [ ] Verify performance
- [ ] Check security headers
- [ ] Test on mobile

## 📚 Testing Tools

### Browser DevTools
- **Chrome DevTools**: F12
  - Elements tab: Inspect HTML/CSS
  - Console tab: Check errors
  - Network tab: Monitor requests
  - Performance tab: Profile code
  - Lighthouse tab: Audit

### Online Validators
- [W3C HTML Validator](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- [Lighthouse](https://pagespeed.web.dev/)

### Accessibility Tools
- [WAVE](https://wave.webaim.org/extension/)
- [Axe DevTools](https://www.deque.com/axe/devtools/)
- [NVDA Screen Reader](https://www.nvaccess.org/)

### Performance Tools
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)
- [Chrome DevTools Lighthouse](https://developers.google.com/web/tools/lighthouse)

### Security Tools
- [SecurityHeaders.com](https://securityheaders.com/)
- [OWASP ZAP](https://www.zaproxy.org/)
- [npm audit](https://docs.npmjs.com/cli/v6/commands/npm-audit)

## 🐛 Debugging Guide

### Common Issues

#### Page Won't Load
1. Check browser console (F12)
2. Check network tab (F12 → Network)
3. Verify file paths are correct
4. Ensure server is running
5. Hard refresh (Ctrl+Shift+R)

#### Styling Not Applied
1. Hard refresh (Ctrl+Shift+R)
2. Check CSS file is linked
3. Verify class names match
4. Check cascade/specificity
5. Disable browser extensions
6. Clear browser cache

#### JavaScript Not Working
1. Open console (F12)
2. Read error message carefully
3. Check file is linked
4. Verify DOM elements exist
5. Check browser compatibility
6. Test in different browser

#### Mobile Issues
1. Test in DevTools device mode
2. Check viewport meta tag
3. Verify responsive CSS
4. Test on actual device
5. Check touch interactions

### Debug Commands (Console)
```javascript
// Check if element exists
document.getElementById('id')

// Check class applied
document.querySelector('.class')

// Inspect computed styles
getComputedStyle(element)

// Check event listeners
getEventListeners(element)

// Monitor performance
performance.now()
```

## ✨ Final Checks Before Commit

- [ ] Code passes all tests
- [ ] Linter passes (if configured)
- [ ] No console errors/warnings
- [ ] Responsive design verified
- [ ] Cross-browser tested
- [ ] Performance acceptable
- [ ] Accessibility verified
- [ ] Security reviewed
- [ ] Documentation updated
- [ ] Commit message clear
- [ ] Branch name follows convention

---

**For detailed guidance, see DEVELOPMENT.md or PROJECT_STRUCTURE.md**
