import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import EntranceLoader from "@/components/EntranceLoader";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import Iridescence from "@/components/Iridescence";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <EntranceLoader />
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <Iridescence
          color={[0.8823529411764706, 0.6549019607843137, 0.6196078431372549]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.4}
        />
        <div className="absolute inset-0 bg-paper/75" />
      </div>
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
}
