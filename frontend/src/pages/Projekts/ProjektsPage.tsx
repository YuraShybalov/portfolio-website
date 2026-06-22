import { useState } from "react";
import { motion } from "motion/react";
import { Search, Filter, ExternalLink } from "lucide-react";
import { Link } from "react-router";
import { GlassCard } from "../../components/ui/GlassCard";
import { SectionTitle } from "../../components/ui/SectionTitle";

const categories = ["All", "Web App", "Mobile", "API", "DevOps", "AI/ML"];
const technologies = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Kubernetes",
];

const projects = [
  {
    id: "1",
    title: "Enterprise SaaS Platform",
    description:
      "Multi-tenant SaaS application with real-time collaboration, analytics, and payment processing.",
    category: "Web App",
    tech: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    stars: 234,
  },
  {
    id: "2",
    title: "AI-Powered Analytics Dashboard",
    description:
      "Real-time analytics platform with machine learning predictions and data visualization.",
    category: "AI/ML",
    tech: ["Next.js", "Python", "TensorFlow", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    stars: 456,
  },
  {
    id: "3",
    title: "Cloud Infrastructure Manager",
    description:
      "DevOps automation tool for managing multi-cloud deployments and infrastructure as code.",
    category: "DevOps",
    tech: ["Go", "Kubernetes", "Terraform", "AWS"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    stars: 789,
  },
  {
    id: "4",
    title: "Mobile E-Commerce App",
    description:
      "Cross-platform mobile application with payment integration and real-time inventory.",
    category: "Mobile",
    tech: ["React Native", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    stars: 321,
  },
  {
    id: "5",
    title: "GraphQL API Gateway",
    description:
      "High-performance API gateway with GraphQL federation and microservices orchestration.",
    category: "API",
    tech: ["GraphQL", "Node.js", "Redis", "Docker"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    stars: 567,
  },
  {
    id: "6",
    title: "Real-time Chat Application",
    description:
      "Scalable chat platform with WebSocket support, file sharing, and end-to-end encryption.",
    category: "Web App",
    tech: ["React", "WebSocket", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    stars: 432,
  },
];

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTech, setSelectedTech] = useState<string[]>([]);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesTech =
      selectedTech.length === 0 ||
      selectedTech.some((tech) => project.tech.includes(tech));

    return matchesSearch && matchesCategory && matchesTech;
  });

  const toggleTech = (tech: string) => {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech],
    );
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Showcasing my work and achievements">
          Featured Projects
        </SectionTitle>

        {/* Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full glass rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "glass text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Technology Filter */}
          <div>
            <div className="flex items-center mb-3">
              <Filter className="w-5 h-5 text-gray-400 mr-2" />
              <span className="text-gray-400">Filter by Technology</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => toggleTech(tech)}
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    selectedTech.includes(tech)
                      ? "bg-purple-600 text-white"
                      : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-400">
          Showing {filteredProjects.length} of {projects.length} projects
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard>
                <Link to={`/projects/${project.id}`}>
                  <div className="aspect-video rounded-lg overflow-hidden mb-4 relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>

                <div className="mb-3">
                  <span className="text-xs text-blue-500 font-medium">
                    {project.category}
                  </span>
                </div>

                <Link to={`/projects/${project.id}`}>
                  <h3 className="text-xl font-bold mb-2 hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </Link>

                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Filter className="w-4 h-4 mr-1" />
                    {project.stars}
                  </div>
                  <div className="flex items-center space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <Filter className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No projects found matching your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
