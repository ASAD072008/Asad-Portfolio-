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
import { LoadingScreen } from './components/LoadingScreen';
import { useState, useEffect } from 'react';

import { CustomCursor } from './components/animations/CustomCursor';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Prevent scrolling while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [loading]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-cyan-500/30 font-sans">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
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

