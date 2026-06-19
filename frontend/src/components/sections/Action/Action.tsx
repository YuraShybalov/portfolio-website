import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { GradientButton } from "../../ui/GradientButton";

function ActionSection() {
  return (
    <section className="py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Build Something
            <br />
            <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out!
          </p>
          <GradientButton to="/contact" size="lg">
            Get In Touch
            <ArrowRight className="ml-2 w-5 h-5 inline" />
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
}

export default ActionSection;
