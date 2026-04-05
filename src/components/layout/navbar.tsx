'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { navItems, profile } from '@/data/portfolio';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [activeId, setActiveId] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target instanceof HTMLElement) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.2, 0.45, 0.7] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'sticky top-0 z-50 transition-all duration-300',
      scrolled ? 'border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]/80 backdrop-blur-xl' : ''
    )}>
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
        <Link
          href="#home"
          className="text-sm font-semibold tracking-wide text-[rgb(var(--text))]"
        >
          {profile.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const id = item.href.replace('#', '');
            const isActive = activeId === id;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-full px-3 py-1.5 text-sm transition-colors',
                  isActive
                    ? 'bg-[rgb(var(--brand))] text-[rgb(var(--bg))]'
                    : 'text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text))]'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
