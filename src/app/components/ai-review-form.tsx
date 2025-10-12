import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mvgwqvge");

    return (
        <Card className="shadow-lg">
        <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
            <Mail className="text-primary" />
            Contáctame
            </CardTitle>
        </CardHeader>
        <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block mb-1 font-medium">Nombre</label>
                <Input id="name" type="text" name="name" required minLength={2} placeholder="Tu nombre" />
                <ValidationError prefix="Nombre" field="name" errors={state.errors} />
            </div>
            <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                <Input id="email" type="email" name="email" required placeholder="tu@email.com" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div>
                <label htmlFor="message" className="block mb-1 font-medium">Mensaje</label>
                <Textarea id="message" name="message" required minLength={10} placeholder="Escribe tu mensaje aquí..." />
                <ValidationError prefix="Mensaje" field="message" errors={state.errors} />
            </div>
            <Button type="submit" disabled={state.submitting} className="w-full">
                {state.submitting ? "Enviando..." : "Enviar mensaje"}
            </Button>
            </form>
            {state.succeeded && (
            <Alert variant="success" className="mt-6">
                <AlertTitle>¡Mensaje enviado!</AlertTitle>
                <AlertDescription>Gracias por contactarme. Te responderé pronto.</AlertDescription>
            </Alert>
            )}
            {state.errors && state.errors.length > 0 && (
            <Alert variant="destructive" className="mt-6">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Por favor, revisa los campos e inténtalo de nuevo.</AlertDescription>
            </Alert>
            )}
        </CardContent>
        </Card>
    );
}