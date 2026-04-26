"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  translations,
  getInitialLanguage,
  isIndonesiaLocation,
} from "@/app/lib/i18n";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get initial language from storage or browser preference
    const initialLang = getInitialLanguage();
    setLanguage(initialLang);

    // Try to detect location and set language automatically
    detectLocationAndSetLanguage(initialLang);
  }, []);

  const detectLocationAndSetLanguage = (currentLang) => {
    // Check if geolocation was already handled manually
    const geoHandled = localStorage.getItem("geoLocationHandled");

    if (!geoHandled && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Check if user is in Indonesia
          if (isIndonesiaLocation(latitude, longitude)) {
            setLanguage("id");
            localStorage.setItem("language", "id");
          }

          localStorage.setItem("geoLocationHandled", "true");
          setIsLoading(false);
        },
        (error) => {
          console.log("Geolocation error:", error.message);
          localStorage.setItem("geoLocationHandled", "true");
          setIsLoading(false);
        },
        {
          timeout: 10000,
          enableHighAccuracy: false,
        },
      );
    } else {
      setIsLoading(false);
    }
  };

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      localStorage.setItem("language", lang);
    }
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t,
        isLoading,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
