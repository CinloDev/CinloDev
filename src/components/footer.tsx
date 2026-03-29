"use client";

import Link from 'next/link';
import { socialLinks } from '@/lib/data';
import Logo from './logo';
import { useLocale } from '@/components/language-provider';

export default function Footer() {
  const { t } = useLocale();
  return (
    <footer className="w-full border-t ">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
            <Logo />
            <div className="flex gap-2 mt-2">
              <Link href="/privacidad" className="text-sm text-muted-foreground dark:text-white hover:underline">
                {t('footer.privacy')}
              </Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/terminos" className="text-sm text-muted-foreground dark:text-white hover:underline">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                aria-label={link.name}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors"
              >
                <link.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
          <p className="text-sm dark:text-white text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} CinloDev. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}