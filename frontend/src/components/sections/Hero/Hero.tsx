import { motion } from "motion/react";
import { ArrowRight, ExternalLink, User } from "lucide-react";
import { GradientButton } from "../../ui/GradientButton";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 blur-3xl" />

{/* bg-gradient-to-br */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full glass mb-6"
            >
              <span className="text-sm text-gray-300">
                Available for new opportunities
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Full Stack
              <br />
              <span className="gradient-text">Developer</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-4">
              Software Engineer
            </p>

            <p className="text-lg text-gray-400 mb-8 max-w-xl">
              Building modern web applications with cutting-edge technologies.
              Specialized in scalable architecture, cloud infrastructure, and
              delivering exceptional user experiences.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <GradientButton to="/projects" size="lg">
                View Projects
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </GradientButton>
              <GradientButton to="/contact" variant="outline" size="lg">
                Contact Me
              </GradientButton>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <User className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
          {/* Right Content - Professional Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-3xl blur-2xl" />
              <div className="relative glass rounded-3xl p-2">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                  alt="Professional Portrait"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
