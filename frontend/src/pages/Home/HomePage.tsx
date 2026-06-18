import HeroSection from "../../components/sections/Hero/hero";
import GitHubSection from "../../components/sections/GitHub/GitHub";
import TechnologyStack from "../../components/sections/TechnologyStack/TechnologyStack";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <GitHubSection />
      <TechnologyStack />
    </div>
  );
};

export default HomePage;
