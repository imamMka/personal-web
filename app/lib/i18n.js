// Language translations
export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      project: "Project",
      contact: "Contact",
    },
    // Hero Section
    hero: {
      title: "Fullstack Developer & UI/UX Designer",
      subtitle: "Building end-to-end digital solutions with modern tech stack",
      cta: "Get Started",
    },
    // Services
    services: {
      title: "My Expertise",
      uiux: "UI/UX Design",
      webapp: "Web Application",
      backend: "Backend Development",
      database: "Database Architecture",
    },
    // Footer
    footer: {
      copyright: "© 2025 Imam Muttaqin. All rights reserved.",
      followMe: "Follow me on social media",
      support: "Support",
      social: "Social",
      contact: "Contact",
      privacyPolicy: "Privacy Policy",
    },
    // About Page (placeholder for future use)
    about: {
      title: "About Me",
      description: "I am a passionate fullstack developer...",
    },
    // Project Page (placeholder for future use)
    project: {
      title: "My Projects",
      description: "Case studies of my work...",
    },
    // Contact Page (placeholder for future use)
    contact: {
      title: "Get in Touch",
      description: "Feel free to reach out...",
    },
  },
  id: {
    // Navigation
    nav: {
      home: "Beranda",
      about: "Tentang",
      project: "Proyek",
      contact: "Kontak",
    },
    // Hero Section
    hero: {
      title: "Developer Fullstack & Designer UI/UX",
      subtitle: "Membangun solusi digital end-to-end dengan teknologi modern",
      cta: "Mulai Sekarang",
    },
    // Services
    services: {
      title: "Keahlian Saya",
      uiux: "Desain UI/UX",
      webapp: "Aplikasi Web",
      backend: "Pengembangan Backend",
      database: "Arsitektur Database",
    },
    // Footer
    footer: {
      copyright: "© 2025 Imam Muttaqin. Semua hak dilindungi.",
      followMe: "Ikuti saya di media sosial",
      support: "Dukungan",
      social: "Sosial",
      contact: "Kontak",
      privacyPolicy: "Kebijakan Privasi",
    },
    // About Page (placeholder for future use)
    about: {
      title: "Tentang Saya",
      description: "Saya adalah developer fullstack yang passionate...",
    },
    // Project Page (placeholder for future use)
    project: {
      title: "Proyek Saya",
      description: "Studi kasus dari pekerjaan saya...",
    },
    // Contact Page (placeholder for future use)
    contact: {
      title: "Hubungi Saya",
      description: "Jangan ragu untuk menghubungi...",
    },
  },
};

// Get language based on locale code
export const getLanguage = (locale) => {
  if (locale && locale.startsWith("id")) return "id";
  return "en";
};

// Check if location is in Indonesia
export const isIndonesiaLocation = (latitude, longitude) => {
  // Indonesia coordinates bounds (approximate)
  // Lat: -11° to 6°, Lon: 95° to 141°
  const minLat = -11;
  const maxLat = 6;
  const minLon = 95;
  const maxLon = 141;

  return (
    latitude >= minLat &&
    latitude <= maxLat &&
    longitude >= minLon &&
    longitude <= maxLon
  );
};

// Get initial language from browser
export const getInitialLanguage = () => {
  if (typeof window === "undefined") return "en";

  const stored = localStorage.getItem("language");
  if (stored) return stored;

  const browserLang = navigator.language || navigator.userLanguage;
  return getLanguage(browserLang);
};
