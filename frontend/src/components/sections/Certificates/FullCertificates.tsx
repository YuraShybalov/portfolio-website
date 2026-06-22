import { motion } from "framer-motion";
import { CheckCircle2, Calendar, ExternalLink, Download } from "lucide-react";
import { GlassCard } from "../../ui/GlassCard";

const filteredCertificates = [
  {
    id: 1,
    title: "AWS Solutions Architect - Professional",
    organization: "Amazon Web Services",
    date: "March 2025",
    category: "Cloud Computing",
    credentialId: "AWS-PSA-12345",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop",
    skills: ["AWS", "Cloud Architecture", "Infrastructure Design"],
  },
  {
    id: 2,
    title: "Certified Kubernetes Administrator",
    organization: "Cloud Native Computing Foundation",
    date: "January 2025",
    category: "DevOps",
    credentialId: "CKA-67890",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
    logo: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=100&h=100&fit=crop",
    skills: ["Kubernetes", "Container Orchestration", "DevOps"],
  },
  {
    id: 3,
    title: "Google Cloud Professional Developer",
    organization: "Google Cloud",
    date: "November 2024",
    category: "Cloud Computing",
    credentialId: "GCP-DEV-45678",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop",
    logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop",
    skills: ["GCP", "Cloud Development", "Microservices"],
  },
  {
    id: 4,
    title: "Meta Front-End Developer Professional",
    organization: "Meta (Facebook)",
    date: "September 2024",
    category: "Frontend Development",
    credentialId: "META-FE-23456",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop",
    skills: ["React", "JavaScript", "HTML/CSS"],
  },
  {
    id: 5,
    title: "MongoDB Certified Developer",
    organization: "MongoDB University",
    date: "July 2024",
    category: "Database",
    credentialId: "MONGO-DEV-78901",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop",
    logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=100&h=100&fit=crop",
    skills: ["MongoDB", "NoSQL", "Database Design"],
  },
  {
    id: 6,
    title: "Master of Science in Computer Science",
    organization: "Stanford University",
    date: "June 2019",
    category: "Education",
    credentialId: "MS-CS-2019",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop",
    skills: ["Computer Science", "Distributed Systems", "Machine Learning"],
  },
];

export function FullCertificatesSection() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {filteredCertificates.map((cert, index) => (
        <motion.div
          key={cert.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <GlassCard>
            {/* Certificate Preview */}
            <div className="aspect-video rounded-lg overflow-hidden mb-4 relative group">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="flex items-center space-x-3">
                  <img
                    src={cert.logo}
                    alt={cert.organization}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-sm text-gray-300">{cert.organization}</p>
                    <div className="flex items-center text-xs text-gray-400">
                      <Calendar className="w-3 h-3 mr-1" />
                      {cert.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate Info */}
            <div className="mb-3">
              <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs">
                {cert.category}
              </span>
            </div>

            <h3 className="text-xl font-bold mb-3">{cert.title}</h3>

            {/* Verification */}
            {cert.verified && (
              <div className="flex items-center text-sm text-green-500 mb-3">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Verified Credential
              </div>
            )}

            <div className="text-sm text-gray-400 mb-4">
              Credential ID:{" "}
              <span className="text-gray-300">{cert.credentialId}</span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2 pt-4 border-t border-white/10">
              <button className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                <ExternalLink className="w-4 h-4 mr-2" />
                Verify
              </button>
              <button className="flex-1 flex items-center justify-center px-4 py-2 glass hover:bg-white/10 rounded-lg transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Download
              </button>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}
