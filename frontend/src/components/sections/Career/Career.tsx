import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { SectionTitle } from "../../ui/SectionTitle";
import { GlassCard } from "../../ui/GlassCard";

const careerJourney = [
  {
    year: "2024 - Present",
    role: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    description:
      "Leading development of enterprise-scale applications, mentoring junior developers, and architecting cloud infrastructure.",
    achievements: [
      "Reduced deployment time by 60% through CI/CD optimization",
      "Led team of 8 developers on flagship product",
      "Implemented microservices architecture serving 1M+ users",
    ],
  },
  {
    year: "2021 - 2024",
    role: "Full Stack Developer",
    company: "StartupXYZ",
    description:
      "Built core product features, established development workflows, and scaled infrastructure from 0 to 100k users.",
    achievements: [
      "Developed real-time collaboration features",
      "Optimized database queries reducing load by 70%",
      "Implemented comprehensive testing strategy",
    ],
  },
  {
    year: "2019 - 2021",
    role: "Frontend Developer",
    company: "Digital Agency Co.",
    description:
      "Created responsive web applications for clients across various industries.",
    achievements: [
      "Delivered 20+ client projects on time and within budget",
      "Improved average page load speed by 40%",
      "Established component library used across all projects",
    ],
  },
];

export function CareerSection() {
  return (
    <section className="mb-20">
      <SectionTitle subtitle="My professional experience timeline">
        Career Journey
      </SectionTitle>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-cyan-600" />

        <div className="space-y-12">
          {careerJourney.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative grid md:grid-cols-2 gap-8 ${
                index % 2 === 0 ? "" : "md:grid-flow-dense"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full -ml-2 mt-2 ring-4 ring-blue-600/20" />

              <div className={index % 2 === 0 ? "" : "md:col-start-2"}>
                <GlassCard>
                  <div className="flex items-center mb-4">
                    <Briefcase className="w-6 h-6 text-blue-500 mr-3" />
                    <span className="text-blue-500 font-medium">
                      {job.year}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{job.role}</h3>
                  <p className="text-purple-400 mb-4">{job.company}</p>
                  <p className="text-gray-400 mb-4">{job.description}</p>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-cyan-500 mr-2">→</span>
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
              <div className={index % 2 === 0 ? "md:col-start-2" : ""} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
