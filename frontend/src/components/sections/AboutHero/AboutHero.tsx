import { motion } from "motion/react";

export function AboutHeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-20"
    >
      <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">
        About Me
      </h1>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xl text-gray-300 mb-6">
            I'm a passionate Full Stack Developer with over 5 years of
            experience building scalable web applications. My journey in
            software engineering has been driven by curiosity and a desire to
            create impactful solutions.
          </p>
          <p className="text-lg text-gray-400 mb-6">
            I specialize in modern web technologies, cloud architecture, and
            leading development teams. When I'm not coding, you'll find me
            contributing to open-source projects, writing technical articles, or
            exploring new technologies.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl glass p-8">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=600&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
