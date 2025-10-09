import Image from 'next/image';
import Link from 'next/link';
import { portfolioProjects } from '@/lib/data';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

export const metadata = {
    title: "Trabajos | CinloDev",
    description: "Explora los proyectos realizados por Cintia Losada: sitios web, branding y soluciones digitales para marcas y emprendedores.",
    keywords: [
        "trabajos",
        "proyectos",
        "portafolio",
        "sitios web",
        "branding",
        "soluciones digitales",
        "CinloDev",
        "Cintia Losada"
    ],
    openGraph: {
        title: "Trabajos | CinloDev",
        description: "Mira los trabajos destacados de Cintia Losada en desarrollo web y branding para marcas y emprendedores.",
        url: "https://cinlodev.com/work",
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

export default function WorkShowcase() {
  return (
    <section id="work" className="w-full py-16 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-headline tracking-tight text-foreground sm:text-4xl">
            Mi Trabajo
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Aquí hay una selección de proyectos que muestran mis habilidades en desarrollo web y creación de contenido.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <Card className="group overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    {project.image && (
                      <Image
                        src={project.image.imageUrl}
                        alt={project.image.description}
                        data-ai-hint={project.image.imageHint}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold font-headline">{project.title}</h3>
                      <p className="mt-2 text-muted-foreground text-sm line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </CardFooter>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-headline">{project.title}</DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6 py-4">
                  {project.image && (
                    <Image
                      src={project.image.imageUrl}
                      alt={project.image.description}
                      data-ai-hint={project.image.imageHint}
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  )}
                  <div>
                    <DialogDescription className="text-base text-foreground mb-4">
                      {project.description}
                    </DialogDescription>
                    <div className="flex flex-wrap gap-2 my-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Ver Proyecto en Vivo <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
