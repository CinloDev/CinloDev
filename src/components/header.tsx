'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Logo from './logo';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/data';

function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {navLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-base font-semibold text-foreground hover:text-primary transition-colors px-2 py-1 rounded hover:bg-primary/10 underline-offset-4 hover:underline"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
    return (
        <div className="md:hidden bg-background border-t">
            <nav className="flex flex-col items-center gap-4 p-4">
                {navLinks.map((link) => (
                <Link
                    key={link.label}
                    href={link.href}
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors px-2 py-1 rounded hover:bg-primary/10 underline-offset-4 hover:underline"
                    onClick={onClose}
                >
                    {link.label}
                </Link>
                ))}
                <a
                    href="/cintialosada-cv.pdf"
                    download
                    className="text-base font-semibold text-foreground bg-primary text-white px-8 py-2 rounded hover:bg-secondary/50"
                    aria-label="Descargar CV"
                >
                    Descargar CV
                </a>
            </nav>
        </div>
    );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b' : 'bg-background'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
         <div className="flex items-center gap-2" aria-label="Inicio" role="banner">
          <Logo />
        </div>

        <DesktopNav />

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
                <a
                    href="/cintialosada-cv.pdf"
                    download
                    className="text-base font-semibold text-foreground bg-primary text-white px-8 py-2 rounded hover:bg-secondary/50"
                    aria-label="Descargar CV"
                >
                    Descargar CV
                </a>
          </div>

          <div className="md:hidden">
            <Button
              onClick={toggleMenu}
              variant="ghost"
              size="icon"
              aria-label="Abrir menú"
              aria-expanded={isOpen}
              className="bg-primary hover:bg-secondary/50 text-white transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && <MobileMenu onClose={closeMenu} />}
    </header>
  );
}