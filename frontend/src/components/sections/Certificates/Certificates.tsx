import { motion } from "motion/react";
import { Award, ArrowRight } from "lucide-react";
import { GlassCard } from "../../ui/GlassCard";
import { SectionTitle } from "../../ui/SectionTitle";
import { Link } from "react-router";

const certificates = [
  { name: "AWS Solutions Architect", org: "Amazon Web Services" },
  { name: "Kubernetes Administrator", org: "CNCF" },
  { name: "Google Cloud Professional", org: "Google" },
];

function CertificatesSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          align="center"
          subtitle="Professional certifications and achievements"
        >
          Certificates & Awards
        </SectionTitle>

        <div className="grid md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard>
                <Award className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                <p className="text-gray-400">{cert.org}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/certificates"
            className="text-blue-500 hover:text-blue-400 inline-flex items-center"
          >
            View All Certificates
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CertificatesSection;
