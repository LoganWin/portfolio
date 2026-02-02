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

/**
 * Routing component sets up the application routes
 *
 * Routes:
 * - / : Home page with hero and project nodes
 * - /skills : Skills page with neural network visualization
 */
export function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/skills" element={<SkillsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
