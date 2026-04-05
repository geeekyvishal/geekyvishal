import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { SocialDock } from '@/components/layout/social-dock';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { JourneySection } from '@/components/sections/journey-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <JourneySection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <SocialDock />
    </main>
  );
}
