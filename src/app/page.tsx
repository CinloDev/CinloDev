import HeroSection from './components/hero-section';
import AboutSection from './components/about-section';
import ServicesSection from './components/services-section';
import WorkShowcase from './components/work-showcase';
import TestimonialsSection from './components/testimonials-section';
import ContactSection from './components/contact-section';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <ServicesSection />
      <WorkShowcase />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
