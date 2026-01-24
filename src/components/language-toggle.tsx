"use client";

import * as React from 'react';
import { Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useLocale } from './language-provider';

export function LanguageToggle() {
  const { locale, setLocale, t } = useLocale();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}
      aria-label={locale === 'es' ? t('aria.changeToEnglish') : t('aria.changeToSpanish')}
      className="group w-9 h-9"
    >
      <Globe className="h-5 w-5 text-foreground" />
      <span className="sr-only">{locale === 'es' ? 'Cambiar a English' : 'Change to Español'}</span>
    </Button>
  );
}

export default LanguageToggle;
