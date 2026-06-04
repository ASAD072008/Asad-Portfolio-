import { motion } from 'motion/react';
import { Terminal, Globe, Wrench } from 'lucide-react';
import { staggerContainer, staggerItem } from '../lib/animations';
import { TiltCard } from './animations/TiltCard';

export function Skills() {
  const customStyles = `
    .skill-badge {
      position: relative;
      overflow: hidden;
    }
    .skill-badge::before {
      content: '';
      position: absolute;
      top: 0; left: -100%; width: 100%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
      transition: all 0.5s ease;
    }
    .skill-badge:hover::before {
      left: 100%;
    }
  `;

  return (
    <section id="skills" className="py-24 relative">
      <style>{customStyles}</style>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-700/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Technical Ecosystem
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Programming Languages */}
          <TiltCard tiltIntensity={25}>
            <motion.div
              variants={staggerItem}
              className="glass-panel p-8 rounded-3xl border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 group shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(6,182,212,0.1)] h-full cursor-default bg-white"
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="p-3 bg-cyan-50 rounded-xl text-cyan-600 group-hover:scale-110 transition-transform"
                >
                  <Terminal className="w-6 h-6" />
                </motion.div>
                <h3 className="text-xl font-display font-semibold text-slate-900">Core Languages</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['C', 'C++', 'Java', 'Python'].map((skill, i) => (
                  <motion.span 
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1), type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="skill-badge px-4 py-2 bg-slate-50 rounded-xl font-mono text-sm text-cyan-700 border border-slate-100 hover:border-cyan-500/30 hover:bg-cyan-50 transition-all cursor-default shadow-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </TiltCard>

          {/* Web Technologies */}
          <TiltCard tiltIntensity={25}>
            <motion.div
              variants={staggerItem}
              className="glass-panel p-8 rounded-3xl border-violet-500/20 hover:border-violet-500/40 transition-all duration-500 group shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(139,92,246,0.1)] h-full cursor-default bg-white"
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  whileHover={{ rotate: 90 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="p-3 bg-violet-50 rounded-xl text-violet-600 group-hover:scale-110 transition-transform"
                >
                  <Globe className="w-6 h-6" />
                </motion.div>
                <h3 className="text-xl font-display font-semibold text-slate-900">Web Dev</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['HTML5', 'CSS3'].map((skill, i) => (
                  <motion.span 
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1), type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="skill-badge px-4 py-2 bg-slate-50 rounded-xl font-mono text-sm text-violet-700 border border-slate-100 hover:border-violet-500/30 hover:bg-violet-50 transition-all cursor-default shadow-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </TiltCard>

          {/* Platforms & Tools */}
          <TiltCard tiltIntensity={25}>
            <motion.div
              variants={staggerItem}
              className="glass-panel p-8 rounded-3xl border-fuchsia-500/20 hover:border-fuchsia-500/40 transition-all duration-500 group shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(217,70,239,0.1)] h-full cursor-default bg-white"
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  whileHover={{ rotate: 30 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="p-3 bg-fuchsia-50 rounded-xl text-fuchsia-600 group-hover:scale-110 transition-transform"
                >
                  <Wrench className="w-6 h-6" />
                </motion.div>
                <h3 className="text-xl font-display font-semibold text-slate-900">Platforms & Tools</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['VS Code', 'IntelliJ IDEA', 'Google AI Studio', 'Claude', 'Emergent', 'Firebase', 'GitHub', 'Figma'].map((skill, i) => (
                  <motion.span 
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.05), type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="skill-badge px-4 py-2 bg-slate-50 rounded-xl font-mono text-sm text-fuchsia-700 border border-slate-100 hover:border-fuchsia-500/30 hover:bg-fuchsia-50 transition-all cursor-default shadow-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
