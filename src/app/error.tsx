'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">¡Ups! Algo salió mal.</h1>
      <p className="mb-6">Ha ocurrido un error inesperado en la aplicación.</p>
      <Button onClick={() => reset()} className="bg-primary text-white hover:bg-secondary/50">
        Intentar de nuevo
      </Button>
    </div>
  );
}