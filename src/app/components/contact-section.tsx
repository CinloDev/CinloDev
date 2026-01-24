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
import { useLocale } from '@/components/language-provider';

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvgwqvge";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const { toast } = useToast();
  const { t } = useLocale();

  const formSchema = z.object({
    name: z.string().min(2, t('form.errors.name')),
    email: z.string().email(t('form.errors.email')),
    message: z.string().min(10, t('form.errors.message')),
  });

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
          title: t('contact.success.title'),
          description: t('contact.success.description'),
        });
        form.reset();
      } else {
        toast({
          variant: 'destructive',
          title: t('contact.error.title'),
          description: t('contact.error.description'),
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: t('contact.error.title'),
        description: t('contact.error.description'),
      });
    }
  };

  return (
    <section id="contact" className="w-full py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-headline tracking-tight text-foreground sm:text-4xl">
            {t('contact.heading')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground dark:text-white">
            {t('contact.intro')}
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
                        <FormLabel>{t('form.label.name')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('form.placeholder.name')} {...field} className="dark:text-white placeholder:text-muted-foreground dark:placeholder:text-gray-400" />
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
                        <FormLabel>{t('form.label.email')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('form.placeholder.email')} {...field} className="dark:text-white placeholder:text-muted-foreground dark:placeholder:text-gray-400" />
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
                        <FormLabel>{t('form.label.message')}</FormLabel>
                        <FormControl>
                          <Textarea placeholder={t('form.placeholder.message')} {...field} rows={5} className="dark:text-white placeholder:text-muted-foreground dark:placeholder:text-gray-400" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-secondary/50 text-white transition-colors">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t('form.submit.sending')}
                      </>
                    ) : (
                      t('form.submit.label')
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          <p className="mt-4 text-lg text-center text-muted-foreground dark:text-white">{t('contact.available')}</p>
        </div>
      </div>
    </section>
  );
}