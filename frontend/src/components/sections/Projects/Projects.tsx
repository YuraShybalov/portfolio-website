import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { GlassCard } from "../../ui/GlassCard";
import { SectionTitle } from "../../ui/SectionTitle";
import { GradientButton } from "../../ui/GradientButton";

const featuredProjects = [
  {
    id: "1",
    title: "Enterprise SaaS Platform",
    description:
      "Full-stack multi-tenant platform with real-time collaboration features",
    tech: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
  },
  {
    id: "2",
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time data visualization with machine learning insights",
    tech: ["Next.js", "Python", "TensorFlow", "D3.js"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
  },
  {
    id: "3",
    title: "Cloud Infrastructure Manager",
    description: "DevOps automation tool for multi-cloud deployments",
    tech: ["Go", "Kubernetes", "Terraform", "AWS"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
  },
];

function ProjectsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Showcasing my best work">
          Featured Projects
        </SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/projects/${project.id}`}>
                <GlassCard>
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <GradientButton to="/projects" size="lg">
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5 inline" />
          </GradientButton>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
