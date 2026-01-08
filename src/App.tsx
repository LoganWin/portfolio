import Hero from './components/Hero';
import Projects from './components/Projects';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <Hero />
        <Projects />
      </main>
    </div>
  );
}
