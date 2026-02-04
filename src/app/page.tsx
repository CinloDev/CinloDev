export const metadata = {
  alternates: { canonical: 'https://cinlodev.com' },
  openGraph: { url: 'https://cinlodev.com' },
};

import HeroSection from './components/hero-section';
import AboutSection from './components/about-section';
import ServicesSection from './components/services-section';
import WorkShowcase from './components/work-showcase';
import TestimonialsSection from './components/testimonials-section';
import ContactSection from './components/contact-section';
import SkillsSection from './components/skills-section';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkShowcase />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
