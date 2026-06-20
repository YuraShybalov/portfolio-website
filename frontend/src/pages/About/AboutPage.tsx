import { AboutHeroSection } from "../../components/sections/AboutHero/AboutHero";
import { CareerSection } from "../../components/sections/Career/Career";
import { EducationSection } from "../../components/sections/Education/Education";
import { GoalsSection } from "../../components/sections/Goals/Goals";

const AboutPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutHeroSection />
        <CareerSection />
        <EducationSection />
        <GoalsSection />
      </div>
    </div>
  );
};

export default AboutPage;
