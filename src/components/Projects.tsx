import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ShieldAlert, Map, Sparkles, X, PlayCircle, Globe } from 'lucide-react';
import { TiltCard } from './animations/TiltCard';
import { staggerContainer, staggerItem } from '../lib/animations';

const projects = [
  {
    id: 1,
    title: 'Deepfake KYC Buster',
    description: 'An advanced security solution developed to counter identity fraud and detect AI-generated media during digital KYC verification.',
    icon: <ShieldAlert className="w-8 h-8 text-cyan-500" />,
    badges: ['Python', 'AI', 'Security'],
    aiInsight: "This project leverages dense neural networks to analyze facial artifact inconsistencies introduced by deepfake models. It operates at 98.4% accuracy on the latest Gen-Z data sets, acting as a critical firewall for fintech onboarding.",
    gradient: 'from-cyan-500/10 to-blue-600/10',
    border: 'border-cyan-500/20',
    links: [
      { label: 'Demo Video', url: 'https://youtu.be/ubsElKFnOvc', icon: <PlayCircle className="w-4 h-4" /> },
      { label: 'Live App', url: 'https://kyc-sheild-e7fl.vercel.app?_vercel_share=2GNlKiF8BPclm1ij6fptPjo7fOOlI7jf', icon: <Globe className="w-4 h-4" /> }
    ]
  },
  {
    id: 2,
    title: 'Interactive Travel Discovery Platform',
    description: 'A visually rich, feature-packed web application for seamless travel planning and exploration. Features immersive maps and curated itineraries.',
    icon: <Map className="w-8 h-8 text-violet-500" />,
    badges: ['HTML', 'CSS', 'UI/UX'],
    aiInsight: null,
    gradient: 'from-violet-500/10 to-purple-600/10',
    border: 'border-violet-500/20',
    links: []
  }
];

export function Projects() {
  const [activeInsight, setActiveInsight] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <div key={project.id}>
              <TiltCard className="h-full" tiltIntensity={25}>
                <motion.div
                variants={staggerItem}
                className={`glass-panel border ${project.border} rounded-3xl overflow-hidden group relative flex flex-col h-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-shadow duration-500`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                {/* Animated corner accent */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-slate-100 rounded-full blur-[20px] group-hover:bg-slate-200 transition-colors duration-500 group-hover:scale-150"></div>
                
                <div className="p-8 pb-10 relative z-10 flex-1 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 bg-white shadow-sm rounded-2xl border border-slate-100 group-hover:scale-105 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors bg-slate-50 hover:bg-slate-100 rounded-full">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-3 transition-all">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {project.links && project.links.length > 0 && (
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 hover:border-cyan-500/50 rounded-xl text-sm text-slate-700 transition-all font-medium shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5"
                        >
                          {link.icon}
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                    <div className="flex gap-2">
                      {project.badges.map(badge => (
                        <span key={badge} className="px-3 py-1 bg-slate-50 rounded-lg text-xs font-mono text-slate-600 border border-slate-100 font-medium">
                          {badge}
                        </span>
                      ))}
                    </div>

                    {project.aiInsight && (
                      <button
                        onClick={() => setActiveInsight(project.aiInsight)}
                        className="flex items-center gap-2 text-xs font-medium text-cyan-600 hover:text-cyan-700 border border-cyan-500/30 px-4 py-2 rounded-xl hover:bg-cyan-50 transition-colors bg-white shadow-sm"
                      >
                        <Sparkles className="w-3 h-3" />
                        Get AI Insight
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            </TiltCard>
            </div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeInsight && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 10, opacity: 0 }}
              transition={{ type: "spring", mass: 0.6, stiffness: 150, damping: 15 }}
              className="bg-white border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-3xl p-8 max-w-lg w-full relative"
            >
              <button 
                onClick={() => setActiveInsight(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-800 bg-slate-50 hover:bg-slate-100 p-2 rounded-full transition-colors"
               >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-3 mb-6 text-cyan-500">
                <div className="p-2 bg-cyan-50 rounded-xl">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-display font-bold text-slate-900">AI System Insight</h4>
              </div>
              
              <p className="text-slate-600 leading-relaxed font-mono text-sm border-l-[3px] border-cyan-400 pl-5 py-2 bg-slate-50/50 rounded-r-xl">
                {activeInsight}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
