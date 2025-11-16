import Link from 'next/link';

export default function TerminosPage() {
    return (
        <main className="container mx-auto px-4 md:px-6 py-16 flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl font-bold mb-6">Términos y condiciones</h1>
            <p className="mb-4">
                Al usar este sitio web, aceptas los siguientes términos y condiciones:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>El contenido es solo informativo y puede cambiar sin previo aviso.</li>
                <li>No nos responsabilizamos por el uso que hagas de la información publicada.</li>
                <li>El diseño y contenido están protegidos por derechos de autor.</li>
            </ul>
            <p>
                Para más información, contáctanos directamente.
            </p>
            <div className="mt-8">
                <Link
                    href="/"
                    className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-secondary/50 transition-colors"
                >
                    Volver al inicio
                </Link>
            </div>
        </main>
    );
}