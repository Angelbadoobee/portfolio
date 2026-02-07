'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function Navigation() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Tech Stack', path: '/techstack' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-purple-royal/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-amatic text-3xl font-bold text-purple-royal dark:text-gold">
            Tahshon Holmes
          </Link>

          <div className="flex items-center gap-8">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`font-amatic text-2xl transition-all duration-300 ${
                      pathname === item.path
                        ? 'text-gold font-bold'
                        : 'text-gray-700 dark:text-gray-300 hover:text-purple-royal dark:hover:text-gold'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-purple-royal/10 hover:bg-purple-royal/20 dark:bg-gold/10 dark:hover:bg-gold/20 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <FiSun className="w-5 h-5 text-gold" />
              ) : (
                <FiMoon className="w-5 h-5 text-purple-royal" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
