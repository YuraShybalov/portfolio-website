import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Link } from "react-router";

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function GradientButton({
  children,
  href,
  to,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}: GradientButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700",
    secondary: "bg-white/10 text-white hover:bg-white/20",
    outline:
      "border-2 border-white/20 text-white hover:border-white/40 hover:bg-white/5",
  };

  const baseClasses = `${sizeClasses[size]} ${variantClasses[variant]} rounded-lg font-medium transition-all ${className}`;

  const content = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={baseClasses}
    >
      {children}
    </motion.button>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
