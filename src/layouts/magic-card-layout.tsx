import { motion } from "motion/react";
import { MagicCard } from "../components/react/magic-card";
import type { ReactNode } from "react";

interface MagicCardLayoutProps {
  children: ReactNode;
  initial?: { opacity: number; x?: number; y?: number };
  className?: string;
  backgroundPattern?: string;
}

export default function MagicCardLayout({
  children,
  initial = { opacity: 0, x: 0 },
  className = "size-full",
  backgroundPattern,
}: MagicCardLayoutProps) {
  return (
    <>
      {/* Mobile version */}
      <div className={`md:hidden ${className} rounded-md bg-background border-border border cloud-pattern`}>
        {children}
      </div>

      {/* Desktop version */}
      <motion.div
        animate={{ opacity: 1, x: 0, y: 0 }}
        initial={initial}
        transition={{ duration: 0.5 }}
        className={`hidden md:block ${className}`}
      >
        <MagicCard
          className={className}
          backgroundPattern={backgroundPattern}
        >
          {children}
        </MagicCard>
      </motion.div>
    </>
  );
} 