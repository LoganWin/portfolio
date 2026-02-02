/**
 * App Component
 *
 * Main application component that assembles all sections of the portfolio.
 * This serves as the home page and primary entry point for the portfolio.
 *
 * @module App
 */

import Hero from './components/Hero';
import TechBar from './components/TechBar';

/**
 * App renders the complete portfolio landing page
 *
 * Structure:
 * - Hero: Main landing section with project nodes
 * - TechBar: Bottom bar showing technologies
 *
 * @returns JSX element
 */
export default function App() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section - Main landing with floating project nodes */}
      <Hero />

      {/* Technology Bar - Shows skills/technologies used */}
      <TechBar />
    </main>
  );
}
