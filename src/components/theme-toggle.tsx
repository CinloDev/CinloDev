'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // useEffect solo para el cliente
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-9 h-9">
        <span className="sr-only">Cargando tema</span>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="group w-9 h-9 hover:bg-transparent"
      aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-foreground transition-all duration-200 group-hover:scale-110 group-hover:text-pink-500" />
      ) : (
        <Moon className="h-5 w-5 text-foreground transition-all duration-200 group-hover:scale-110 group-hover:text-pink-600" />
      )}
      <span className="sr-only">
        {theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      </span>
    </Button>
  );
}
