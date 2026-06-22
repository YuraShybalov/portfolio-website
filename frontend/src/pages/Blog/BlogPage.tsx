import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TrendingUp, Calendar, Clock } from "lucide-react";
import { SectionTitle } from "../../components/SectionTitle";

const articles = [
  {
    slug: "building-scalable-microservices",
    title: "Building Scalable Microservices with Node.js and Kubernetes",
    excerpt:
      "Learn how to architect and deploy microservices that can handle millions of requests with minimal latency.",
    category: "Architecture",
    readTime: "12 min",
    date: "June 5, 2026",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    featured: true,
    views: "12.5K",
  },
  {
    slug: "advanced-typescript-patterns",
    title: "Advanced TypeScript Patterns for Large-Scale Applications",
    excerpt:
      "Discover advanced TypeScript techniques that improve code quality and developer experience in enterprise apps.",
    category: "TypeScript",
    readTime: "10 min",
    date: "June 3, 2026",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=500&fit=crop",
    featured: true,
    views: "9.8K",
  },
  {
    slug: "react-performance-optimization",
    title: "React Performance Optimization: From Good to Great",
    excerpt:
      "Practical strategies to optimize React applications for better user experience and faster load times.",
    category: "React",
    readTime: "8 min",
    date: "May 28, 2026",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
    featured: false,
    views: "15.2K",
  },
  {
    slug: "devops-automation-cicd",
    title: "Complete DevOps Automation: CI/CD Pipeline Best Practices",
    excerpt:
      "A comprehensive guide to building reliable and fast CI/CD pipelines for modern web applications.",
    category: "DevOps",
    readTime: "15 min",
    date: "May 25, 2026",
    image:
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&h=500&fit=crop",
    featured: false,
    views: "8.3K",
  },
  {
    slug: "ai-powered-code-review",
    title:
      "AI-Powered Code Review: Improving Code Quality with Machine Learning",
    excerpt:
      "Explore how AI and ML models can assist in automated code review and quality assurance processes.",
    category: "AI",
    readTime: "11 min",
    date: "May 20, 2026",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    featured: false,
    views: "7.1K",
  },
  {
    slug: "nodejs-event-loop-deep-dive",
    title: "Node.js Event Loop: A Deep Dive into Async Programming",
    excerpt:
      "Understanding the Node.js event loop and how to write efficient asynchronous code.",
    category: "Node.js",
    readTime: "9 min",
    date: "May 15, 2026",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    featured: false,
    views: "6.5K",
  },
];

export function BlogPage() {
  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = filteredArticles.filter((a) => a.featured);
  const regularArticles = filteredArticles.filter((a) => !a.featured);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Technical insights, tutorials, and engineering thoughts">
          Technical Blog
        </SectionTitle>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-6 h-6 text-yellow-500 mr-2" />
              <h3 className="text-2xl font-bold">Featured Articles</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/blog/${article.slug}`}>
                    <GlassCard className="h-full">
                      <div className="aspect-video rounded-lg overflow-hidden mb-4 relative group">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-yellow-500 text-black rounded-full text-xs font-bold">
                            FEATURED
                          </span>
                        </div>
                      </div>

                      <div className="mb-3">
                        <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs">
                          {article.category}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold mb-3 hover:text-blue-400 transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-gray-400 mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {article.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {article.readTime}
                          </div>
                        </div>
                        <span>{article.views} views</span>
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Regular Articles */}
        {regularArticles.length > 0 && (
          <section>
            <h3 className="text-2xl font-bold mb-6">All Articles</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularArticles.map((article, index) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/blog/${article.slug}`}>
                    <GlassCard className="h-full">
                      <div className="aspect-video rounded-lg overflow-hidden mb-4 relative group">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      <div className="mb-3">
                        <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs">
                          {article.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold mb-2 hover:text-blue-400 transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {article.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {article.readTime}
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {filteredArticles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No articles found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
