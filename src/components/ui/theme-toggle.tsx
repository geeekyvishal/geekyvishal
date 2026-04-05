'use client';

import { useTheme } from '@/components/providers/theme-provider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="glass-pill inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--text))] transition hover:scale-[1.02]"
      aria-label="Toggle site theme"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inset-0 rounded-full bg-[rgba(var(--glow),0.42)] blur-sm" />
        <span className="relative rounded-full bg-[rgb(var(--brand))] px-[5px] py-[5px]" />
      </span>
      {theme === 'ivory' ? 'Light' : 'Dark'}
    </button>
  );
}
