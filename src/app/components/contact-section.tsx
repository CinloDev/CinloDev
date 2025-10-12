'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvgwqvge";

const formSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres.'),
  email: z.string().email('Por favor, introduce una dirección de correo electrónico válida.'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres.'),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('message', data.message);

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" },
      });

      if (response.ok) {
        toast({
          title: '¡Mensaje Enviado!',
          description: "Gracias por contactarme. Te responderé en breve.",
        });
        form.reset();
      } else {
        toast({
          variant: 'destructive',
          title: '¡Oh, no! Algo salió mal.',
          description: 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.',
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: '¡Oh, no! Algo salió mal.',
        description: 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.',
      });
    }
  };

  return (
    <section id="contact" className="w-full py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-headline tracking-tight text-foreground sm:text-4xl">
            Ponte en Contacto
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ¿Tienes un proyecto en mente o simplemente quieres saludar? Rellena el siguiente formulario y me pondré en contacto contigo lo antes posible.
          </p>
        </div>
        <div className="mt-12 max-w-xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu Nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="tu.email@ejemplo.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Cuéntame sobre tu proyecto..." {...field} rows={5} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-secondary/50 text-white transition-colors">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      'Enviar Mensaje'
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}