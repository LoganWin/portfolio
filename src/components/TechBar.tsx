/**
 * TechBar Component
 *
 * A horizontal bar displaying technology logos/icons.
 * Shows the technologies and tools used to build the website.
 *
 * @module components/TechBar
 */

import type { ReactElement } from 'react';

/** Technology item configuration */
interface TechItem {
  /** Technology name */
  name: string;
  /** SVG icon component */
  icon: ReactElement;
}

/**
 * Technology icons collection
 * Simple, monochrome icons for a clean aesthetic
 */
const TECHNOLOGIES: TechItem[] = [
  {
    name: 'React',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
        <path d="M12 21.35c-1.1 0-2.15-.13-3.12-.37-.97-.25-1.83-.6-2.55-1.07-.73-.47-1.28-1.04-1.65-1.7-.37-.66-.55-1.38-.55-2.17 0-.78.18-1.5.55-2.17.37-.66.93-1.23 1.65-1.7.73-.47 1.58-.82 2.55-1.07.97-.24 2.02-.37 3.12-.37s2.15.13 3.12.37c.97.25 1.83.6 2.55 1.07.73.47 1.28 1.04 1.65 1.7.37.67.55 1.39.55 2.17 0 .79-.18 1.51-.55 2.17-.37.66-.92 1.23-1.65 1.7-.72.47-1.58.82-2.55 1.07-.97.24-2.02.37-3.12.37Z" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    name: 'Vite',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2 5 13h5l-1 9 10-13h-5l1-7z" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h18v18H3V3zm10.71 14.86c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.49 0 .8.21 1.09.73l1.31-.87c-.55-.98-1.32-1.35-2.4-1.35-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .49-.45.84-1.15.84-.83 0-1.31-.43-1.67-1.03l-1.38.8zM14 11.26H9.5v1.41h1.81v5.79h1.56v-5.79H14v-1.41z" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.11 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.48 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35.98 1 2.11 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35-.98-1-2.11-2.15-4.59-2.15z" />
      </svg>
    ),
  },
];

/**
 * TechBar renders a horizontal display of technology icons
 *
 * @returns JSX element
 */
export default function TechBar() {
  return (
    <section className="border-t border-white/5 bg-[#0a0a0a] px-6 py-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
          Technologies used to build this website
        </p>
        {/* Technologies Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {TECHNOLOGIES.map((tech) => (
            <div
              key={tech.name}
              className="group flex cursor-default select-none items-center gap-2 text-white/30 transition-colors hover:text-white/60"
              title={tech.name}
            >
              {tech.icon}
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
