"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import TechLogos from './tech-logos';
import { useLocale } from '@/components/language-provider';


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
                className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center rounded-full bg-primary text-white shadow-lg transition-colors hover:bg-secondary/50 p-4 md:bottom-12 md:right-6 md:px-5 md:py-3 md:gap-2"
                aria-label={t('hero.whatsapp')}
                title={t('hero.whatsapp')}
            >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
               <span className="hidden md:inline-block text-sm font-medium">
                {t('hero.whatsapp')}
                </span>
            </a>
            <section className="w-full py-16 bg-background">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <div className="mb-6 flex flex-col items-center gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight text-foreground">
                        {t('hero.title')}
                        </h1>
                         <p className="text-lg md:text-xl text-muted-foreground dark:text-white max-w-2xl mx-auto">
                        {t('hero.lead')}
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <div className=" mb-6 text-3xl md:text-4xl lg:text-5xl font-bold font-headline tracking-tight text-foreground">
                            <TechLogos />
                        </div>
                       
                        <p className="mt-6 text-base md:text-lg text-foreground/90 max-w-[34rem] mx-auto">
                            {t('hero.cta')}
                        </p>
                        <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
                            <Button
                                asChild
                                size="lg"
                                className="w-[50%] sm:w-auto bg-primary hover:bg-secondary/50 transition-colors"
                            >
                                <Link href="#contact">{t('hero.contact')}</Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="w-[50%] sm:w-auto bg-secondary/50 text-white hover:bg-primary transition-colors"
                            >
                                <Link href="#work">{t('hero.viewProjects')}</Link>
                            </Button>

                            <Button
                                asChild
                                size="lg"
                                className="w-[50%] sm:w-auto bg-primary hover:bg-secondary/50 transition-colors"
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
                </div>
            </section>
        </>
    );
}