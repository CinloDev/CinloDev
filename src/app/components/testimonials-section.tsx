
"use client";

import { testimonials } from '@/lib/data';
import { useLocale } from '@/components/language-provider';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';



export default function TestimonialsSection() {
    const { t } = useLocale();
    return (
        <section id="testimonials" className="w-full py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold font-headline tracking-tight text-foreground sm:text-4xl">
                        {t('testimonials.heading')}
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground dark:text-white">
                        {t('testimonials.intro')}
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
                              {testimonials.slice(0,5).map((testimonial, index) => (
                                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                      <div className="p-1 h-full">
                                          <Card className="h-full flex flex-col justify-between shadow-sm">
                                              <CardContent className="p-6">
                                                  <div className="flex items-start gap-3">
                                                    <span className="text-4xl leading-none text-primary/30">“</span>
                                                    <blockquote className="text-lg text-foreground">
                                                      {t(testimonial.quoteKey)}
                                                    </blockquote>
                                                  </div>
                                                  <div className="mt-6">
                                                    <p className="font-semibold">{t(testimonial.authorKey)}</p>
                                                    <p className="text-sm text-secondary">{t(testimonial.companyKey)}</p>
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
