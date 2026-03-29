"use client";

import { services } from '@/lib/data';
import { useLocale } from '@/components/language-provider';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';


export default function ServicesSection() {
    const { t } = useLocale();
    return (
        <section id="services" className="w-full py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold font-headline tracking-tight text-foreground sm:text-4xl">
                    {t('services.heading')}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground dark:text-white">
                    {t('services.intro')}
                </p>
                </div>
                <div className="mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
                {services.map((service) => (
                    <Card
                        key={service.titleKey}
                        className={`${service.featured ? 'lg:col-span-2 p-4' : 'p-2'}`}
                    >
                    <CardHeader className="flex flex-row items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                        <service.icon className="h-8 w-8 text-secondary" />
                        </div>
                        <div>
                        <CardTitle className="text-xl font-headline">{t(service.titleKey)}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="mb-4 text-base dark:text-white">
                            {t(service.descriptionKey)}
                        </CardDescription>
                        {(service.includesKeys || service.includes) && (
                            <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-2">
                                {(service.includesKeys || service.includes).map((incKey: string) => (
                                    <li key={incKey} className="text-sm text-muted-foreground dark:text-white">• {t(incKey)}</li>
                                ))}
                            </ul>
                        )}
                    </CardContent>
                    </Card>
                ))}
                </div>
            </div>
        </section>
    );
}
