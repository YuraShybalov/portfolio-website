import { motion } from "motion/react";
import { GlassCard } from "../../ui/GlassCard";
import { SectionTitle } from "../../ui/SectionTitle";
import { useGitHub } from "../../../hooks/useGitHub";

const GITHUB_USERNAME = "YuraShybalov";

const GitHubSection = () => {
  const { stats, loading, error } = useGitHub(GITHUB_USERNAME);

  if (error) {
    return (
      <section className="py-20 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle align="center" subtitle="My open source contributions">
            GitHub Statistics
          </SectionTitle>
          <div className="text-center text-red-400">
            Failed to load GitHub data: {error}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle align="center" subtitle="My open source contributions">
          GitHub Statistics
        </SectionTitle>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? // Loading skeleton
              [...Array(3)].map((_, i) => (
                <div
                  key={`skeleton-${i}`}
                  className="h-40 bg-gray-800/30 rounded-lg animate-pulse"
                />
              ))
            : stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard hover={false}>
                    <stat.icon className="w-8 h-8 text-blue-500 mb-4" />
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </GlassCard>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
