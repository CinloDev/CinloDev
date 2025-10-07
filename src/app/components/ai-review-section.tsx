import AiReviewForm from './ai-review-form';

export default function AiReviewSection() {
  return (
    <section id="ai-review" className="w-full py-16 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline tracking-tight text-foreground sm:text-4xl">
              Revisión de Portafolio con IA
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              ¿Tienes un proyecto que quieres mostrar? Usa mi herramienta con IA para obtener sugerencias sobre cómo mejorar su título, descripción y etiquetas para una mejor visibilidad y SEO.
            </p>
          </div>
          <AiReviewForm />
        </div>
      </div>
    </section>
  );
}
