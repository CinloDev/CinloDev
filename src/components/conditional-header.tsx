'use client';
import { usePathname } from 'next/navigation';
import Header from './header';
import Logo from './logo';

export default function ConditionalHeader() {
  const pathname = usePathname() ?? '';
  const minimal = pathname.startsWith('/terminos') || pathname.startsWith('/privacidad');

  if (!minimal) return <Header />;

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-center">
        <Logo />
      </div>
    </header>
  );
}