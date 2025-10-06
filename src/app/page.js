import Hero from "./components/hero/hero";
import AboutSection from "./components/aboutSection/aboutSection";
import SkillsSection from "./components/skillSection/skillSection";

export default function HomePage() {
  return (
    <>
    <Hero />
    <AboutSection/>
    <SkillsSection/>
      {/* 
      <ProjectsSection />
      <ContactSection /> */}
    </>
  )
}
