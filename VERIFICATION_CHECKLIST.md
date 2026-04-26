# ✅ Multilingual Setup Verification Checklist

## Pre-Testing Checks

Sebelum test di browser, pastikan semua file sudah benar:

### 1. File Existence Check

```bash
# Cek apakah semua file baru sudah ada:
ls -la app/lib/i18n.js                    # Should exist
ls -la app/context/LanguageContext.jsx    # Should exist
ls -la app/components/LanguageSwitcher.jsx # Should exist
ls -la LANGUAGE_SETUP.md                  # Should exist
ls -la IMPLEMENTATION_EXAMPLES.md         # Should exist
```

### 2. Import Verification

Pastikan imports di modified files sudah benar:

**app/layout.js** - Check:

```javascript
import { LanguageProvider } from "./context/LanguageContext"; // ✓ Present
```

**app/components/Navbar.jsx** - Check:

```javascript
import LanguageSwitcher from "./LanguageSwitcher"; // ✓ Present
import { useLanguage } from "@/app/context/LanguageContext"; // ✓ Present
```

**app/components/Footer.jsx** - Check:

```javascript
import { useLanguage } from "@/app/context/LanguageContext"; // ✓ Present
```

**app/page.js** - Check:

```javascript
import { useLanguage } from "@/app/context/LanguageContext"; // ✓ Present
```

---

## Testing Steps

### Step 1: Start Dev Server

```bash
npm run dev
```

Expected output:

```
> next dev --turbopack
  ▲ Next.js 16.2.2
  - Local:        http://localhost:3000
  - Environments: .env.local

  ✓ Ready in 1.2s
```

### Step 2: Browser Console Check

Open browser DevTools (F12) and check Console tab:

```javascript
// Should NOT have errors about:
// - "useLanguage is not exported from LanguageContext"
// - "LanguageProvider is not defined"
// - "Cannot find module 'LanguageSwitcher'"
```

### Step 3: Visual Check - Navbar

✓ Navbar loads without errors
✓ Language switcher button appears (with flag icon 🇬🇧)
✓ Hamburger menu works on mobile
✓ Navigation links display correctly (Home, About, Project, Contact)

### Step 4: Language Switcher Test

1. Click flag button in navbar
   - ✓ Dropdown menu appears
   - ✓ Shows "English" and "Bahasa Indonesia" options
   - ✓ Current language has checkmark (✓)

2. Select different language
   - ✓ Entire page updates without refresh
   - ✓ Navbar text changes (Home → Beranda, etc.)
   - ✓ Footer text changes
   - ✓ Hero section title changes

3. Refresh page
   - ✓ Language stays the same (from localStorage)

### Step 5: Geolocation Test

**First Time Visit:**

1. Open app in new incognito/private window
2. Browser should ask for location permission
3. Two options:
   - **Allow**:
     - ✓ Auto-detect bahasa based on location
     - ✓ If in Indonesia → Bahasa Indonesia
     - ✓ If outside → English
   - **Block/Deny**:
     - ✓ Fallback ke browser language
     - ✓ Usually English

**Subsequent Visits:**

1. localStorage should have saved `language` preference
2. Geolocation should NOT ask again
3. Page loads with saved language

### Step 6: Console Debugging

Open browser console and check these:

```javascript
// Check localStorage
localStorage.getItem("language"); // Should return "en" or "id"
localStorage.getItem("geoLocationHandled"); // Should return "true"

// Check language context is working
console.log("Language state exists"); // Should log if useLanguage is working
```

### Step 7: Mobile Responsive Check

Test on mobile or use DevTools device emulation:

✓ Language switcher button is visible
✓ Button is clickable on mobile
✓ Dropdown menu responsive
✓ Text doesn't overflow
✓ Layout still works

---

## Expected Results Summary

### Home Page (English)

- Title: "Fullstack Developer & UI/UX Designer"
- Services: "My Expertise", "UI/UX Design", "Web App Development", etc.
- Footer: "© 2025 Imam Muttaqin. All rights reserved."

### Home Page (Indonesian)

- Title: "Developer Fullstack & Designer UI/UX"
- Services: "Keahlian Saya", "Desain UI/UX", "Aplikasi Web", etc.
- Footer: "© 2025 Imam Muttaqin. Semua hak dilindungi."

### Navbar (Both Languages)

- Flag icon in top-right
- Clickable dropdown
- Language options with flags
- Current language marked with checkmark

---

## Common Issues & Solutions

### Issue: "Cannot find module" error

**Cause:** Import path typo
**Solution:** Check import paths use `@/app/...` format exactly

```javascript
// ✓ Correct
import { useLanguage } from "@/app/context/LanguageContext";

// ✗ Wrong
import { useLanguage } from "./context/LanguageContext";
import { useLanguage } from "../../context/LanguageContext";
```

### Issue: Language switcher button not appearing

**Cause:** Component not properly exported or imported
**Solution:**

1. Check `app/components/LanguageSwitcher.jsx` exists
2. Check Navbar.jsx has: `import LanguageSwitcher from "./LanguageSwitcher";`
3. Check LanguageSwitcher is added in JSX: `<LanguageSwitcher />`

### Issue: Translations showing as keys (e.g., "nav.home" instead of "Home")

**Cause:** Key doesn't exist in translations object
**Solution:**

1. Check key spelling exactly matches i18n.js
2. Check key exists in BOTH en and id objects
3. Verify dot notation: `namespace.key` not `namespace-key` or `namespace_key`

### Issue: Language doesn't persist after refresh

**Cause:** localStorage not working
**Solution:**

1. Check browser allows localStorage (not in private mode with strict settings)
2. Check browser console for errors: `localStorage.setItem(...)`
3. Clear localStorage and try again: `localStorage.clear()`

### Issue: Geolocation never triggers

**Cause:** Browser privacy settings
**Solution:**

1. Ensure HTTPS (localhost okay for dev, but production needs HTTPS)
2. Check browser permissions for geolocation
3. Try different browser (Firefox, Chrome, Edge, Safari)
4. Check console for geolocation errors

---

## Performance Check

### Lighthouse Check (Optional)

```bash
# Run Lighthouse audit
npm run build
npm run start
# Then use Chrome DevTools Lighthouse tab
```

Expected:

- ✓ Page loads quickly
- ✓ Language switch is smooth
- ✓ No console errors

### Bundle Size Check

```bash
npm run build
# Check output - should show bundle size
```

Expected:

- ✓ Minimal size impact from i18n code
- ✓ LanguageContext is small addition (~5KB)
- ✓ No unused dependencies

---

## Final Verification

- [ ] npm run dev starts without errors
- [ ] Website loads at http://localhost:3000
- [ ] Language switcher button visible in navbar
- [ ] Can switch between EN and ID
- [ ] Text updates immediately without refresh
- [ ] Refresh page - language preference persists
- [ ] Mobile view works correctly
- [ ] No console errors or warnings
- [ ] Geolocation prompt appears on first visit (optional)

---

## Deployment Checklist

Before deploying to production:

- [ ] All pages tested in both EN and ID
- [ ] Mobile responsive on all pages
- [ ] Geolocation permissions working
- [ ] No console errors in production build
- [ ] Translations complete (no missing keys)
- [ ] localStorage working correctly
- [ ] Build succeeds: `npm run build`
- [ ] No broken links
- [ ] images and assets load correctly

---

## Quick Commands Reference

```bash
# Development
npm run dev                 # Start dev server

# Building
npm run build              # Build for production
npm start                  # Run production build locally

# Linting (if configured)
npm run lint              # Check code issues

# Clear cache if issues
rm -rf .next             # Remove Next.js cache
npm cache clean --force  # Clear npm cache

# Then try: npm run dev again
```

---

## Getting Help

If something doesn't work:

1. **Check console errors** (F12 → Console tab)
2. **Read the error message carefully**
3. **Compare your code with examples** in IMPLEMENTATION_EXAMPLES.md
4. **Check file locations** are exact
5. **Verify imports** use `@/app/...` format
6. **Look at modified files** and compare with originals

---

## Success Indicators ✨

✓ Website loads without errors
✓ Language switcher appears in navbar
✓ Can switch languages instantly
✓ Text changes immediately
✓ Language preference saves
✓ Mobile friendly
✓ No console errors
✓ All pages work in both languages

---

**If all checks pass → Congratulations! 🎉 Your multilingual setup is working perfectly!**

Now you can:

- Translate remaining pages (see IMPLEMENTATION_EXAMPLES.md)
- Add more languages (add to translations object)
- Deploy to production
- Monitor user language preferences

Good luck! 🚀
