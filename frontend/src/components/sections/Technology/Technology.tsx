import { motion } from "motion/react";
import {
  Code2,
  Server,
  Database,
  GitBranch,
  Cloud,
  Wrench,
} from "lucide-react";
import { GlassCard } from "../../ui/GlassCard";
import { SectionTitle } from "../../ui/SectionTitle";

const techCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "blue",
    technologies: [
      { name: "React", level: 95, years: 4 },
      { name: "TypeScript", level: 90, years: 3 },
      { name: "Next.js", level: 88, years: 2 },
      { name: "Tailwind CSS", level: 92, years: 3 },
      { name: "Vue.js", level: 75, years: 2 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "purple",
    technologies: [
      { name: "Node.js", level: 93, years: 4 },
      { name: "Python", level: 85, years: 3 },
      { name: "Go", level: 70, years: 1 },
      { name: "GraphQL", level: 88, years: 2 },
      { name: "REST APIs", level: 95, years: 5 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "cyan",
    technologies: [
      { name: "PostgreSQL", level: 90, years: 4 },
      { name: "MongoDB", level: 85, years: 3 },
      { name: "Redis", level: 88, years: 3 },
      { name: "Elasticsearch", level: 75, years: 2 },
    ],
  },
  {
    title: "DevOps",
    icon: GitBranch,
    color: "green",
    technologies: [
      { name: "Docker", level: 92, years: 3 },
      { name: "Kubernetes", level: 80, years: 2 },
      { name: "CI/CD", level: 90, years: 4 },
      { name: "Terraform", level: 75, years: 2 },
    ],
  },
  {
    title: "Cloud",
    icon: Cloud,
    color: "orange",
    technologies: [
      { name: "AWS", level: 88, years: 3 },
      { name: "Google Cloud", level: 75, years: 2 },
      { name: "Vercel", level: 90, years: 2 },
      { name: "DigitalOcean", level: 85, years: 3 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "pink",
    technologies: [
      { name: "Git", level: 95, years: 5 },
      { name: "VS Code", level: 98, years: 5 },
      { name: "Figma", level: 80, years: 3 },
      { name: "Postman", level: 90, years: 4 },
    ],
  },
];

export function TechnologySection() {
  return (
    <>
      <SectionTitle subtitle="Technologies I work with professionally">
        Technology Stack
      </SectionTitle>
      <section className="mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard>
                <div className="flex items-center mb-6">
                  <category.icon
                    className={`w-8 h-8 text-${category.color}-500 mr-3`}
                  />
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={tech.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{tech.name}</span>
                        <span className="text-sm text-gray-400">
                          {tech.years} {tech.years === 1 ? "year" : "years"}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: index * 0.1 + techIndex * 0.05,
                          }}
                          className={`h-full bg-gradient-to-r from-${category.color}-600 to-${category.color}-400`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
