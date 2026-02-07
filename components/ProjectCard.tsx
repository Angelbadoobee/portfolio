'use client';

import { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiExternalLink } from 'react-icons/fi';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  url: string;
  imageUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-royal/20 hover:border-gold/50">
      {/* Project Preview Image */}
      <div className="relative h-48 bg-gradient-to-br from-purple-royal/20 to-gold/10 dark:from-purple-dark/40 dark:to-gold/20">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-amatic text-4xl text-purple-royal dark:text-gold opacity-50">
              {project.title}
            </span>
          </div>
        )}
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-gray-900/90 rounded-full hover:bg-gold/90 transition-all duration-300 glow-gold"
          >
            <FiExternalLink className="w-5 h-5 text-purple-royal dark:text-gold" />
          </a>
        )}
      </div>

      {/* Tech Stack Badges */}
      <div className="px-4 py-3 flex flex-wrap gap-2">
        {project.techStack.map((tech, index) => (
          <span key={index} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>

      {/* Project Info */}
      <div className="px-4 pb-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between font-amatic text-2xl font-bold text-purple-royal dark:text-gold hover:text-gold dark:hover:text-purple-light transition-colors duration-300"
        >
          <span>{project.title}</span>
          {isExpanded ? (
            <FiChevronUp className="w-6 h-6" />
          ) : (
            <FiChevronDown className="w-6 h-6" />
          )}
        </button>

        {/* Dropdown Description */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? 'max-h-96 mt-3' : 'max-h-0'
          }`}
        >
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}
