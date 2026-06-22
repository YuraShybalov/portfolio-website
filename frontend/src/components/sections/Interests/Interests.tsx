import { motion } from "framer-motion";
import { SectionTitle } from "../../ui/SectionTitle";
import { GlassCard } from "../../ui/GlassCard";

const interests = [
  {
    icon: "🚀",
    title: "Space Technology",
    description: "Following developments in aerospace and satellite systems",
  },
  {
    icon: "🎮",
    title: "Game Development",
    description: "Building indie games as a creative outlet",
  },
  {
    icon: "📚",
    title: "Reading",
    description: "Sci-fi novels and technical literature",
  },
  {
    icon: "🏃",
    title: "Running",
    description: "Marathon training and outdoor activities",
  },
];

export function InterestsSection() {
  return (
    <section>
      <SectionTitle subtitle="Beyond the code">Personal Interests</SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {interests.map((interest, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard>
              <div className="text-5xl mb-4">{interest.icon}</div>
              <h3 className="text-lg font-bold mb-2">{interest.title}</h3>
              <p className="text-gray-400 text-sm">{interest.description}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
