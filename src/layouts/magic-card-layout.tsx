import { motion } from "motion/react";
import { MagicCard } from "../components/react/magic-card";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { debounce } from 'lodash';

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const debouncedCheck = debounce(checkMobile, 250);
    debouncedCheck();
    window.addEventListener('resize', debouncedCheck);
    return () => {
      window.removeEventListener('resize', debouncedCheck);
      debouncedCheck.cancel();
    };
  }, []);

  if (isMobile) {
    return (
      <div className={`${className} rounded-md bg-background border-border border cloud-pattern`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      animate={{ opacity: 1, x: 0, y: 0 }}
      initial={initial}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <MagicCard
        className={className}
        backgroundPattern={backgroundPattern}
      >
        {children}
      </MagicCard>
    </motion.div>
  );
} 