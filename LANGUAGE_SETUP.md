# 🌐 Multilingual Setup Documentation

## Overview

Fitur multilingual telah diimplementasikan dengan auto-detect geolocation dan manual language switcher. Sistem akan otomatis mendeteksi lokasi pengguna dan mengatur bahasa sesuai region:

- **Indonesia**: Bahasa Indonesia (ID)
- **Selain Indonesia**: English (EN)

## Features

✅ Auto-detect geolocation (Jika user mengizinkan akses lokasi)
✅ Manual language switcher (Button di navbar)
✅ Persistent language preference (Tersimpan di localStorage)
✅ Smooth language switching tanpa page reload
✅ Support untuk multiple languages (Mudah untuk menambah bahasa baru)

## Architecture

### File Structure

```
app/
├── lib/
│   └── i18n.js                 # Translation data & helper functions
├── context/
│   └── LanguageContext.jsx      # Language state management
├── components/
│   ├── LanguageSwitcher.jsx     # Language selector button
│   ├── Navbar.jsx               # Updated with language switcher
│   └── Footer.jsx               # Updated with translations
├── layout.js                    # Wrapped with LanguageProvider
└── page.js                      # Uses translations via useLanguage hook
```

### How It Works

1. **Layout Initialization**: `app/layout.js` membungkus semua components dengan `LanguageProvider`
2. **Auto-Detection**: Ketika app pertama kali load, `LanguageContext` akan:
   - Cek localStorage untuk saved language preference
   - Jika tidak ada, cek browser language
   - Cek geolocation untuk menentukan bahasa default
3. **Manual Switch**: User dapat mengubah bahasa manual via `LanguageSwitcher` component
4. **State Management**: Language state disimpan di Context dan localStorage untuk persistency

## Usage

### Using Translations in Components

```jsx
"use client";
import { useLanguage } from "@/app/context/LanguageContext";

export default function MyComponent() {
  const { language, changeLanguage, t } = useLanguage();

  return (
    <div>
      <h1>{t("nav.home")}</h1>
      <p>Current language: {language}</p>
      <button onClick={() => changeLanguage("id")}>Indonesian</button>
      <button onClick={() => changeLanguage("en")}>English</button>
    </div>
  );
}
```

### Available Functions

```javascript
// Access language context
const { language, changeLanguage, t, isLoading } = useLanguage();

// language: Current language code ("en" or "id")
// changeLanguage(lang): Change language ("en" | "id")
// t(key): Get translation value
//   Example: t("nav.home") → returns "Home" or "Beranda"
// isLoading: Boolean indicating geolocation detection in progress
```

## Adding New Translations

### Step 1: Update `app/lib/i18n.js`

```javascript
export const translations = {
  en: {
    // existing translations...
    mySection: {
      title: "My Title",
      description: "My description",
    },
  },
  id: {
    // existing translations...
    mySection: {
      title: "Judul Saya",
      description: "Deskripsi saya",
    },
  },
};
```

### Step 2: Use in Component

```jsx
const { t } = useLanguage();

<h1>{t("mySection.title")}</h1>
<p>{t("mySection.description")}</p>
```

## Current Translations

### Navigation (`nav`)

- `nav.home`: Home / Beranda
- `nav.about`: About / Tentang
- `nav.project`: Project / Proyek
- `nav.contact`: Contact / Kontak

### Hero Section (`hero`)

- `hero.title`: Main heading
- `hero.subtitle`: Subheading
- `hero.cta`: Call-to-action button

### Services (`services`)

- `services.title`: "My Expertise" / "Keahlian Saya"
- `services.uiux`: UI/UX Design
- `services.webapp`: Web Application
- `services.backend`: Backend Development
- `services.database`: Database Architecture

### Footer (`footer`)

- `footer.copyright`: Copyright text
- `footer.support`: Support section title
- `footer.social`: Social section title
- `footer.contact`: Contact link text
- `footer.privacyPolicy`: Privacy policy link

## Geolocation Configuration

### Indonesia Bounds (Approximate)

- Latitude: -11° to 6°
- Longitude: 95° to 141°

Jika user berada dalam koordinat ini, bahasa akan otomatis diatur ke Indonesian.

### Privacy Note

Geolocation hanya diminta sekali saat pertama kali load. User dapat:

- **Allow**: Geolocation akan digunakan untuk auto-detect bahasa
- **Deny**: Bahasa akan mengikuti browser preference
- **Ignore**: Sistem akan cek localStorage untuk preference yang tersimpan

## Pages to Update (Optional)

Following pages dapat diupdate dengan translations:

- `app/about/page.jsx`
- `app/project/page.jsx`
- `app/contact/page.jsx`

Ikuti pola yang sama seperti `app/page.js`:

```jsx
"use client";
import { useLanguage } from "@/app/context/LanguageContext";

export default function PageName() {
  const { t } = useLanguage();

  return <h1>{t("sectionName.title")}</h1>;
}
```

## Language Switcher Component

Component `LanguageSwitcher.jsx` sudah terintegrasi di Navbar. Features:

- 🇬🇧 English
- 🇮🇩 Indonesian
- Dropdown menu dengan visual indicator untuk current language
- Responsive untuk mobile dan desktop

## localStorage Keys

- `language`: Menyimpan pilihan bahasa user ("en" atau "id")
- `geoLocationHandled`: Flag untuk mencegah request geolocation yang berulang

## Troubleshooting

### Translations Not Showing

1. Pastikan key sudah ditambahkan di `app/lib/i18n.js`
2. Pastikan format key correct: `namespace.key`
3. Check console untuk error messages

### Geolocation Not Working

1. Pastikan browser mengizinkan geolocation
2. Check if HTTPS is being used (geolocation requires secure context)
3. Geolocation akan timeout setelah 10 detik, fallback ke browser preference

### Language Not Persisting

1. Pastikan localStorage tidak disabled
2. Check browser console untuk errors
3. Clear localStorage dan refresh page

## Best Practices

1. **Always use `useLanguage()` hook** untuk akses translations di client components
2. **Add all text strings ke translations** untuk memastikan full multilingual support
3. **Use meaningful key names** yang descriptive (e.g., `nav.home` bukan `n1`)
4. **Test both languages** saat membuat feature baru
5. **Group related translations** dalam namespace (e.g., `services.uiux`, `services.webapp`)

## Future Enhancements

- [ ] Tambah lebih banyak bahasa (Mandarin, Japanese, etc.)
- [ ] Reverse detection untuk auto-detect bahasa dari IP (server-side)
- [ ] RTL support untuk bahasa yang require right-to-left (Arabic, Hebrew)
- [ ] Language preference di user profile/account
- [ ] Analytics untuk tracking language usage
