"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import en from '@/locales/en.json';
import es from '@/locales/es.json';

type Locale = 'en' | 'es';

type Translations = Record<string, string | string[]>;

const resources: Record<Locale, Translations> = {
  en,
  es,
};

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => any;
} | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es');

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('locale') : null;
    if (stored === 'en' || stored === 'es') {
      setLocaleState(stored);
      document.documentElement.lang = stored === 'es' ? 'es' : 'en';
      document.cookie = `NEXT_LOCALE=${stored}; path=/; max-age=31536000`;
    } else {
      const nav = typeof navigator !== 'undefined' ? navigator.language : 'es';
      const inferred = nav.startsWith('es') ? 'es' : 'en';
      setLocaleState(inferred);
      document.documentElement.lang = inferred;
      document.cookie = `NEXT_LOCALE=${inferred}; path=/; max-age=31536000`;
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem('locale', l);
      document.cookie = `NEXT_LOCALE=${l}; path=/; max-age=31536000`;
    } catch {}
    document.documentElement.lang = l === 'es' ? 'es' : 'en';
  };

  const t = (key: string) => {
    const val = resources[locale][key];
    if (val) return val;
    // fallback to es then key
    return resources['en'][key] || resources['es'][key] || key;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}

export default LocaleProvider;
