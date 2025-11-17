// ...existing code...
import MinimalHeaderFlag from '@/components/minimal-header';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

import { aboutMe } from '@/lib/data';

export default function NotFound() {
    return (
        <>
            <MinimalHeaderFlag />
      
            <div className="flex flex-col items-center align-auto justify-center text-center py-8">
                <div className="md:col-span-2 flex justify-center mb-6">
                    <Card className="overflow-hidden shadow-lg max-w-xs">
                    {aboutMe.image && (
                        <Image
                        src={aboutMe.image.imageUrl}
                        alt={aboutMe.image.description}
                        width={300}
                        height={120}
                        className="w-full h-auto object-contain bg-white p-2 rounded"
                        />
                    )}
                    </Card>
                </div>
                <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
                <p className="mb-6">La página que buscas no existe.</p>
                <Link href="/" passHref>
                    <Button className='bg-primary text-white hover:bg-secondary/50'>
                    Volver al inicio
                    </Button>
                </Link>
            </div>
        </>
       
    );
}
