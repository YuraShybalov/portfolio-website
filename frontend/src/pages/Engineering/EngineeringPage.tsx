import { SectionTitle } from "../../components/ui/SectionTitle";
import { HobbySection } from "../../components/sections/Hobby/Hobby";

const EngineeringPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Hardware, embedded systems, and electronics projects">
          Engineering Projects
        </SectionTitle>
        <HobbySection />
      </div>
    </div>
  );
};

export default EngineeringPage;
