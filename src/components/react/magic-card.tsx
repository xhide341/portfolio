"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import React, { useCallback, useEffect, useRef } from "react";

import { cn } from "../../lib/utils";

interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  backgroundPattern?: string;
}

export function MagicCard({
  children,
  className,
  gradientSize = 400,
  gradientColor = "transparent",
  gradientOpacity = 0.8,
  backgroundPattern = "cloud-pattern",
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);
  const [isDark, setIsDark] = React.useState(false);

  useEffect(() => {
    setIsDark(localStorage.theme === 'dark');
    
    // Listen for both storage events (other tabs) and custom theme change events
    const handleThemeChange = () => {
      setIsDark(localStorage.theme === 'dark');
    };
    
    window.addEventListener('storage', handleThemeChange);
    document.addEventListener('themeChange', handleThemeChange);
    
    return () => {
      window.removeEventListener('storage', handleThemeChange);
      document.removeEventListener('themeChange', handleThemeChange);
    };
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (cardRef.current) {
        const { left, top } = cardRef.current.getBoundingClientRect();
        const clientX = e.clientX;
        const clientY = e.clientY;
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
      }
    },
    [mouseX, mouseY],
  );

  const handleMouseOut = useCallback(
    (e: MouseEvent) => {
      if (!e.relatedTarget) {
        document.removeEventListener("mousemove", handleMouseMove);
        mouseX.set(-gradientSize);
        mouseY.set(-gradientSize);
      }
    },
    [handleMouseMove, mouseX, gradientSize, mouseY],
  );

  const handleMouseEnter = useCallback(() => {
    document.addEventListener("mousemove", handleMouseMove);
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [handleMouseMove, mouseX, gradientSize, mouseY]);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [handleMouseEnter, handleMouseMove, handleMouseOut]);

  useEffect(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize, mouseX, mouseY]);

  return (
    <div
      ref={cardRef}
      className={cn("group relative flex size-full rounded-xl", className)}
    >
      <div
        className={cn(
          "absolute inset-px z-10 dark:z-10 rounded-md bg-background dark:bg-zinc-950 dark:backdrop-blur-sm",
          backgroundPattern
        )}
      />
      <div className="relative z-30 dark:z-30 w-full h-full">{children}</div>
      <motion.div
        className="pointer-events-none absolute inset-px z-10 dark:z-10 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
          `,
          opacity: gradientOpacity,
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-md duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
              ${isDark 
                ? 'hsl(217 91% 60%), hsl(217 91% 60%), hsl(0 0% 83.1%) 100%'
                : 'hsl(0 0% 0%), hsl(0 0% 15%), hsl(0 0% 89.8%) 100%'
              }
            )
          `,
        }}
      />
    </div>
  );
}
