import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Certificates } from './components/Certificates';
import { Press } from './components/Press';
import { AIChatbot } from './components/AIChatbot';
import { Footer } from './components/Footer';

import { CustomCursor } from './components/animations/CustomCursor';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-cyan-500/30 font-sans">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Skills />
        <Timeline />
        <Projects />
        <Certificates />
        <Press />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
}

