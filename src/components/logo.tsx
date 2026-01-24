"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLocale } from './language-provider';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';

export default function Logo() {
  const { locale, setLocale, t } = useLocale();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleLocale = (e: React.MouseEvent) => {
    e.preventDefault();
    setLocale(locale === 'es' ? 'en' : 'es');
  };

  const hoverColor = theme === 'dark' ? 'group-hover:text-pink-500' : 'group-hover:text-pink-600';

  return (
    <div className="flex items-center gap-2">
      <Link href="/" className="text-2xl font-bold font-headline transition-colors flex items-center gap-2">
        <span className="text-black dark:text-white font-bold">Cinlo</span>
        <span className="text-primary font-bold hover:text-secondary/50 transition-colors">Dev</span>
      </Link>

      <Button
        variant="ghost"
        size="icon"
        onClick={toggleLocale}
        aria-label={locale === 'es' ? t('aria.changeToEnglish') : t('aria.changeToSpanish')}
        className="group ml-2 hover:bg-transparent"
        title={locale === 'es' ? 'ES — click para cambiar a EN' : 'EN — click para cambiar a ES'}
      >
        <span className={`text-sm font-medium transition-all duration-200 group-hover:scale-110 ${mounted ? hoverColor : ''} text-foreground`}>
          {locale?.toUpperCase()}
        </span>
      </Button>
    </div>
  );
}
