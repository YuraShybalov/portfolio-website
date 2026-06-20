import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { SectionTitle } from "../../ui/SectionTitle";
import { GlassCard } from "../../ui/GlassCard";

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    year: "2017 - 2019",
    focus: "Distributed Systems & Machine Learning",
    gpa: "3.9/4.0",
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "MIT",
    year: "2013 - 2017",
    focus: "Full Stack Development",
    gpa: "3.8/4.0",
  },
];

export function EducationSection() {
  return (
    <section className="mb-20">
      <SectionTitle subtitle="Academic background and achievements">
        Education
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <GlassCard>
              <GraduationCap className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
              <p className="text-blue-400 mb-2">{edu.institution}</p>
              <p className="text-gray-400 mb-3">{edu.year}</p>
              <p className="text-gray-300 mb-2">Focus: {edu.focus}</p>
              <p className="text-cyan-400">GPA: {edu.gpa}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
