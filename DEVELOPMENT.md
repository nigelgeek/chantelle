# Development Configuration

## Project Settings

### Development Server
- **Port**: 8000
- **URL**: http://localhost:8000
- **Enable Gzip**: Yes
- **Watch Mode**: Enabled

### Code Style

#### HTML
- Use semantic HTML5 elements
- Proper indentation (2 spaces)
- Clear comments for sections
- Accessibility attributes (aria-*, alt, role)

#### CSS
- Organize by feature/component
- Use Tailwind utilities when possible
- Custom classes prefixed with context (e.g., `.hero-*`)
- Comment complex selectors
- Mobile-first approach

#### JavaScript
- ES6+ syntax
- Module pattern for organization
- Meaningful variable names
- Comments for complex logic
- Use const/let, avoid var
- Arrow functions for callbacks

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Performance Targets
- First Contentful Paint: < 2s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Lighthouse Score: > 90

### Accessibility Standards
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader optimization
- Color contrast ratio: 4.5:1 (text)

### Testing Checklist

#### Functionality
- [ ] All links work correctly
- [ ] Smooth scrolling functions
- [ ] Mobile menu toggles
- [ ] Form submissions work
- [ ] External links open correctly

#### Responsiveness
- [ ] Mobile (320px, 375px, 425px)
- [ ] Tablet (768px, 1024px)
- [ ] Desktop (1920px+)
- [ ] Touch interactions work
- [ ] Images scale properly

#### Performance
- [ ] Images optimized
- [ ] CSS is minified
- [ ] JavaScript is optimized
- [ ] No console errors
- [ ] Page loads in < 3s

#### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Color contrast sufficient
- [ ] Form labels present
- [ ] alt text on images

### Browser DevTools Tips
- Use Lighthouse for audits
- Test with screen readers (NVDA, JAWS)
- Simulate slow network (3G)
- Check mobile viewport sizes
- Validate HTML/CSS

### Common Tasks

#### Add New Section
```html
<!-- Follow this template -->
<section class="py-xl bg-[color]" id="section-id">
    <div class="max-w-7xl mx-auto px-6 md:px-margin-desktop">
        <!-- Content here -->
    </div>
</section>
```

#### Add New Button
```html
<button class="btn btn-primary">Action</button>
<!-- or -->
<button class="btn btn-outline">Action</button>
<!-- or -->
<button class="btn btn-secondary">Action</button>
```

#### Add New Animation
In `css/styles.css`:
```css
@keyframes newAnimation {
    from { /* start */ }
    to { /* end */ }
}

.new-animation {
    animation: newAnimation 0.6s ease-out;
}
```

### Debugging
1. Open DevTools (F12)
2. Check Console for errors
3. Check Network for failed resources
4. Use Lighthouse audit
5. Test with responsive design mode

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/feature-name

# Make changes and commit
git add .
git commit -m "feat: description of changes"

# Push to remote
git push origin feature/feature-name

# Create Pull Request
# Request review
```

### Deployment Checklist
- [ ] All tests pass
- [ ] No console errors
- [ ] Lighthouse score > 90
- [ ] Mobile responsive
- [ ] Links verified
- [ ] Analytics configured
- [ ] Meta tags updated
- [ ] Performance optimized

---

**For questions or clarifications, contact: frenchingupyourlife@gmail.com**
