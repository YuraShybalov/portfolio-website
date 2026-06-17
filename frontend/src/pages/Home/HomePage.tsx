import HeroSection from "../../components/sections/Hero/hero";
import GitHubSection from "../../components/sections/GitHub/GitHub";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <GitHubSection />
    </div>
  );
};

export default HomePage;
