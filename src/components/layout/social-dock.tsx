'use client';

import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, type MotionValue } from 'framer-motion';
import { useRef, useState } from 'react';
import { socialDockItems, type SocialItem } from '@/data/portfolio';
import { useTheme } from '@/components/providers/theme-provider';

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10.5 12 3l9 7.5" stroke="url(#homeGrad)" />
      <path d="M5 9.5V20h14V9.5" stroke="url(#homeGrad)" />
      <defs>
        <linearGradient id="homeGrad" x1="3" y1="3" x2="21" y2="20">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full">
      <defs>
        <linearGradient id="ghGrad" x1="0" y1="0" x2="24" y2="24">
          <stop stopColor="#6366F1" />
          <stop offset="1" stopColor="#A855F7" />
        </linearGradient>
      </defs>
      <path fill="url(#ghGrad)" d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.72-4.04-1.42-4.04-1.42A3.18 3.18 0 0 0 3.67 18c-1.08-.73.08-.72.08-.72a2.52 2.52 0 0 1 1.84 1.23 2.57 2.57 0 0 0 3.51 1 2.57 2.57 0 0 1 .77-1.61c-2.67-.3-5.48-1.34-5.48-5.98a4.68 4.68 0 0 1 1.25-3.26 4.35 4.35 0 0 1 .12-3.22s1-.33 3.3 1.24a11.4 11.4 0 0 1 6 0c2.29-1.57 3.29-1.24 3.29-1.24a4.35 4.35 0 0 1 .12 3.22 4.67 4.67 0 0 1 1.25 3.26c0 4.65-2.81 5.67-5.49 5.97a2.88 2.88 0 0 1 .82 2.24v3.32c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full">
      <defs>
        <linearGradient id="liGrad" x1="0" y1="3" x2="24" y2="21">
          <stop stopColor="#0077B5" />
          <stop offset="1" stopColor="#00A0DC" />
        </linearGradient>
      </defs>
      <path fill="url(#liGrad)" d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM3 9h4v12H3zm7 0h3.83v1.71h.05c.53-1 1.84-2.06 3.79-2.06C21.72 8.65 23 11 23 14.07V21h-4v-6.12c0-1.46-.03-3.34-2.03-3.34-2.03 0-2.34 1.58-2.34 3.22V21h-4z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full">
      <defs>
        <linearGradient id="xGrad" x1="1" y1="2" x2="23" y2="22">
          <stop stopColor="#1DA1F2" />
          <stop offset="1" stopColor="#0D8ECF" />
        </linearGradient>
      </defs>
      <path fill="url(#xGrad)" d="M18.9 2H22l-6.77 7.73L23.2 22h-6.26l-4.9-7.46L5.5 22H2.4l7.24-8.28L1 2h6.42l4.43 6.76L18.9 2Zm-1.1 18h1.73L6.47 3.9H4.6Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="url(#mailGrad)" />
      <path d="m4 7 8 6 8-6" stroke="url(#mailGrad)" />
      <defs>
        <linearGradient id="mailGrad" x1="3" y1="5" x2="21" y2="19">
          <stop stopColor="#F97316" />
          <stop offset="1" stopColor="#EF4444" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="url(#resGrad)" />
      <path d="M14 3v5h5" stroke="url(#resGrad)" />
      <path d="M9 13h6" stroke="url(#resGrad)" />
      <path d="M9 17h6" stroke="url(#resGrad)" />
      <defs>
        <linearGradient id="resGrad" x1="5" y1="3" x2="19" y2="22">
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" stroke="url(#sunGrad)" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" stroke="url(#sunGrad)" />
      <defs>
        <linearGradient id="sunGrad" x1="2" y1="2" x2="22" y2="22">
          <stop stopColor="#FBBF24" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="url(#moonGrad)" />
      <defs>
        <linearGradient id="moonGrad" x1="3" y1="3" x2="21" y2="21">
          <stop stopColor="#818CF8" />
          <stop offset="1" stopColor="#6366F1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function DockIcon({ kind }: { kind: SocialItem['kind'] }) {
  switch (kind) {
    case 'home': return <HomeIcon />;
    case 'github': return <GitHubIcon />;
    case 'linkedin': return <LinkedInIcon />;
    case 'x': return <XIcon />;
    case 'email': return <MailIcon />;
    case 'resume': return <ResumeIcon />;
  }
}

/* ── macOS magnification logic ── */
const ICON_SIZE = 40;       // fixed icon box size in px
const MAX_SCALE = 1.4;      // max scale factor (40 * 1.4 = 56px visual)
const DISTANCE = 120;       // pixel radius of magnification influence

function DockItem({
  children,
  mouseX,
  label,
}: {
  children: React.ReactNode;
  mouseX: MotionValue<number>;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return DISTANCE + 1;
    return val - rect.x - rect.width / 2;
  });

  const scaleTransform = useTransform(distance, [-DISTANCE, 0, DISTANCE], [1, MAX_SCALE, 1]);
  const scale = useSpring(scaleTransform, { mass: 0.1, stiffness: 200, damping: 14 });

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: ICON_SIZE, height: ICON_SIZE }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        ref={ref}
        style={{ scale }}
        className="flex h-10 w-10 origin-bottom items-center justify-center rounded-xl p-2"
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-2.5 py-1 text-xs font-medium text-[rgb(var(--text))] shadow-sm"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SocialDock() {
  const mouseX = useMotionValue(Infinity);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="dock-glass pointer-events-auto flex items-center gap-1 px-2 py-2"
      >
        {socialDockItems.map((item, index) => {
          const target =
            item.href.startsWith('http') || item.href.startsWith('mailto:') ? '_blank' : undefined;

          return (
            <div key={item.label} className="flex items-center">
              {index > 0 && (
                <div className="mx-0.5 hidden h-6 w-px bg-[rgb(var(--border))] sm:block" />
              )}
              <DockItem mouseX={mouseX} label={item.label}>
                <Link
                  href={item.href}
                  target={target}
                  className="flex h-full w-full items-center justify-center"
                  aria-label={item.label}
                >
                  <DockIcon kind={item.kind} />
                </Link>
              </DockItem>
            </div>
          );
        })}

        {/* Separator + Theme toggle */}
        <div className="mx-0.5 hidden h-6 w-px bg-[rgb(var(--border))] sm:block" />
        <DockItem mouseX={mouseX} label={theme === 'ivory' ? 'Light' : 'Dark'}>
          <button
            onClick={toggleTheme}
            className="flex h-full w-full items-center justify-center"
            aria-label="Toggle theme"
          >
            {theme === 'ivory' ? <SunIcon /> : <MoonIcon />}
          </button>
        </DockItem>
      </motion.div>
    </div>
  );
}
