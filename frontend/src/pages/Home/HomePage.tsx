import HeroSection from "../../components/sections/Hero/Hero";
import GitHubSection from "../../components/sections/GitHub/GitHub";
import TechnologyStack from "../../components/sections/TechnologyStack/TechnologyStack";
import ProjectsSection from "../../components/sections/Projects/Projects";
import CertificatesSection from "../../components/sections/Certificates/Certificates";
import ArticlesSection from "../../components/sections/Articles/Articles";
import ActionSection from "../../components/sections/Action/Action";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <GitHubSection />
      <TechnologyStack />
      <ProjectsSection />
      <CertificatesSection />
      <ArticlesSection />
      <ActionSection />
    </div>
  );
};

export default HomePage;
