'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { reviewPortfolioItemAction } from '@/app/actions';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Wand2, Lightbulb } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

const formSchema = z.object({
  title: z.string().min(5, 'El título debe tener al menos 5 caracteres.'),
  description: z.string().min(20, 'La descripción debe tener al menos 20 caracteres.'),
  tags: z.string().min(3, 'Por favor, proporciona al menos una etiqueta.'),
});

type FormValues = z.infer<typeof formSchema>;

type ReviewResult = {
  suggestions: {
    title: string;
    description:string;
    tags: string[];
    seo_analysis: string;
  }
} | null;

export default function AiReviewForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ReviewResult>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      tags: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const response = await reviewPortfolioItemAction(data);
      if(response){
        setResult(response);
      } else {
        setError('No se pudieron obtener sugerencias. Por favor, inténtalo de nuevo.');
      }
    } catch (err) {
      setError('Ocurrió un error. Por favor, inténtalo de nuevo más tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Wand2 className="text-primary" />
          Mejora tu Proyecto
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título del Proyecto</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej: Plataforma de E-commerce Moderna" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripción del Proyecto</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe tu proyecto en unas pocas frases." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Etiquetas (separadas por comas)</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej: Next.js, Tailwind, Stripe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analizando...
                </>
              ) : (
                'Obtener Sugerencias de IA'
              )}
            </Button>
          </form>
        </Form>
        {error && <Alert variant="destructive" className="mt-6"><AlertTitle>Error</AlertTitle><AlertDescription>{error}</AlertDescription></Alert>}
        {result && (
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold font-headline flex items-center gap-2">
                <Lightbulb className="text-primary" /> Sugerencias de IA
            </h3>
            <div className="p-4 border rounded-lg bg-background">
                <p className="font-semibold">Título Sugerido:</p>
                <p className="text-muted-foreground">{result.suggestions.title}</p>
            </div>
            <div className="p-4 border rounded-lg bg-background">
                <p className="font-semibold">Descripción Sugerida:</p>
                <p className="text-muted-foreground">{result.suggestions.description}</p>
            </div>
            <div className="p-4 border rounded-lg bg-background">
                <p className="font-semibold">Etiquetas Sugeridas:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {result.suggestions.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                </div>
            </div>
             <div className="p-4 border rounded-lg bg-background">
                <p className="font-semibold">Análisis SEO:</p>
                <p className="text-muted-foreground">{result.suggestions.seo_analysis}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
