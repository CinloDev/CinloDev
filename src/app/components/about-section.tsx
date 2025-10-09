import Image from 'next/image';
import { aboutMe } from '@/lib/data';
import { Card } from '@/components/ui/card';

export const metadata = {
    title: "Sobre Mí | CinloDev",
    description: "Conoce más sobre el desarrollador detrás de CinloDev, su experiencia y trayectoria profesional.",
    keywords: ["sobre mí", "desarrollador", "experiencia", "CinloDev", "portfolio"],
    openGraph: {
        title: "Sobre Mí | CinloDev",
        description: "Conoce más sobre el desarrollador detrás de CinloDev, su experiencia y trayectoria profesional.",
        url: "https://cinlodev.com/about",
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
        type: "profile",
    },
};

export default function AboutSection() {
    return (
        <section id="about" className="w-full py-16  bg-background">
            <div className="container mx-auto px-4 md:px-6">
                {/* Título siempre arriba y centrado */}
                <h2 className="text-3xl font-bold font-headline tracking-tight text-blue-700 sm:text-4xl mb-8 text-center">
                Sobre Mí
                </h2>
                <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
                    <div className="md:col-span-2 flex justify-center">
                        <Card className="overflow-hidden shadow-lg max-w-xs">
                        {aboutMe.image && (
                            <Image
                            src={aboutMe.image.imageUrl}
                            alt={aboutMe.image.description}
                            data-ai-hint={aboutMe.image.imageHint}
                            aria-label="Foto de perfil de CinloDev"
                            width={300}
                            height={120}
                            className="w-full h-auto object-contain bg-white p-2 rounded"
                            />
                        )}
                        </Card>
                    </div>
                    <div className="md:col-span-3">
                        <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                        {aboutMe.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}