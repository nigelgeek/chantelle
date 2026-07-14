# Quick Start Guide

Get up and running with the Frenching Up Your Life project in 5 minutes!

## 🚀 Installation

### Option 1: Using Python (Recommended)
```bash
# Navigate to project directory
cd "d:\Vibe Coding\French Up Your Life\Chantelle"

# Start development server
python -m http.server 8000

# Open browser to http://localhost:8000
```

### Option 2: Using Node.js
```bash
# Install dependencies (if needed)
npm install

# Start server
npm start

# Or use http-server directly
npx http-server -p 8000 --gzip
```

### Option 3: Direct Browser (Quick View)
Simply open `index.html` in your web browser.
- Note: Some features (smooth scroll) work best with a server

## 📁 Project Overview

```
Chantelle/
├── index.html              ← Main file (open this)
├── css/styles.css          ← Styling
├── js/script.js            ← Interactive features
└── README.md               ← Full documentation
```

## ✏️ Making Changes

### Edit Content (Text, Images)
1. Open `index.html` in your editor
2. Find the section you want to change
3. Edit the text or image URL
4. Save the file
5. Refresh browser to see changes

### Edit Styling
1. Open `css/styles.css`
2. Add or modify CSS rules
3. Save the file
4. Refresh browser (Ctrl+Shift+R for hard refresh)

### Edit Behavior (JavaScript)
1. Open `js/script.js`
2. Modify JavaScript in the appropriate module
3. Save the file
4. Refresh browser

## 🎨 Common Edits

### Change Hero Title
**File**: `index.html` (Line ~104)
```html
<h1>
    Frenching Up <br /> Your Child's <span class="text-secondary italic">Future</span>
</h1>
```

### Change Colors
**File**: `js/tailwind-config.js`
- Find `"primary": "#000e27"` and change to your color
- Find `"secondary": "#bc0003"` and change to your color

### Change Contact Number
**File**: `index.html` (Search for `055 014 8633`)
Replace with your phone number

### Add New Section
1. **Copy** an existing section in `index.html`
2. **Modify** the content
3. **Add** a unique `id` attribute
4. **Add** link in navigation menu
5. **Style** using Tailwind classes

## 📚 Key Classes (Tailwind)

### Colors
- `text-primary` - Dark navy text
- `text-secondary` - Red text
- `bg-primary` - Dark navy background
- `bg-secondary` - Red background

### Buttons
- `btn btn-primary` - Primary button
- `btn btn-secondary` - Secondary button
- `btn btn-outline` - Outline button

### Spacing
- `p-4` - Padding
- `m-4` - Margin
- `gap-4` - Gap between items

### Text
- `font-headline-lg` - Large heading
- `font-body-lg` - Large body text
- `font-label-md` - Small label

## 🧪 Testing Checklist

- [ ] Links work
- [ ] Buttons clickable
- [ ] Mobile responsive
- [ ] Images load
- [ ] No console errors (F12)

## 🔗 Useful Resources

### Official Documentation
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Material Symbols](https://fonts.google.com/icons)
- [Google Fonts](https://fonts.google.com)

### Development Tools
- [Color Picker](https://www.google.com/search?q=color+picker)
- [FontAwesome Icons](https://fontawesome.com/icons)
- [Unsplash Images](https://unsplash.com)
- [DevTools Docs](https://developer.chrome.com/docs/devtools/)

## 🆘 Troubleshooting

### Page Won't Load
- Check file paths are correct
- Ensure server is running
- Clear browser cache (Ctrl+Shift+Delete)
- Open DevTools (F12) and check Console

### Styling Not Updating
- Hard refresh (Ctrl+Shift+R)
- Check CSS file is linked in HTML
- Verify class names are correct

### JavaScript Not Working
- Check console for errors (F12)
- Verify script.js is linked in HTML
- Ensure HTML elements have correct IDs/classes

### Images Not Showing
- Check image file path
- Verify image file exists
- Check console for 404 errors
- Try with absolute URL (Ctrl+Click on broken image)

## 📞 Quick Contact Info

Edit these in `index.html`:
- **Phone**: `055 014 8633`
- **Email**: `frenchingupyourlife@gmail.com`
- **WhatsApp**: Configured in phone number

## 🚀 Next Steps

1. **Customize**
   - [ ] Update name and contact info
   - [ ] Add your profile photo
   - [ ] Write about you
   - [ ] List your services

2. **Optimize**
   - [ ] Compress images
   - [ ] Add meta descriptions
   - [ ] Test mobile view
   - [ ] Check performance (Lighthouse)

3. **Deploy**
   - [ ] Choose hosting (Netlify, Vercel, GitHub Pages)
   - [ ] Connect domain
   - [ ] Set up SSL/HTTPS
   - [ ] Configure email form

4. **Promote**
   - [ ] Add Google Analytics
   - [ ] Create social media posts
   - [ ] Share with network
   - [ ] Submit to directories

## 📖 Full Documentation

- See `README.md` for full project documentation
- See `DEVELOPMENT.md` for development guidelines
- See `PROJECT_STRUCTURE.md` for detailed architecture

## 💡 Pro Tips

1. **Use Keyboard Shortcuts**
   - F12: Open DevTools
   - Ctrl+K: Search (VS Code)
   - Ctrl+Shift+R: Hard refresh

2. **DevTools is Your Friend**
   - Inspect elements (right-click → Inspect)
   - Check console for errors
   - Use responsive design mode
   - Test different screen sizes

3. **Keep It Simple**
   - Don't over-engineer
   - Use Tailwind utilities
   - Avoid custom CSS when possible
   - Follow existing patterns

4. **Test Frequently**
   - After every major change
   - On mobile and desktop
   - In different browsers
   - Check performance

---

**Happy coding! For more help, check the full documentation in README.md**
