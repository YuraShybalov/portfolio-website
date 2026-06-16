import { motion } from "motion/react";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "blue" | "purple" | "cyan" | "none";
}

export function GlassCard({
  children,
  className = "",
  hover = true,
  glow = "none",
}: GlassCardProps) {
  const glowClass =
    glow === "blue"
      ? "glow-blue"
      : glow === "purple"
        ? "glow-purple"
        : glow === "cyan"
          ? "glow-cyan"
          : "";

  return (
    <motion.div
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.3 }}
      className={`glass rounded-xl p-6 ${glowClass} ${className}`}
    >
      {children}
    </motion.div>
  );
}
