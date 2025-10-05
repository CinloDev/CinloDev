import Link from 'next/link';
import { socialLinks } from '@/lib/data';
import Logo from './logo';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo />
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                aria-label={link.name}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <link.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CinloDev. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
