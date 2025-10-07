import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <>
      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/5492216757006"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-6 z-50 bg-primary hover:bg-secondary/50 text-white rounded-full shadow-lg flex items-center px-4 py-3 gap-2 transition-colors"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp
      </a>
      <section className="w-full py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight text-foreground">
              Creando Experiencias Digitales que Conectan y Convierten
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Soy Cintia Losada, una desarrolladora web y creadora de contenido apasionada por construir sitios web atractivos y funcionales, y una presencia atractiva en redes sociales para marcas.
            </p>
            <div className="mt-8 flex flex-row justify-center gap-4 custom-mobile-stack">
              <Button asChild size="lg" className="bg-primary hover:bg-secondary/50 transition-colors">
                <Link href="#contact">
                  Trabajemos Juntos <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-secondary/50 text-white hover:bg-primary transition-colors">
                <Link href="#work">Ver Mi Trabajo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}