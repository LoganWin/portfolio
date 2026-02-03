/**
 * Routing Configuration
 *
 * Defines all routes for the portfolio application.
 *
 * @module routing
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Layout from './components/Layout';
import SkillsPage from './pages/SkillsPage';
import AboutPage from './pages/AboutPage';

/**
 * Routing component sets up the application routes
 *
 * Routes:
 * - / : Home page with hero and project nodes
 * - /about : About page with bio and background
 * - /skills : Skills page with neural network visualization
 */
export function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
