import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import SkillsSection from "@/components/skills-section";
import EducationSection from "@/components/education-section";
import VolunteerSection from "@/components/volunteer-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <VolunteerSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
