'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Logo from './logo';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b' : 'bg-background'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo />
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
        <div className="hidden md:block">
          <Button asChild className="bg-primary hover:bg-secondary/50 text-white transition-colors">
            <Link href="#contact">Contrátame</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Button onClick={toggleMenu} variant="ghost" size="icon" className="bg-primary hover:bg-secondary/50 text-white transition-colors">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background border-t">
            <nav className="flex flex-col items-center gap-4 p-4">
            {navLinks.map((link) => (
                <Link
                key={link.label}
                href={link.href}
                className="text-lg font-semibold text-foreground hover:text-primary transition-colors px-2 py-1 rounded hover:bg-primary/10 underline-offset-4 hover:underline"
                onClick={() => setIsOpen(false)}
                >
                {link.label}
                </Link>
            ))}
            <Button asChild className="w-full mt-4 hover:bg-secondary/50">
                <Link href="#contact" onClick={() => setIsOpen(false)}>
                Contrátame
                </Link>
            </Button>
            </nav>
        </div>
    )}
    </header>
  );
}
