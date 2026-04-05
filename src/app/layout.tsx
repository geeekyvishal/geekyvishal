import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';

export const metadata: Metadata = {
  title: 'Vishal Singh | Developer Portfolio',
  description:
    'Portfolio of Vishal Singh, a full stack developer and iOS engineer building polished products and performant systems.'
};

const themeScript = `
  try {
    const theme = localStorage.getItem('portfolio-theme');
    document.documentElement.dataset.theme = theme === 'midnight' ? 'midnight' : 'ivory';
  } catch (error) {
    document.documentElement.dataset.theme = 'ivory';
  }
`;

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
