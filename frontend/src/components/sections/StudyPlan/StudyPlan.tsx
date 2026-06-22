import { motion } from "motion/react";
import { TrendingUp } from "lucide-react";
import { GlassCard } from "../../ui/GlassCard";
import { SectionTitle } from "../../ui/SectionTitle";

const learningRoadmap = [
  {
    quarter: "Q2 2026",
    items: [
      { tech: "Rust", status: "In Progress", progress: 60 },
      { tech: "WebAssembly", status: "Learning", progress: 40 },
    ],
  },
  {
    quarter: "Q3 2026",
    items: [
      { tech: "Edge Computing", status: "Planned", progress: 0 },
      { tech: "Advanced ML", status: "Planned", progress: 0 },
    ],
  },
  {
    quarter: "Q4 2026",
    items: [
      { tech: "System Design", status: "Planned", progress: 0 },
      { tech: "Distributed Systems", status: "Planned", progress: 0 },
    ],
  },
];

export function StudyPlanSection() {
  return (
    <section>
      <SectionTitle subtitle="My continuous learning journey">
        Learning Roadmap 2026
      </SectionTitle>

      <div className="grid md:grid-cols-3 gap-6">
        {learningRoadmap.map((quarter, index) => (
          <motion.div
            key={quarter.quarter}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard>
              <div className="flex items-center mb-6">
                <TrendingUp className="w-6 h-6 text-cyan-500 mr-3" />
                <h3 className="text-xl font-bold">{quarter.quarter}</h3>
              </div>

              <div className="space-y-4">
                {quarter.items.map((item) => (
                  <div key={item.tech}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{item.tech}</span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          item.status === "In Progress"
                            ? "bg-blue-600/20 text-blue-400"
                            : item.status === "Learning"
                              ? "bg-purple-600/20 text-purple-400"
                              : "bg-gray-600/20 text-gray-400"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                    {item.progress > 0 && (
                      <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1 }}
                          className="h-full bg-gradient-to-r from-cyan-600 to-blue-600"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
