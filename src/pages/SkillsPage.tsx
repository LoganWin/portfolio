/**
 * SkillsPage Component
 *
 * A full-page skills display with a neural network visualization.
 * Each skill category is represented as a node, connected by lines
 * similar to the homepage project nodes.
 *
 * @module pages/SkillsPage
 */

import { useState } from 'react';
import type { ReactNode } from 'react';

/** Skill category with position data */
interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
  icon: ReactNode;
  /** Position as percentage from left */
  left: string;
  /** Position as percentage from top */
  top: string;
}

/** Connection definitions between skill categories */
const CONNECTIONS: [string, string][] = [
  ['languages', 'backend'],
  ['frontend', 'backend'],
  ['backend', 'tools'],
  ['backend', 'coursework'],
  ['languages', 'tools'],
  ['frontend', 'coursework'],
  ['tools', 'coursework'],
];

/** Skill categories with their positions for the neural network layout */
const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++', 'SQL'],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    left: '15%',
    top: '25%',
  },
  {
    id: 'frontend',
    name: 'Frontend',
    skills: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'HTML/CSS'],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    left: '75%',
    top: '20%',
  },
  {
    id: 'backend',
    name: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'PrismaORM'],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    ),
    left: '50%',
    top: '45%',
  },
  {
    id: 'tools',
    name: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'AWS', 'Linux', 'Figma', "Jira"],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    left: '20%',
    top: '65%',
  },
  {
    id: 'coursework',
    name: 'Coursework',
    skills: ['Software Engineering', 'Webware', 'Algorithms', 'Databases', 'Operating Systems', 'Systems Programming', 'Artificial Intelligence', 'Object-Oriented Design'],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    left: '80%',
    top: '70%',
  },
];

/**
 * SkillNode Component
 * Renders a single skill category as an interactive node
 */
interface SkillNodeProps {
  category: SkillCategory;
  isSelected: boolean;
  onClick: () => void;
}

/**
 * Gets the position of a skill category by ID
 * Returns coordinates suitable for SVG line endpoints
 * The icon is 48px (h-12) positioned at the start of each button
 */
function getNodePosition(id: string): { x: string; y: string } | null {
  const category = SKILL_CATEGORIES.find((c) => c.id === id);
  if (!category) return null;

  const left = parseFloat(category.left);
  const top = parseFloat(category.top);

  // Icon center offset: ~1.5% horizontally (half of ~3% icon width on screen)
  // and ~1.5% vertically to hit the center of the circular icon
  return {
    x: `${left + 1.5}%`,
    y: `${top + 1.5}%`,
  };
}

function SkillNode({ category, isSelected, onClick }: SkillNodeProps) {
  return (
    <button
      onClick={onClick}
      className={`group absolute flex items-center gap-3 text-left transition-all hover:scale-105 ${
        isSelected ? 'scale-105' : ''
      }`}
      style={{ left: category.left, top: category.top }}
    >
      {/* Icon Container */}
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-sm transition-all ${
          isSelected
            ? 'border-white/40 bg-white/20 text-white'
            : 'border-white/20 bg-white/5 text-white/80 group-hover:border-white/40 group-hover:bg-white/10'
        }`}
      >
        {category.icon}
      </div>

      {/* Category Info */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/60" />
          <span
            className={`text-sm font-medium transition-colors ${
              isSelected ? 'text-white' : 'text-white group-hover:text-white/90'
            }`}
          >
            {category.name}
          </span>
        </div>
        <span className="ml-4 text-xs text-white/50">
          {category.skills.length} skills
        </span>
      </div>
    </button>
  );
}

/**
 * SkillsPage renders the full neural network skills visualization
 */
export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | null>(null);

  const handleCategoryClick = (category: SkillCategory) => {
    setSelectedCategory(selectedCategory?.id === category.id ? null : category);
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      {/* Background Glow Effects */}
      <div className="glow-effect pointer-events-none absolute inset-0" />
      <div className="glow-secondary pointer-events-none absolute inset-0" />

      {/* Neural Network Connection Lines - Dynamically generated from node positions */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {CONNECTIONS.map(([fromId, toId]) => {
          const from = getNodePosition(fromId);
          const to = getNodePosition(toId);
          if (!from || !to) return null;
          return (
            <line
              key={`${fromId}-${toId}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              className="connection-line"
            />
          );
        })}
      </svg>

      {/* Page Header */}
      <div className="relative z-10 px-6 pb-8 pt-24 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Skills & <span className="text-white/60">Technologies</span>
        </h1>
        <p className="mx-auto max-w-xl text-lg text-white/50">
          Click on any node to explore the skills in that category
        </p>
      </div>

      {/* Skill Nodes */}
      <div className="pointer-events-auto absolute inset-0 hidden pt-20 lg:block">
        {SKILL_CATEGORIES.map((category) => (
          <SkillNode
            key={category.id}
            category={category}
            isSelected={selectedCategory?.id === category.id}
            onClick={() => handleCategoryClick(category)}
          />
        ))}
      </div>

      {/* Mobile Fallback - List View */}
      <div className="relative z-10 px-6 py-8 lg:hidden">
        <div className="grid gap-4 sm:grid-cols-2">
          {SKILL_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className={`rounded-xl border p-4 text-left transition-all ${
                selectedCategory?.id === category.id
                  ? 'border-white/30 bg-white/10'
                  : 'border-white/10 bg-white/5 hover:border-white/20'
              }`}
            >
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80">
                  {category.icon}
                </div>
                <div>
                  <div className="font-medium text-white">{category.name}</div>
                  <div className="text-xs text-white/50">{category.skills.length} skills</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Category Skills Panel */}
      {selectedCategory && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0a0a0a]/95 p-6 backdrop-blur-xl lg:absolute lg:bottom-8 lg:left-1/2 lg:right-auto lg:w-full lg:max-w-xl lg:-translate-x-1/2 lg:rounded-2xl lg:border">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
                {selectedCategory.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{selectedCategory.name}</h3>
            </div>
            <button
              onClick={() => setSelectedCategory(null)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-white/20 hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedCategory.skills.map((skill) => (
              <span
                key={skill}
                className="cursor-default select-none rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/70 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Back to Home Link */}
      <a
        href="/"
        className="fixed bottom-8 left-8 z-40 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 hover:text-white lg:absolute"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Home
      </a>
    </div>
  );
}
