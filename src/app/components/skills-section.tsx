"use client";

import React from 'react';
import { skillsSection } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useLocale } from '@/components/language-provider';

export default function SkillsSection() {
    const { t } = useLocale();
    return (
        <section id="skills" aria-labelledby="skills-title" className="w-full py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto">
                    <h3 id="skills-title" className="text-3xl font-bold font-headline tracking-tight text-foreground sm:text-4xl mb-2">
                        {t(skillsSection.titleKey)}
                    </h3>
                    <p className="mt-2 text-lg text-muted-foreground dark:text-white">{t(skillsSection.introKey)}</p>
                </div>

                <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {skillsSection.columns.map((col) => (
                        <Card
                            key={col.titleKey}
                            className="p-0 overflow-hidden transition-transform duration-200 hover:shadow-lg hover:-translate-y-1"
                        >
                            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent border-b">
                                <CardTitle className="text-lg font-semibold">{t(col.titleKey)}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-4">
                                <div className="flex flex-wrap gap-3">
                                    {col.items.map((item) => (
                                        <span
                                            key={item.nameKey}
                                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-muted/10 text-foreground/90"
                                        >
                                            {t(item.nameKey)}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
