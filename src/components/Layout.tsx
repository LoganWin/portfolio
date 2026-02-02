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

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Global Navigation */}
      <Navbar />

      {/* Page Content */}
      <Outlet />
    </div>
  );
}
