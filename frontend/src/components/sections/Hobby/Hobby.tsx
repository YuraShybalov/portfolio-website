import { motion } from "motion/react";
import { GlassCard } from "../../ui/GlassCard";
import { Radio, Zap, Cpu, Gauge, Wrench } from "lucide-react";

const engineeringProjects = [
  {
    title: "RC Aircraft Flight Control System",
    category: "Aerospace",
    icon: Radio,
    description:
      "Custom flight controller with telemetry, GPS navigation, and autonomous flight modes",
    metrics: [
      { label: "Flight Time", value: "45 min" },
      { label: "Range", value: "5 km" },
      { label: "Accuracy", value: "±2m" },
    ],
    tech: ["C++", "Arduino", "GPS", "IMU", "RF Communication"],
    images: [
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
    ],
    schematics: true,
  },
  {
    title: "BLDC Motor Test Bench",
    category: "Electronics",
    icon: Zap,
    description:
      "Automated testing platform for brushless DC motors with real-time performance analytics",
    metrics: [
      { label: "Max RPM", value: "50K" },
      { label: "Power", value: "2 kW" },
      { label: "Efficiency", value: "94%" },
    ],
    tech: ["Python", "Raspberry Pi", "Current Sensors", "PWM Controller"],
    images: [
      "https://images.unsplash.com/photo-1581092918484-8313e1f694e1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
    ],
    schematics: true,
  },
  {
    title: "FPV Racing Drone",
    category: "Robotics",
    icon: Cpu,
    description:
      "High-performance FPV racing quad with custom firmware and OSD telemetry",
    metrics: [
      { label: "Top Speed", value: "180 km/h" },
      { label: "Weight", value: "420g" },
      { label: "Latency", value: "<10ms" },
    ],
    tech: ["Betaflight", "C", "Video Tx/Rx", "ESC Programming"],
    images: [
      "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=600&h=400&fit=crop",
    ],
    schematics: true,
  },
  {
    title: "IoT Weather Station",
    category: "IoT",
    icon: Gauge,
    description:
      "Solar-powered weather station with cloud data logging and mobile app",
    metrics: [
      { label: "Sensors", value: "8" },
      { label: "Battery Life", value: "∞" },
      { label: "Update Rate", value: "1 min" },
    ],
    tech: ["ESP32", "MQTT", "Solar Panel", "BME280", "Wind Anemometer"],
    images: [
      "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&h=400&fit=crop",
    ],
    schematics: true,
  },
];

export function HobbySection() {
  return (
    <div className="space-y-16 mb-20">
      {engineeringProjects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <GlassCard hover={false} className="overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Content */}
              <div>
                <div className="flex items-center mb-4">
                  <project.icon className="w-8 h-8 text-blue-500 mr-3" />
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="glass rounded-lg p-3 text-center"
                    >
                      <div className="text-xl font-bold text-cyan-400 mb-1">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-400">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.schematics && (
                  <div className="flex items-center text-sm text-blue-400">
                    <Wrench className="w-4 h-4 mr-2" />
                    Schematics & Technical Diagrams Available
                  </div>
                )}
              </div>

              {/* Images */}
              <div className="grid grid-cols-2 gap-4">
                {project.images.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="aspect-video rounded-lg overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Image ${imgIndex + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}
