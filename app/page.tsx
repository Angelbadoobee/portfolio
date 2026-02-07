import SocialLinks from '@/components/SocialLinks';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full text-center space-y-8 fade-in">
        <div className="space-y-4">
          <h1 className="font-amatic text-7xl md:text-9xl font-bold text-purple-royal dark:text-gold">
            Tahshon Holmes
          </h1>
          <p className="font-amatic text-4xl md:text-5xl text-gray-700 dark:text-gray-300">
            aka Angel
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
            Web Developer & Designer from Virginia Beach, VA
          </p>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-500">
            VCU Computer Science Graduate | Building Beautiful Digital Experiences
          </p>
        </div>

        <div className="flex justify-center pt-6">
          <SocialLinks />
        </div>

        <div className="flex justify-center gap-6 pt-8">
          <Link
            href="/about"
            className="px-8 py-3 bg-purple-royal text-white dark:bg-gold dark:text-gray-900 rounded-full font-amatic text-2xl font-bold hover:scale-105 transition-all duration-300 glow-purple dark:glow-gold"
          >
            About Me
          </Link>
          <Link
            href="/projects"
            className="px-8 py-3 border-2 border-purple-royal dark:border-gold text-purple-royal dark:text-gold rounded-full font-amatic text-2xl font-bold hover:bg-purple-royal hover:text-white dark:hover:bg-gold dark:hover:text-gray-900 transition-all duration-300"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
