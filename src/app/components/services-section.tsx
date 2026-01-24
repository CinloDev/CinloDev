import { services } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';


export default function ServicesSection() {
    return (
        <section id="services" className="w-full py-16 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold font-headline tracking-tight text-foreground sm:text-4xl">
                    Servicios
                </h2>
                <p className="mt-4 text-lg text-muted-foreground dark:text-white">
                    Desarrollo soluciones digitales enfocadas en producto, experiencia de usuario y resultados reales.
                </p>
                </div>
                <div className="mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
                {services.map((service) => (
                    <Card
                        key={service.title}
                        className={`${service.featured ? 'lg:col-span-2 p-4' : 'p-2'}`}
                    >
                    <CardHeader className="flex flex-row items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                        <service.icon className="h-8 w-8 text-secondary" />
                        </div>
                        <div>
                        <CardTitle className="text-xl font-headline">{service.title}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="mb-4 text-base dark:text-white">
                            {service.description}
                        </CardDescription>
                        {service.includes && (
                            <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-2">
                                {service.includes.map((inc) => (
                                    <li key={inc} className="text-sm text-muted-foreground dark:text-white">• {inc}</li>
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
