import { motion } from "motion/react";
import type { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  children,
  subtitle,
  align = "left",
  className = "",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${alignClass} ${className}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
        {children}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl">{subtitle}</p>
      )}
    </motion.div>
  );
}
