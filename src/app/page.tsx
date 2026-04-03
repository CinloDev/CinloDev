export const metadata = {
  alternates: { canonical: 'https://cinlodev.com' },
  openGraph: { url: 'https://cinlodev.com' },
};

import HeroSection from './components/hero-section';
import WorkShowcase from './components/work-showcase';
import ContactSection from './components/contact-section';
import AboutSection from './components/about-section';
import ExperienceSection from './components/experience-section';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <ExperienceSection />
      <WorkShowcase />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
