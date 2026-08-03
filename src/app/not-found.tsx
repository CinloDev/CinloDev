"use client";
import MinimalHeaderFlag from '@/components/minimal-header';
import { useLocale } from '@/components/language-provider';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function NotFound() {
    const { t } = useLocale();
    return (
        <>
            <MinimalHeaderFlag />

            <main className="flex-1 flex flex-col items-center justify-center py-12 px-4">
                <Card className="max-w-lg w-full rounded-2xl shadow-xl overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 dark:from-gray-850 dark:via-gray-800 dark:to-gray-750 border border-primary/20 dark:border-border">
                    <CardContent className="p-8 flex flex-col items-center text-center space-y-8">
                        <div className="flex justify-center w-full">
                            <div className="inline-flex items-center justify-center overflow-hidden bg-white p-2 rounded-2xl shadow-lg">
                                <Image
                                    src="/assets/neko404.png"
                                    alt="404 Neko"
                                    width={256}
                                    height={256}
                                    className="object-contain"
                                    priority
                                    style={{
                                        borderRadius: '10px',
                                        width: 'auto',
                                        height: 'auto'
                                    }}
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h1 className="text-3xl sm:text-4xl font-bold font-headline tracking-tight text-foreground">
                                {t('notFound.title')}
                            </h1>
                            <p className="text-muted-foreground dark:text-gray-300 text-lg">
                                {t('notFound.description')}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full pt-2">
                            <Button asChild className="w-full sm:flex-1" size="lg">
                                <Link href="/">
                                    {t('notFound.backHome')}
                                </Link>
                            </Button>
                            <Button asChild variant="outline" className="w-full sm:flex-1 hover:bg-secondary/50 hero-view-projects-btn dark:text-white dark:bg-card dark:hover:bg-secondary/50" size="lg">
                                <Link href="/#work">
                                    {t('notFound.projects')}
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </>
    );
}
