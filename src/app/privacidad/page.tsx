import Link from 'next/link';

export default function PrivacidadPage() {
    return (
        <main className="container mx-auto px-4 md:px-6 py-16 flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl font-bold mb-6">Política de privacidad</h1>
            <p className="mb-4">
                Tu privacidad es importante para nosotros. Aquí explicamos cómo recopilamos, usamos y protegemos tus datos personales cuando visitas nuestro sitio web.
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>No compartimos tu información con terceros.</li>
                <li>Solo recopilamos datos necesarios para responder consultas o mejorar el servicio.</li>
                <li>Puedes solicitar la eliminación de tus datos en cualquier momento.</li>
                <li>
                    Cuando envías el formulario de contacto, tus datos (nombre, email y mensaje) se procesan a través del servicio Formspree, que los almacena temporalmente para su envío y gestión. Consulta la <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="underline text-primary">política de privacidad de Formspree</a> para más información.
                </li>
            </ul>
            <p>
                Si tienes dudas sobre nuestra política, contáctanos a través del formulario.
            </p>
            <div className="mt-8 px-4 flex gap-4">
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