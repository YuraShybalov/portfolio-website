import { TechnologySection } from "../../components/sections/Technology/Technology";
import { StudyPlanSection } from "../../components/sections/StudyPlan/StudyPlan";

const TechStackPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TechnologySection />
        <StudyPlanSection />
      </div>
    </div>
  );
};

export default TechStackPage;
