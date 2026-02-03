/**
 * Layout Component
 *
 * Root layout wrapper that provides consistent structure across all pages.
 * Includes the navigation bar and handles route transitions.
 *
 * @module components/Layout
 */

import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';

/**
 * Layout provides the page shell with navigation
 *
 * Features:
 * - Fixed navbar at top
 * - Automatic scroll to top on route change
 * - Consistent dark background
 *
 * @returns JSX element
 */
export default function Layout() {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Calculate progress based on current route
  const getProgress = () => {
    if (location.pathname === '/skills') return 100;
    if (location.pathname === '/about') return 66;
    return 33; // Home page
  };
  const progress = getProgress();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Global Navigation */}
      <Navbar />

      {/* Page Content */}
      <Outlet />

      {/* Portfolio Progress Indicator - Fixed bottom right */}
      <div className="fixed bottom-8 right-8 z-40 text-right">
        <div className="h-1 w-32 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-white/40 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
