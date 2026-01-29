'use client';
import { usePathname } from 'next/navigation';
import Header from './header';
import Logo from './logo';

export default function ConditionalHeader() {
  // Always render the full Header so navigation works from any page
  return <Header />;
}