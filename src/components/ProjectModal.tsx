/**
 * ProjectModal Component
 *
 * A modal dialog that displays detailed information about a project.
 * Features smooth animations, backdrop blur, and keyboard accessibility.
 *
 * @module components/ProjectModal
 */

import { useEffect, useRef } from 'react';

/** Project data structure */
export interface Project {
  /** Unique identifier */
  id: string;
  /** Project name */
  name: string;
  /** Short tagline or descriptor */
  tagline: string;
  /** Full project description */
  description: string;
  /** Technologies used */
  technologies?: string[];
  /** Optional live demo URL */
  liveUrl?: string;
  /** Optional GitHub repository URL */
  githubUrl?: string;
  /** Optional image URL */
  imageUrl?: string;
  /** Optional message to display when no links are available */
  message?: string;
}

/** Props for the ProjectModal component */
interface ProjectModalProps {
  /** The project to display, or null if modal is closed */
  project: Project | null;
  /** Callback to close the modal */
  onClose: () => void;
}

/**
 * ProjectModal renders a detailed view of a selected project
 *
 * @param props - Component props
 * @returns JSX element or null if no project
 */
export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  /**
   * Handle escape key to close modal
   * Handle click outside to close modal
   */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (project) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  // Don't render if no project selected
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        ref={modalRef}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#111]/95 shadow-2xl backdrop-blur-xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-white/20 hover:text-white"
          aria-label="Close modal"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Project Image/Preview Area */}
        <div className="relative aspect-video w-full bg-gradient-to-br from-white/5 to-white/10">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.name}
              className="h-full w-full object-contain"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <div className="text-6xl font-bold text-white/10">
                {project.name.charAt(0)}
              </div>
            </div>
          )}
          {/* Vignette gradient overlay - darkens all edges */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(17,17,17,0.7)_70%,#111_100%)]" />
          {/* Extra bottom fade for smooth content transition */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <h2
              id="modal-title"
              className="mb-2 text-2xl font-bold text-white"
            >
              {project.name}
            </h2>
            <p className="text-white/60">{project.tagline}</p>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/40">
              About
            </h3>
            <p className="leading-relaxed text-white/70">{project.description}</p>
          </div>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-8">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/40">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons or Message */}
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-white/90"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View Code
              </a>
            )}
            {/* Show message when no links are available */}
            {!project.liveUrl && !project.githubUrl && project.message && (
              <p className="text-sm italic text-white/50">{project.message}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
