/**
 * Navbar Component
 *
 * A fixed navigation bar with a glassmorphism effect.
 * Features:
 * - Resume preview button on the left
 * - Centered navigation links in a pill container
 *
 * @module components/Navbar
 */

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ResumeModal from './ResumeModal';
import { useTheme } from '../context/ThemeContext';

/** Navigation link configuration */
interface NavLink {
  label: string;
  href: string;
  /** If true, uses React Router Link for client-side navigation */
  isRoute?: boolean;
}

/** Navigation links for the portfolio */
const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/', isRoute: true },
  { label: 'About', href: '/about', isRoute: true },
  { label: 'Skills', href: '/skills', isRoute: true }
];

export default function Navbar() {
  const location = useLocation();
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  /**
   * Determines if a route link is currently active
   */
  const isActiveRoute = (href: string) => {
    return location.pathname === href;
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Resume Preview Button */}
          <button
            onClick={() => setIsResumeOpen(true)}
            className="flex items-center gap-3 rounded-full bg-white/10 py-2 pl-3 pr-4 transition-colors hover:bg-white/20"
            aria-label="View Resume"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
              <svg
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <span className="text-sm font-medium text-white/80">Resume</span>
          </button>

          {/* Centered Navigation */}
          <nav className="glass hidden rounded-full px-2 py-2 md:flex">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                        isActiveRoute(link.href)
                          ? 'bg-white/10 text-white'
                          : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition-all hover:text-white"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}

              {/* LinkedIn Link with Arrow */}
              <li>
                <a
                  href="https://www.linkedin.com/in/logan-winters-31597b2b2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 flex items-center gap-1 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/20"
                >
                  LinkedIn
                  <svg
                    className="h-3.5 w-3.5"
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
              </li>
            </ul>

            {/* Theme Toggle Icon */}
            <button
              onClick={toggleTheme}
              className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </nav>

          {/* Right Side - Name & Contact */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:logan9win@gmail.com"
              className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 md:hidden"
            aria-label="Open menu"
          >
            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
