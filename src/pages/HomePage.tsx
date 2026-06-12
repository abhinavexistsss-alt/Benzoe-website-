import { AboutSection } from "../components/AboutSection";
import { FooterSection } from "../components/FooterSection";
import { HeroSection, HeroTicker } from "../components/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { SiteHeader } from "../components/SiteHeader";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { TimelineSection } from "../components/TimelineSection";

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <HeroTicker />
        <AboutSection />
        <ProjectsSection />
        <TimelineSection />
        <TestimonialsSection />
      </main>
      <FooterSection />
    </>
  );
}
