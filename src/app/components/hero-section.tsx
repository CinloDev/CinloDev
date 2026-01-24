"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import TechLogos from './tech-logos';
import { useLocale } from '@/components/language-provider';

export const metadata = {
    title: "CinloDev | Cintia Losada - Desarrolladora Web y Creadora de Contenido",
    description: "Soy Cintia Losada, desarrolladora web y creadora de contenido. Construyo sitios web atractivos, funcionales y ayudo a marcas a destacar en redes sociales.",
    keywords: [
        "desarrolladora web",
        "creadora de contenido",
        "mantenimiento web",
        "lanzamiento de marca",
        "optimización móvil",
        "sitios web",
        "presencia digital",
        "redes sociales",
        "CinloDev",
        "Cintia Losada",
        "branding",
        "marketing digital"
    ],
    openGraph: {
        title: "CinloDev | Cintia Losada - Desarrolladora Web y Creadora de Contenido",
        description: "Sitios web atractivos y funcionales, presencia digital y contenido para marcas. Conoce el trabajo de Cintia Losada.",
        url: "https://cinlodev.com",
        siteName: "CinloDev",
        images: [
        {
            url: "/favicon.ico",
            width: 1200,
            height: 630,
            alt: "CinloDev Logo",
        },
        ],
        locale: "es_ES",
        type: "website",
    },
};

export default function HeroSection() {
  const { t } = useLocale();
  const { locale } = useLocale();
  return (
    <>
      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/5492212024901"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-40 right-6 z-50 bg-primary hover:bg-secondary/50 text-white rounded-full shadow-lg flex items-center px-4 py-3 gap-2 transition-colors"
        aria-label={t('hero.whatsapp')}
      >
        <MessageCircle className="w-5 h-5" />
        {t('hero.whatsapp')}
      </a>
      <section className="w-full py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight text-foreground">
              {t('hero.title')}
            </h1>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline tracking-tight text-foreground">
              <TechLogos />
            </div>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground dark:text-white max-w-2xl mx-auto">
              {t('hero.lead')}
            </p>
            <p className="text-lg md:text-xl text-muted-foreground dark:text-white max-w-2xl mx-auto">
               {t('hero.cta')}
            </p>
            <div className="mt-8 flex flex-row justify-center gap-4 custom-mobile-stack">
              <Button asChild size="lg" className="bg-primary hover:bg-secondary/50 transition-colors">
                <Link href="#contact">
                  {t('hero.contact')}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-secondary/50 text-white hover:bg-primary transition-colors">
                <Link href="#work">{t('hero.viewProjects')}</Link>
              </Button>
                 <a
                  href={locale === 'es' ? '/cintialosada-cv-es.pdf' : '/cintialosada-cv-en.pdf'}
                  download
                  className="text-base text-foreground bg-primary text-white px-8 py-2 rounded hover:bg-secondary/50"
                  aria-label={t('hero.downloadCv')}
                >
                  {t('hero.downloadCv')}
                </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}