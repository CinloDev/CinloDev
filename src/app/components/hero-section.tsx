import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight text-foreground">
            Creando Experiencias Digitales que Conectan y Convierten
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Soy Cintia Losada, una desarrolladora web y creadora de contenido apasionada por construir sitios web atractivos y funcionales, y una presencia atractiva en redes sociales para marcas.
          </p>
          <div className="mt-8 flex justify-center gap-4">
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
  );
}
