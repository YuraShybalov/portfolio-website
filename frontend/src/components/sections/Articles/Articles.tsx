import { motion } from "motion/react";
import { BookOpen, ArrowRight } from "lucide-react";
import { GlassCard } from "../../ui/GlassCard";
import { SectionTitle } from "../../ui/SectionTitle";
import { GradientButton } from "../../ui/GradientButton";

const latestArticles = [
  {
    title: "Building Scalable Microservices",
    category: "Architecture",
    readTime: "8 min",
  },
  {
    title: "Advanced TypeScript Patterns",
    category: "TypeScript",
    readTime: "6 min",
  },
  {
    title: "Optimizing React Performance",
    category: "React",
    readTime: "10 min",
  },
];

function ArticlesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Technical insights and tutorials">
          Latest Articles
        </SectionTitle>

        <div className="grid md:grid-cols-3 gap-6">
          {latestArticles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard>
                <BookOpen className="w-10 h-10 text-cyan-500 mb-4" />
                <span className="text-sm text-blue-500 mb-2 block">
                  {article.category}
                </span>
                <h3 className="text-lg font-bold mb-2">{article.title}</h3>
                <p className="text-gray-400 text-sm">{article.readTime} read</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <GradientButton to="/blog" size="lg" variant="outline">
            Read All Articles
            <ArrowRight className="ml-2 w-5 h-5 inline" />
          </GradientButton>
        </div>
      </div>
    </section>
  );
}

export default ArticlesSection;
