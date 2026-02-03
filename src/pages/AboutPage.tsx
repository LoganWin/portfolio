/**
 * AboutPage Component
 *
 * A dynamic about page with content nodes positioned in a neural network layout.
 * Each section is a node connected by SVG lines.
 *
 * @module pages/AboutPage
 */

import { Link } from 'react-router-dom';

/** Content node positions */
const NODE_POSITIONS = {
  header: { left: '50%', top: '12%' },
  bio: { left: '8%', top: '28%' },
  education: { left: '75%', top: '25%' },
  skills: { left: '12%', top: '55%' },
  interests: { left: '70%', top: '58%' },
  cta: { left: '50%', top: '85%' },
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Background Glow Effects */}
      <div className="glow-effect pointer-events-none absolute inset-0" />
      <div className="glow-secondary pointer-events-none absolute inset-0" />

      {/* Neural Network Connection Lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Header connections */}
        <line x1="50%" y1="15%" x2="25%" y2="30%" className="connection-line" />
        <line x1="50%" y1="15%" x2="78%" y2="28%" className="connection-line" />

        {/* Bio node connections */}
        <line x1="25%" y1="30%" x2="25%" y2="55%" className="connection-line" />
        <line x1="0%" y1="35%" x2="25%" y2="30%" className="connection-line" />

        {/* Education node connections */}
        <line x1="78%" y1="28%" x2="75%" y2="58%" className="connection-line" />
        <line x1="100%" y1="32%" x2="78%" y2="28%" className="connection-line" />

        {/* Skills node connections */}
        <line x1="25%" y1="55%" x2="50%" y2="70%" className="connection-line" />
        <line x1="0%" y1="60%" x2="25%" y2="55%" className="connection-line" />

        {/* Interests node connections */}
        <line x1="75%" y1="58%" x2="50%" y2="70%" className="connection-line" />
        <line x1="100%" y1="65%" x2="75%" y2="58%" className="connection-line" />

        {/* CTA connections */}
        <line x1="50%" y1="70%" x2="50%" y2="85%" className="connection-line" />
        <line x1="50%" y1="85%" x2="50%" y2="100%" className="connection-line" />

        {/* Cross connections for depth */}
        <line x1="25%" y1="30%" x2="75%" y2="58%" className="connection-line" />
        <line x1="78%" y1="28%" x2="25%" y2="55%" className="connection-line" />
      </svg>

      {/* Header Node - Center Top */}
      <div
        className="absolute z-10 -translate-x-1/2 text-center"
        style={{ left: NODE_POSITIONS.header.left, top: NODE_POSITIONS.header.top }}
      >
        <div className="node-dot mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          About <span className="text-white/60">Me</span>
        </h1>
      </div>

      {/* Bio Node - Left */}
      <div
        className="absolute z-10 max-w-sm"
        style={{ left: NODE_POSITIONS.bio.left, top: NODE_POSITIONS.bio.top }}
      >
        <div className="flex items-start gap-3">
          <div className="node-dot mt-2 shrink-0" />
          <div>
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/40">
              Who I Am
            </h2>
            <p className="text-sm leading-relaxed text-white/70">
              I'm Logan Winters, a Computer Science student at Worcester Polytechnic Institute and I am from Bucks County, PA. I'm
              passionate about creating solutions to complex problems and I am constantly taking on new challenges and learning.
            </p>
          </div>
        </div>
      </div>

      {/* Education Node - Right */}
      <div
        className="absolute z-10 max-w-xs text-right"
        style={{ left: NODE_POSITIONS.education.left, top: NODE_POSITIONS.education.top }}
      >
        <div className="flex items-start justify-end gap-3">
          <div>
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/40">
              Education
            </h2>
            <h3 className="font-semibold text-white">Worcester Polytechnic Institute</h3>
            <p className="text-sm text-white/60">B.S. Computer Science</p>
            <p className="text-xs text-white/40">2022 - 2026</p>
          </div>
          <div className="node-dot mt-2 shrink-0" />
        </div>
      </div>

      {/* Skills Node - Lower Left */}
      <div
        className="absolute z-10 max-w-sm"
        style={{ left: NODE_POSITIONS.skills.left, top: NODE_POSITIONS.skills.top }}
      >
        <div className="flex items-start gap-3">
          <div className="node-dot mt-2 shrink-0" />
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/40">
              My Favorite Hobbies
            </h2>
            <div className="flex flex-wrap gap-2">
              {['Golfing', 'Fishing', 'Sports','The Outdoors'].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interests Node - Lower Right */}
      <div
        className="absolute z-10 max-w-xs text-right"
        style={{ left: NODE_POSITIONS.interests.left, top: NODE_POSITIONS.interests.top }}
      >
        <div className="flex items-start justify-end gap-3">
          <div>
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/40">
              Beyond Class
            </h2>
            <p className="text-sm leading-relaxed text-white/70">
              I am a member of Theta Chi Epsilon at WPI where I am on the executive board. I am continuously developing my leadership skills and giving back to the people around me.
            </p>
          </div>
          <div className="node-dot mt-2 shrink-0" />
        </div>
      </div>

      {/* CTA Node - Bottom Center */}
      <div
        className="absolute z-10 -translate-x-1/2 text-center"
        style={{ left: NODE_POSITIONS.cta.left, top: NODE_POSITIONS.cta.top }}
      >
        <div className="node-dot mx-auto mb-4" />
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>

      {/* Central Hub - Invisible anchor point */}
      <div
        className="pointer-events-none absolute"
        style={{ left: '50%', top: '42%' }}
      >
        <div className="h-1 w-1 rounded-full bg-white/20" />
      </div>
    </div>
  );
}
