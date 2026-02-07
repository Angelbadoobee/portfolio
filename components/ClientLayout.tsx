'use client';

import { ThemeProvider } from './ThemeProvider';
import Navigation from './Navigation';
import CursorGlow from './CursorGlow';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <CursorGlow />
      <Navigation />
      <main className="pt-20">
        {children}
      </main>
    </ThemeProvider>
  );
}
