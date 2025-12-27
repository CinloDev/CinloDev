import { services } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';


export default function ServicesSection() {
    return (
        <section id="services" className="w-full py-16 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold font-headline tracking-tight text-foreground sm:text-4xl">
                    Lo Que Ofrezco
                </h2>
                <p className="mt-4 text-lg text-muted-foreground dark:text-white">
                    Transformo ideas en experiencias digitales únicas. Desde el diseño y desarrollo de sitios web funcionales y atractivos, hasta la creación de comunidades activas en redes sociales, pongo a tu alcance las herramientas que tu marca necesita para crecer, conectar y brillar en el mundo digital.  
                </p>
                </div>
                <div className="mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
                {services.map((service) => (
                    <Card key={service.title} className="p-2">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                        <service.icon className="h-8 w-8 text-secondary" />
                        </div>
                        <div>
                        <CardTitle className="text-xl font-headline">{service.title}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardDescription className="px-6 pb-6 text-base dark:text-white">
                        {service.description}
                    </CardDescription>
                    </Card>
                ))}
                </div>
            </div>
        </section>
    );
}
