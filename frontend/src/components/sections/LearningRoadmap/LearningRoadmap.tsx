import { motion } from "motion/react";
import { SectionTitle } from "../../ui/SectionTitle";
import { GlassCard } from "../../ui/GlassCard";

const learningRoadmap = [
  { tech: "Rust", progress: 60, status: "In Progress" },
  { tech: "WebAssembly", progress: 40, status: "Learning" },
  { tech: "Machine Learning", progress: 75, status: "Advanced" },
  { tech: "System Design", progress: 90, status: "Expert" },
];

export function LearningRoadmapSection() {
  return (
    <section className="mb-20">
      <SectionTitle subtitle="Currently expanding my skillset">
        Current Learning Roadmap
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-6">
        {learningRoadmap.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard hover={false}>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-bold">{item.tech}</h3>
                <span className="text-sm text-blue-400">{item.status}</span>
              </div>
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                />
              </div>
              <p className="text-sm text-gray-400 mt-2">
                {item.progress}% Complete
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
