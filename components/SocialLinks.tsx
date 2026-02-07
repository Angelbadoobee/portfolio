'use client';

import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { SiLetterboxd } from 'react-icons/si';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export default function SocialLinks() {
  // Add your links here
  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/Angelbadoobee/', // GitHub URL
      icon: <FiGithub className="w-6 h-6" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tahshon-holmes/', // LinkedIn URL
      icon: <FiLinkedin className="w-6 h-6" />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/angelbadoobee/', // Instagram URL
      icon: <FiInstagram className="w-6 h-6" />,
    },
    {
      name: 'Serializd',
      url: 'https://www.serializd.com/user/Angelbadoobee/profile', // Serializd URL
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="14" fontWeight="bold">
            S
          </text>
        </svg>
      ),
    },
    {
      name: 'Letterboxd',
      url: 'https://letterboxd.com/Angelbadoobee/', // Letterboxd URL
      icon: <SiLetterboxd className="w-6 h-6" />,
    },
  ];

  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-purple-royal/10 dark:bg-purple-royal/20 text-purple-royal dark:text-gold hover:bg-gold/20 dark:hover:bg-gold/30 hover:scale-110 transition-all duration-300 glow-purple hover:glow-gold"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
