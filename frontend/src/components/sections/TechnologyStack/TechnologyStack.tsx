import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "../../ui/SectionTitle";
const techStack = [
  "React",
  "TypeScript",
  "Node.js",
  "Next.js",
  "PostgreSQL",
  "Docker",
  "AWS",
  "GraphQL",
];

function TechnologyStack() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle align="center" subtitle="Technologies I work with daily">
          Technology Stack
        </SectionTitle>

        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="glass px-6 py-3 rounded-lg"
            >
              <span className="font-medium">{tech}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/tech-stack"
            className="text-blue-500 hover:text-blue-400 inline-flex items-center"
          >
            View Full Tech Stack
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TechnologyStack;
