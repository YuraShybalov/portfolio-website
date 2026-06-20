import { motion } from "motion/react";
import { Target, BookOpen, TrendingUp } from "lucide-react";
import { SectionTitle } from "../../ui/SectionTitle";
import { GlassCard } from "../../ui/GlassCard";

const goals = [
  {
    icon: Target,
    title: "Technical Leadership",
    description:
      "Advance to a principal engineer role, leading architecture decisions for large-scale systems.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Sharing",
    description:
      "Continue writing technical articles and contributing to open-source projects.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description:
      "Stay at the forefront of technology by learning emerging tools and frameworks.",
  },
];

export function GoalsSection() {
  return (
    <section className="mb-20">
      <SectionTitle subtitle="What drives me forward">
        Professional Goals
      </SectionTitle>

      <div className="grid md:grid-cols-3 gap-8">
        {goals.map((goal, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard>
              <goal.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">{goal.title}</h3>
              <p className="text-gray-400">{goal.description}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
