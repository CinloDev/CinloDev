
import { testimonials } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
    title: "Testimonios | CinloDev",
    description: "Opiniones y experiencias de clientes satisfechos con el trabajo de Cintia Losada en desarrollo web y contenido digital.",
    keywords: [
        "testimonios",
        "opiniones",
        "clientes",
        "experiencias",
        "CinloDev",
        "Cintia Losada",
        "desarrollo web",
        "contenido digital"
    ],
    openGraph: {
        title: "Testimonios | CinloDev",
        description: "Descubre lo que dicen los clientes sobre los servicios de desarrollo web y contenido digital de Cintia Losada.",
        url: "https://cinlodev.com/testimonials",
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

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="w-full py-16 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold font-headline tracking-tight text-foreground sm:text-4xl">
                        Lo que dicen los clientes
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Estoy orgullosa de haber colaborado con clientes increíbles. Esto es lo que tienen que decir.
                    </p>
                </div>
                <div className="mt-12">
                    <Carousel
                        opts={{
                        align: 'start',
                        loop: true,
                        }}
                        className="w-full max-w-4xl mx-auto"
                    >
                        <div className="overflow-hidden max-w-full">
                          <CarouselContent>
                              {testimonials.map((testimonial, index) => (
                                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                      <div className="p-1 h-full">
                                          <Card className="h-full flex flex-col justify-between shadow-sm">
                                              <CardContent className="p-6">
                                                  <blockquote className="text-lg text-foreground">
                                                  “{testimonial.quote}”
                                                  </blockquote>
                                                  <div className="mt-6">
                                                  <p className="font-semibold">{testimonial.author}</p>
                                                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                                                  </div>
                                              </CardContent>
                                          </Card>
                                      </div>
                                  </CarouselItem>
                              ))}
                          </CarouselContent>
                        </div>

                        <div className="hidden lg:flex">
                          <CarouselPrevious />
                        </div>
                        <div className="hidden lg:flex">
                          <CarouselNext />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
