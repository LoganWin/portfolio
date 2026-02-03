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
    name: 'Navigational Web Application',
    tagline: 'Software Engineering Project in Collaberation with Mass General Brigham',
    description:
      'This is a Full Stack Navigation Web Application built with the PERN stack for Mass General Brigham. The application allows users to navigate to a desired hosipital in the Mass Generall Brigham network using Google Maps API integration. Users may also send in a varity of service request using voice reconition. Other features include user authentication, 3 dimentional pathfinding in First Person View, step-by-step directions, map editor, and a hardware RFID login system. The project was developed as part of WPI\'s Software Engineering course, focusing on best practices in software development, teamwork, and strict agile methodologies.',
    technologies: ['Postgres', 'Express', 'React', 'Node', 'TypeScript', 'Tailwindcss', 'AWS'],
    message: "This application is not live and the code base is confidential.",
    imageUrl: 'SoftEng_Homepage.jpeg',
  },
  {
    id: 'project-2',
    name: 'TemporaAI',
    tagline: 'Student Focused, AI-Driven Calendar Platform',
    description:
      'TemporaAI is a professional web-based scheduling platform built with Next.js, React, TypeScript, and a PostgreSQL backend managed through Prisma ORM. Its core intelligence is powered by transformer-based Large Language Models (LLMs) capable of natural language processing, reasoning, and multimodal understanding, allowing the system to ingest unstructured inputs such as text, structured data, and OCR-extracted scheduling information from images (e.g., syllabi or timetables) and convert them into structured schedule objects. To ensure personalized and accurate scheduling, TemporaAI integrates Retrieval-Augmented Generation (RAG) to retrieve existing user constraints from a knowledge base and ground event recommendations, alongside Agentic Tool Use, enabling the AI to autonomously invoke structured functions that directly modify the schedule database. The prototype supports two primary features: AI-powered schedule generation/combination for creating complete personal schedules, and AI-powered group event planning that automatically finds meeting times across multiple users.',
    technologies: ['TypeScript', 'Next.js', 'Node', 'React', 'Prisma', 'PostgreSQL', 'Tailwindcss', 'OpenAI API'],
    liveUrl: 'https://tempora-ai.vercel.app/',
    githubUrl: 'https://github.com/hankpharris/tempora-ai.git',
    imageUrl: 'TemporaAI_Homepage.png',
  },
  {
    id: 'project-3',
    name: 'School Benchmarking Platform',
    tagline: 'Data-Driven Analytics Dashboard for Educational Institutions, Collaberating with Osprey Software',
    description:
      'A full-stack web application enabling schools to submit annual benchmarking data and visualize performance metrics against peer institutions. The platform features JWT-based authentication with role-based access for school users and system administrators, a multi-step data entry form with comprehensive validation (required fields, type checks, range validation), and interactive dashboards displaying KPIs across categories like facilities, academics, and athletics. Built with Chart.js for dynamic visualizations including bar and line charts, users can filter by year and peer groups while viewing their school\'s metrics against aggregated peer statistics. The backend enforces strict data privacy, ensuring schools only access their own data alongside anonymized peer group averages.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Chart.js', 'JWT', 'TypeScript'],
    message: 'Project in development - coming soon.',
    imageUrl: 'osprey.png',
  },
  {
    id: 'project-4',
    name: 'AI in Education',
    tagline: 'WPI - Iteractive Qualifying Project',
    description:
      'This project examines how generative AI tools like ChatGPT are transforming computational and STEM education. My team and I investigated how both lecturers and students are currently using AI, as well as the benefits, risks, and emerging challenges surrounding academic integrity, overreliance, and assessment design. Using a mixed-methods approach, we performed semi-structured faculty interviews and collected over 220 student survey responses to identify trends in AI adoption, attitudes, and knowledge gaps. The project culminated in actionable recommendations for responsibly integrating AI into higher education, emphasizing transparent policies, AI literacy training, and assessment strategies that preserve critical thinking while leveraging AI as a supportive learning tool. This research project was conducted with ZHAW Wädenswil in Zürich, Switzerland, as a part of WPI\s Cirriculum.',
    message: 'This project is research-based and does not have a live application.',
    imageUrl: 'Zurich.jpg',
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
        <p className="mx-auto max-w-2xl text-lg text-white/50">
          Dive into my portfolio, where innovative technology meets creative design.
          Building elegant solutions for complex problems.
        </p>
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
        <span className="text-sm">Scroll down</span>
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </section>
  );
}
