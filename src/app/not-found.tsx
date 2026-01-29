"use client";
import MinimalHeaderFlag from '@/components/minimal-header';
import { useLocale } from '@/components/language-provider';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import LogoImage from '@/components/logo-image';
export default function NotFound() {
    const { t } = useLocale();
    return (
        <>
            <MinimalHeaderFlag />

            <main className="flex-1 flex flex-col items-center justify-center text-center py-8 px-4">
                <div className="md:col-span-2 flex justify-center mb-6">
                    <Card className="inline-flex items-center justify-center overflow-hidden bg-white p-2 rounded shadow-lg">
                        <LogoImage />
                    </Card>
                </div>

                <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
                <p className="mb-6">La página que buscas no existe.</p>

                <div className="flex gap-4">
                    <Link href="/">
                        <Button className="bg-primary text-white hover:bg-secondary/50">{t('privacy.back') || 'Back to home'}</Button>
                    </Link>
                </div>
            </main>
        </>
    );
}
