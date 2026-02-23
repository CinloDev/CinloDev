"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import TechLogos from './tech-logos';
import { useLocale } from '@/components/language-provider';


export default function HeroSection() {
    const { t, locale } = useLocale();
    return (
        <>
            {/* Botón flotante de WhatsApp */}
            <a
                href="https://wa.me/5492212024901"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center rounded-full bg-primary text-white shadow-lg transition-colors hover:bg-secondary/50 p-4 md:bottom-12 md:right-6 md:px-5 md:py-3 md:gap-2"
                aria-label={t('hero.whatsapp')}
                title={t('hero.whatsapp')}
            >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
               <span className="hidden md:inline-block text-sm font-medium">
                {t('hero.whatsapp')}
                </span>
            </a>
           <section className="w-full py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                    
                        {/* LEFT COLUMN — Texto */}
                        <div className="space-y-6 text-center lg:text-left">
                            
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight text-foreground leading-tight">
                            {t('hero.title')}
                            </h1>

                            <p className="text-lg md:text-xl text-muted-foreground dark:text-white max-w-2xl lg:mx-0 mx-auto">
                            {t('hero.lead')}
                            </p>

                            <p className="text-base md:text-lg text-foreground/90 max-w-[34rem] lg:mx-0 mx-auto">
                            {t('hero.cta')}
                            </p>

                            <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                            
                            {/* Primary */}
                            <Button
                                asChild
                                size="lg"
                                className="w-full sm:w-auto bg-primary hover:bg-secondary/50 transition-colors"
                            >
                                <Link href="#contact">{t('hero.contact')}</Link>
                            </Button>

                            {/* Secondary */}
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto hover:bg-secondary/50"
                            >
                                <Link href="#work">{t('hero.viewProjects')}</Link>
                            </Button>

                            {/* Tertiary */}
                            <Button
                                asChild
                                variant="ghost"
                                size="lg"
                                className="w-full sm:w-auto hover:bg-secondary/50"
                            >
                                <a
                                href={locale === 'es' ? '/cintialosada-cv-es.pdf' : '/cintialosada-cv-en.pdf'}
                                download
                                aria-label={t('hero.downloadCv')}
                                >
                                {t('hero.downloadCv')}
                                </a>
                            </Button>

                            </div>
                        </div>

                        {/* RIGHT COLUMN — Tech Logos */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="text-4xl lg:text-5xl ">
                            <TechLogos />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}