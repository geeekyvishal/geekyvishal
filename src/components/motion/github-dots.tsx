'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Dot {
  id: string;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

export function GithubDots() {
  const [dots, setDots] = useState<Dot[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Calculate a dense grid of coordinates to map exactly within the 800x300 viewBox
    const columns = 80;
    const rows = 30;
    const spacing = 10; // px
    
    const newDots: Dot[] = [];
    
    for (let c = 0; c < columns; c++) {
      for (let r = 0; r < rows; r++) {
        // Render 70% of the dots for a highly dense structured look
        if (Math.random() > 0.3) {
          newDots.push({
            id: `${c}-${r}`,
            x: c * spacing,
            y: r * spacing,
            delay: Math.random() * 2, // Fast staggered start
            duration: 1.5 + Math.random() * 2, // Fast flickering (1.5s to 3.5s cycles)
          });
        }
      }
    }
    
    setDots(newDots);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden [mask-image:linear-gradient(to_bottom,white_20%,transparent_90%)]">
      <svg 
        className="absolute inset-0 h-full w-full opacity-60 dark:opacity-40"
        viewBox="0 0 800 300"
        preserveAspectRatio="xMidYMin slice"
      >
        {dots.map((dot) => (
          <motion.rect
            key={dot.id}
            x={dot.x}
            y={dot.y}
            width={2.5}
            height={2.5}
            className="fill-[rgb(var(--text-secondary))]"
            initial={{ opacity: 0.1 }}
            animate={{ opacity: [0.1, 0.9, 0.1] }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: dot.delay,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
