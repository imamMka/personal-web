# Implementation Examples - Multilingual Pages

## How to Update Remaining Pages

Mari kita lihat contoh lengkap untuk mengupdate halaman `about`, `project`, dan `contact` dengan multilingual support.

---

## 1. About Page (app/about/page.jsx)

### Step 1: Add Translations ke i18n.js

```javascript
// In app/lib/i18n.js - add to translations.en and translations.id

en: {
  about: {
    title: "Architecting Digital Excellence",
    subtitle: "Bridging the gap between creative design and robust technical architecture.",
    // ... add more as needed
  },
}

id: {
  about: {
    title: "Merancang Keunggulan Digital",
    subtitle: "Menjembatani kesenjangan antara desain kreatif dan arsitektur teknis yang kokoh.",
    // ... add more as needed
  },
}
```

### Step 2: Update Component

```jsx
"use client";

import { motion } from "framer-motion";
import { NeumorphismButton3 } from "@/app/components/button.jsx";
import WhatsAppButton from "../components/WhatsAppButton";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <main className="bg-[#ffffff] h-fit pb-[90px]">
      <section className="flex flex-col justify-center items-center pt-[120px] lg:pt-[160px] px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:w-[1179px]">
          <div className="flex flex-1 flex-col gap-[20px] order-2 lg:order-none drop-shadow-amber-500 pb-[40px]">
            <div className="flex flex-col gap-[20px] mb-[30px] max-w-[500px]">
              <motion.h1
                initial={{ opacity: 0, translateY: 50 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                className="lg:text-[64px] md:text-[48px] text-[32px] lg:text-start text-center font-[700] leading-tight"
              >
                {t("about.title")}
              </motion.h1>
              {/* ... rest of component ... */}
              <motion.p
                initial={{ opacity: 0, translateY: 50 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                className="lg:text-[18px] lg:text-start text-center text-[15px] w-full text-gray-600"
              >
                {t("about.subtitle")}
              </motion.p>
            </div>
          </div>
          {/* ... rest of component ... */}
        </div>
      </section>
    </main>
  );
}
```

---

## 2. Project Page (app/project/page.jsx)

### Step 1: Add Translations

```javascript
// In app/lib/i18n.js

en: {
  project: {
    title: "My Projects",
    subtitle: "Case studies of my fullstack development work",
    viewProject: "View Project",
    technologies: "Technologies",
    duration: "Duration",
    year: "Year",
    // Add more as needed
  },
}

id: {
  project: {
    title: "Proyek Saya",
    subtitle: "Studi kasus pekerjaan pengembangan fullstack saya",
    viewProject: "Lihat Proyek",
    technologies: "Teknologi",
    duration: "Durasi",
    year: "Tahun",
    // Add more as needed
  },
}
```

### Step 2: Update Component

```jsx
"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function Project() {
  const { t } = useLanguage();

  return (
    <main className="bg-[#ffffff] h-fit pb-[90px]">
      <section className="flex flex-col justify-center items-center pt-[120px]">
        <h1 className="text-[48px] font-[700]">{t("project.title")}</h1>
        <p className="text-[18px] text-gray-600">{t("project.subtitle")}</p>

        {/* Project cards can use dynamic translations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Your project cards here */}
          <div>
            <h3>{t("project.technologies")}</h3>
            {/* ... */}
          </div>
        </div>
      </section>
    </main>
  );
}
```

---

## 3. Contact Page (app/contact/page.jsx)

### Step 1: Add Translations

```javascript
// In app/lib/i18n.js

en: {
  contact: {
    title: "Get in Touch",
    subtitle: "Have a project in mind? Let's work together!",
    formName: "Your Name",
    formEmail: "Your Email",
    formMessage: "Your Message",
    sendButton: "Send Message",
    successMessage: "Message sent successfully!",
    errorMessage: "Failed to send message. Please try again.",
    contactInfo: "Contact Information",
    location: "Location",
    phone: "Phone",
    email: "Email",
  },
}

id: {
  contact: {
    title: "Hubungi Saya",
    subtitle: "Punya proyek dalam pikiran? Mari kita bekerja sama!",
    formName: "Nama Anda",
    formEmail: "Email Anda",
    formMessage: "Pesan Anda",
    sendButton: "Kirim Pesan",
    successMessage: "Pesan berhasil dikirim!",
    errorMessage: "Gagal mengirim pesan. Silakan coba lagi.",
    contactInfo: "Informasi Kontak",
    location: "Lokasi",
    phone: "Telepon",
    email: "Email",
  },
}
```

### Step 2: Update Component

```jsx
"use client";

import { motion } from "framer-motion";
import { NeumorphismButton3 } from "@/app/components/button.jsx";
import { toast } from "react-toastify";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/app/context/LanguageContext";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();
  const { t } = useLanguage();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          toast.success(t("contact.successMessage"));
          form.current.reset();
        },
        (error) => {
          toast.error(t("contact.errorMessage"));
        },
      );
  };

  return (
    <section className="bg-[#ffffff] h-fit pt-30 pb-[90px]">
      <div className="flex flex-col lg:flex-row justify-evenly items-start px-5 lg:px-[140px] gap-10">
        <div className="flex flex-col gap-5 justify-center items-center lg:items-start">
          <motion.h1 className="text-[48px] font-[700]">
            {t("contact.title")}
          </motion.h1>

          <div className="flex flex-col gap-3">
            <h3>{t("contact.contactInfo")}</h3>
            <p>{t("contact.location")}: South Jakarta</p>
            <p>{t("contact.phone")}: (+62) 812-1911-8993</p>
            <p>{t("contact.email")}: imammka23@gmail.com</p>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="w-full lg:w-1/2">
          <div className="mb-4">
            <input
              type="text"
              name="user_name"
              placeholder={t("contact.formName")}
              className="w-full p-3 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="user_email"
              placeholder={t("contact.formEmail")}
              className="w-full p-3 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <textarea
              name="message"
              placeholder={t("contact.formMessage")}
              rows="5"
              className="w-full p-3 border rounded"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded"
          >
            {t("contact.sendButton")}
          </button>
        </form>
      </div>
    </section>
  );
}
```

---

## Best Practices When Translating

1. **Keep Keys Organized**: Group related translations by feature/page

   ```javascript
   contact: {
     title: "...",
     subtitle: "...",
     form: { ... },
     info: { ... }
   }
   ```

2. **Use Descriptive Names**: Don't use generic names

   ```javascript
   // Good
   contactForm: { inputName: "Your Name" }

   // Bad
   cf: { in: "Name" }
   ```

3. **Test Both Languages**: Always verify translations work in both EN and ID

4. **Keep Consistency**: Similar UI elements should have similar translations

   ```javascript
   // Good
   buttons: {
     send: "Send",
     submit: "Submit",
     cancel: "Cancel"
   }
   ```

5. **Handle Dynamic Content**: Use template strings for dynamic values
   ```javascript
   // For dynamic content like years or numbers
   const currentYear = new Date().getFullYear();
   const text = `© ${currentYear} ${t("company.name")}`;
   ```

---

## Checklist for Translation Implementation

- [ ] Add all text strings to i18n.js in both EN and ID
- [ ] Import `useLanguage` hook in component
- [ ] Replace hardcoded strings with `t("key")` calls
- [ ] Test component in both languages
- [ ] Verify layout doesn't break with longer translations
- [ ] Check mobile responsiveness
- [ ] Verify translations in browser console if needed

---

## Common Gotchas

### ❌ Don't Do This

```jsx
// Missing import
export default function Page() {
  return <h1>{t("key")}</h1>; // Error: t is not defined
}
```

### ✅ Do This

```jsx
import { useLanguage } from "@/app/context/LanguageContext";

export default function Page() {
  const { t } = useLanguage();
  return <h1>{t("key")}</h1>; // Works!
}
```

### ❌ Don't Do This

```jsx
// Try to use hook in server component
export default function Page() {
  // Not "use client"
  const { t } = useLanguage();
  return <h1>{t("key")}</h1>;
}
```

### ✅ Do This

```jsx
"use client"; // Add this directive

import { useLanguage } from "@/app/context/LanguageContext";

export default function Page() {
  const { t } = useLanguage();
  return <h1>{t("key")}</h1>; // Works!
}
```
