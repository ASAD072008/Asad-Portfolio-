import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Newspaper, ExternalLink, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { TiltCard } from './animations/TiltCard';

const pressMentions = [
  {
    id: 1,
    title: "India Tech Summit 2026 Hosted Enthusiastically at DKTE YCP",
    publication: 'Mahasatta',
    date: 'Jan 24, 2026',
    image: '/mahasatta.jpg', // User needs to upload mahasatta.jpg to public folder
    link: '#',
    excerpt: 'Coverage of Google Student Ambassador India Tech Summit 2026 organized at DKTE Society Yashwantrao Chavan Polytechnic.',
  },
  {
    id: 2,
    title: "Technical Skills Showcased at Ideathon",
    publication: 'Sakal',
    date: 'Jan 24, 2026',
    image: '/sakal.jpg', // User needs to upload sakal.jpg to public folder
    link: '#',
    excerpt: 'Highlighting the technical skills showcased during the Ideathon event by polytechnic and engineering students.',
  },
  {
    id: 3,
    title: "India Tech Summit Organized at DKTE's YCP",
    publication: 'Lokmat',
    date: 'Jan 24, 2026',
    image: '/lokmat.png', // User needs to upload lokmat.png to public folder
    link: '#',
    excerpt: 'Report on the enthusiastic response to the India Tech Summit 2026 at DKTE YCP.',
  },
  {
    id: 4,
    title: "Grand Conclusion of India Tech Summit 2026 at DKTE YCP",
    publication: 'Maza Maharashtra',
    date: 'Jan 23, 2026',
    image: '/maza-maharashtra.jpg', // User needs to upload maza-maharashtra.jpg to public folder
    link: '#',
    excerpt: 'Detailed coverage of the India Tech Summit 2026 successfully concluding at DKTE YCP.',
  },
  {
    id: 5,
    title: "Grand Celebration of India Tech Summit 2026 at YCP",
    publication: 'Tarun Bharat',
    date: 'Jan 2026',
    image: '/tarun-bharat.jpg', // User needs to upload tarun-bharat.jpg to public folder
    link: '#',
    excerpt: 'Highlighting the successful execution of Google Gemini Tech Hub initiative.',
  },
  {
    id: 6,
    title: "Enthusiastic Response to India Tech Summit 2026 at DKTE Polytechnic",
    publication: 'Pudhari',
    date: 'Jan 26, 2026',
    image: '/pudhari.jpg', // User needs to upload pudhari.jpg to public folder
    link: '#',
    excerpt: 'News report on the successful organization of India Tech Summit 2026 and students showcasing their technical skills.',
  }
];

export function Press() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % pressMentions.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + pressMentions.length) % pressMentions.length);
  };

  const item = pressMentions[currentIndex];

  return (
    <section id="press" className="relative py-24 md:py-32 overflow-hidden bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4 flex items-center gap-4">
            <Newspaper className="w-10 h-10 text-cyan-500 hidden md:block" />
            In the News
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-20">
            <button
              onClick={prevItem}
              className="p-3 rounded-full bg-white shadow-lg text-slate-800 hover:text-cyan-600 hover:scale-110 transition-all border border-slate-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-20">
            <button
              onClick={nextItem}
              className="p-3 rounded-full bg-white shadow-lg text-slate-800 hover:text-cyan-600 hover:scale-110 transition-all border border-slate-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="overflow-hidden py-4 px-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full max-w-2xl mx-auto"
              >
                <TiltCard className="h-full w-full" tiltIntensity={10}>
                  <div className="glass-panel border border-slate-200 rounded-3xl overflow-hidden group relative flex flex-col h-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(6,182,212,0.1)] transition-shadow duration-500">
                    {/* Image Area */}
                    <div className="relative h-64 md:h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-4 md:p-6">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-contain drop-shadow-sm transition-transform duration-700 group-hover:scale-105 rounded-sm"
                      />
                      <div className="absolute top-4 right-4 z-20 flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-md rounded-full text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-slate-200 shadow-sm">
                         <Newspaper className="w-6 h-6 cursor-pointer" />
                      </div>
                    </div>

                    <div className="p-8 flex-1 flex flex-col relative z-20 bg-white">
                      <div className="flex items-center gap-2 text-cyan-600 mb-3 text-sm font-semibold tracking-wide uppercase">
                        <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                        {item.publication}
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-3 group-hover:text-cyan-700 transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                        {item.excerpt}
                      </p>

                      <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100">
                         <div className="flex items-center gap-2 text-slate-500 font-mono text-sm md:text-base">
                            <Calendar className="w-5 h-5" />
                            {item.date}
                         </div>
                         <a href={item.link} className="flex items-center gap-1 text-slate-400 hover:text-cyan-600 transition-colors text-sm md:text-base font-medium">
                            Read Story <ExternalLink className="w-5 h-5" />
                         </a>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {pressMentions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "bg-cyan-500 w-8"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
