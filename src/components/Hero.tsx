/**
 * Hero Component
 *
 * The main landing section of the portfolio featuring:
 * - Ethereal glow background effect
 * - Floating project nodes with connection lines
 * - Central headline and call-to-action buttons
 * - Scroll indicator and status displays
 *
 * @module components/Hero
 */

import { useState } from 'react';
import ProjectNode, { ProjectIcons } from './ProjectNode';
import ProjectModal from './ProjectModal';
import type { Project } from './ProjectModal';

/**
 * Project data configuration
 * Each project is represented by a floating node on the hero section
 * Placeholder content - update with actual project details
 */
const PROJECTS: Project[] = [
  {
    id: 'project-1',
    name: 'Cortex',
    tagline: 'AI-Powered Analytics',
    description:
      'Placeholder description for Project 1. This is where you would describe the project, its goals, challenges faced, and solutions implemented. Add details about your role and contributions.',
    technologies: ['React', 'Python', 'TensorFlow', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'project-2',
    name: 'Quant',
    tagline: 'Financial Dashboard',
    description:
      'Placeholder description for Project 2. Explain the purpose of the project, technical decisions made, and the impact it had. Include metrics if available.',
    technologies: ['TypeScript', 'Node.js', 'D3.js', 'Redis'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'project-3',
    name: 'Aelf',
    tagline: 'Mobile Application',
    description:
      'Placeholder description for Project 3. Detail the technologies used, architecture decisions, and any interesting technical challenges you solved.',
    technologies: ['React Native', 'Firebase', 'GraphQL'],
    githubUrl: 'https://github.com',
  },
  {
    id: 'project-4',
    name: 'Meeton',
    tagline: 'Collaboration Platform',
    description:
      'Placeholder description for Project 4. Share the story of the project, from ideation to implementation, and what you learned along the way.',
    technologies: ['Next.js', 'Prisma', 'WebRTC', 'AWS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

/**
 * Node position configuration for the floating project nodes
 * Positions are specified as percentages for responsive layout
 */
const NODE_POSITIONS = [
  { left: '8%', top: '28%' },   // Top-left (Cortex)
  { left: '82%', top: '30%' },  // Top-right (Quant)
  { left: '5%', top: '58%' },   // Bottom-left (Aelf)
  { left: '80%', top: '62%' },  // Bottom-right (Meeton)
];

/**
 * Icons for each project node
 */
const NODE_ICONS = [
  <ProjectIcons.Delta key="delta" />,
  <ProjectIcons.Gear key="gear" />,
  <ProjectIcons.Hexagon key="hex" />,
  <ProjectIcons.Network key="network" />,
];

export default function Hero() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentSlide] = useState(1);
  const totalSlides = 3;

  /**
   * Handles project node click
   * Opens the project modal with details
   */
  const handleProjectClick = (id: string) => {
    const project = PROJECTS.find((p) => p.id === id);
    if (project) {
      setSelectedProject(project);
    }
  };

  /**
   * Closes the project modal
   */
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Glow Effects */}
      <div className="glow-effect pointer-events-none absolute inset-0" />
      <div className="glow-secondary pointer-events-none absolute inset-0" />

      {/* SVG Connection Lines - Branching network pattern
          Node positions for reference:
          - Cortex: left 8%, top 28%
          - Quant: left 82%, top 30%
          - Aelf: left 5%, top 58%
          - Meeton: left 80%, top 62%
          Lines start from right edge of left nodes, left edge of right nodes
      */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left branch - from Cortex (8%, 28%) diagonal down */}
        <line
          x1="11%"
          y1="30%"
          x2="28%"
          y2="48%"
          className="connection-line"
        />
        {/* Left branch - from Aelf (5%, 58%) diagonal up to junction */}
        <line
          x1="8%"
          y1="60%"
          x2="28%"
          y2="48%"
          className="connection-line"
        />
        {/* Left branch continues from junction toward center */}
        <line
          x1="28%"
          y1="48%"
          x2="40%"
          y2="56%"
          className="connection-line"
        />

        {/* Right branch - from Quant (82%, 30%) diagonal down */}
        <line
          x1="82%"
          y1="32%"
          x2="68%"
          y2="48%"
          className="connection-line"
        />
        {/* Right branch - from Meeton (80%, 62%) diagonal up to junction */}
        <line
          x1="80%"
          y1="64%"
          x2="68%"
          y2="48%"
          className="connection-line"
        />
        {/* Right branch continues from junction toward center */}
        <line
          x1="68%"
          y1="48%"
          x2="58%"
          y2="54%"
          className="connection-line"
        />

        {/* Center vertical accent lines */}
        <line
          x1="46%"
          y1="62%"
          x2="46%"
          y2="88%"
          className="connection-line"
        />
        <line
          x1="54%"
          y1="65%"
          x2="54%"
          y2="92%"
          className="connection-line"
        />
      </svg>

      {/* Project Nodes */}
      <div className="pointer-events-auto absolute inset-0 hidden lg:block">
        {PROJECTS.map((project, index) => (
          <ProjectNode
            key={project.id}
            id={project.id}
            name={project.name}
            descriptor={`${(Math.random() * 30 + 1).toFixed(3)}`}
            icon={NODE_ICONS[index]}
            left={NODE_POSITIONS[index].left}
            top={NODE_POSITIONS[index].top}
            onClick={handleProjectClick}
          />
        ))}
      </div>

      {/* Central Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Badge */}
        <a
          href="#projects"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-green-400">
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="6" />
            </svg>
          </span>
          Explore My Work
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>

        {/* Main Headline */}
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          <span className="text-white/60">Logan</span>{' '}
          <span className="gradient-text">Winters</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-10 max-w-2xl text-lg text-white/50">
          Dive into my portfolio, where innovative technology meets creative design.
          Building elegant solutions for complex problems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition-all hover:bg-white/90"
          >
            View Projects
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7V17"
              />
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
          >
            Discover More
          </a>
        </div>
      </div>

      {/* Bottom Left - Scroll Indicator */}
      <div className="absolute bottom-8 left-8 flex items-center gap-3 text-white/40">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10">
          <svg
            className="h-4 w-4 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
        <span className="text-sm">
          0{currentSlide}/0{totalSlides} . Scroll down
        </span>
      </div>

      {/* Bottom Right - Status Indicator */}
      <div className="absolute bottom-8 right-8 text-right">
        <div className="mb-2 text-sm text-white/40">Portfolio horizons</div>
        <div className="h-1 w-32 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-white/40 transition-all duration-500"
            style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
          />
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </section>
  );
}
