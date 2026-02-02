/**
 * ProjectNode Component
 *
 * A floating interactive node representing a project.
 * Displays project name, an icon, and a metric/descriptor.
 * Clicking the node opens the project modal.
 *
 * @module components/ProjectNode
 */

import type { ReactNode } from 'react';

/** Props for the ProjectNode component */
export interface ProjectNodeProps {
  /** Unique identifier for the project */
  id: string;
  /** Display name of the project */
  name: string;
  /** Short descriptor or metric shown below the name */
  descriptor: string;
  /** Icon element to display */
  icon: ReactNode;
  /** Position from left edge (percentage) */
  left: string;
  /** Position from top edge (percentage) */
  top: string;
  /** Callback when node is clicked */
  onClick: (id: string) => void;
}

/**
 * ProjectNode renders a single floating project indicator
 *
 * @param props - Component props
 * @returns JSX element
 */
export default function ProjectNode({
  id,
  name,
  descriptor,
  icon,
  left,
  top,
  onClick,
}: ProjectNodeProps) {
  return (
    <button
      onClick={() => onClick(id)}
      className="group absolute flex items-center gap-3 text-left transition-all hover:scale-105"
      style={{ left, top }}
      aria-label={`View ${name} project`}
    >
      {/* Icon Container */}
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 backdrop-blur-sm transition-all group-hover:border-white/40 group-hover:bg-white/10">
        {icon}
      </div>

      {/* Project Info */}
      <div className="flex flex-col">
        {/* Dot and Name Row */}
        <div className="flex items-center gap-2">
          <span className="node-dot" />
          <span className="text-sm font-medium text-white transition-colors group-hover:text-white/90">
            {name}
          </span>
        </div>

        {/* Descriptor */}
        <span className="ml-4 text-xs text-white/50">{descriptor}</span>
      </div>
    </button>
  );
}

/**
 * Collection of reusable icons for project nodes
 * Each icon is designed to be used within the ProjectNode component
 */
export const ProjectIcons = {
  /** Triangle/Delta icon - represents change or progress */
  Delta: () => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 22h20L12 2z" />
    </svg>
  ),

  /** Gear/Settings icon - represents tools or utilities */
  Gear: () => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  ),

  /** Code brackets icon - represents development projects */
  Code: () => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),

  /** Wave/Chart icon - represents data or analytics */
  Chart: () => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 12h4l3-9 4 18 3-9h4" />
    </svg>
  ),

  /** Hexagon icon - represents modular systems */
  Hexagon: () => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
    </svg>
  ),

  /** Circle with lines icon - represents connectivity */
  Network: () => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </svg>
  ),
};
