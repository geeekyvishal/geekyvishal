'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from 'react';

type ThemeName = 'ivory' | 'midnight';

type ThemeContextValue = {
  theme: ThemeName;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const STORAGE_KEY = 'portfolio-theme';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>('ivory');

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeName | null;
    const nextTheme = stored === 'midnight' ? 'midnight' : 'ivory';
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => {
        setTheme((current) => {
          const next = current === 'ivory' ? 'midnight' : 'ivory';
          document.documentElement.dataset.theme = next;
          window.localStorage.setItem(STORAGE_KEY, next);
          return next;
        });
      }
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }

  return context;
}
