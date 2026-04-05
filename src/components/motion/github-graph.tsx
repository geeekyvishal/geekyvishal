'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// GitHub contribution colors (dark mode/light mode compatible via opacity blending)
const BASE_COLOR = 'rgb(var(--brand))'; // Will use brand/accent color to fit the theme
const LEVELS = [0.1, 0.3, 0.5, 0.7, 1.0]; // Opacity levels representing commit intensity

// Grid dimensions
const ROWS = 7;
const COLS = 22;

export function GithubGraph() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Generate initial grid state
  const grid = Array.from({ length: COLS }).map((_, col) =>
    Array.from({ length: ROWS }).map((_, row) => {
      // Create a pattern where the middle is more dense
      const centerFactor = 1 - Math.abs(col - COLS / 2) / (COLS / 2);
      const randomIntensity = Math.random() * centerFactor;
      
      let level = 0;
      if (randomIntensity > 0.8) level = 4;
      else if (randomIntensity > 0.6) level = 3;
      else if (randomIntensity > 0.4) level = 2;
      else if (randomIntensity > 0.2) level = 1;

      return { id: `${col}-${row}`, level };
    })
  );

  return (
    <div className="pointer-events-none absolute -right-[15%] top-0 z-0 h-[400px] w-[600px] select-none opacity-40 [mask-image:radial-gradient(circle_at_center,white_10%,transparent_70%)] dark:opacity-60 xl:-right-[10%]">
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          // Famous isometric projection
          transform: 'rotateX(60deg) rotateY(0deg) rotateZ(-45deg) scale(1.5)',
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="flex gap-1.5">
          {grid.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-1.5">
              {column.map((square, rowIndex) => (
                <motion.div
                  key={square.id}
                  className="h-3 w-3 rounded-sm bg-green-500"
                  initial={{ opacity: LEVELS[square.level] }}
                  animate={{
                    opacity: [
                      LEVELS[square.level],
                      LEVELS[Math.floor(Math.random() * 5)],
                      LEVELS[square.level],
                    ],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
