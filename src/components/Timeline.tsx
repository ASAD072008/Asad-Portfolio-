import { motion } from 'motion/react';
import { Calendar, UserCheck, Code, Mic } from 'lucide-react';
import { staggerContainer, staggerItem } from '../lib/animations';

const milestones = [
  {
    id: 1,
    role: "Google Student Ambassador",
    description: "Representing and advocating Google/Gemini AI technologies on campus.",
    icon: <UserCheck className="w-5 h-5 text-cyan-500" />,
    border: "border-cyan-400",
    dotBorder: "border-cyan-200/50",
    shadow: "shadow-[0_0_15px_rgba(6,182,212,0.5)]"
  },
  {
    id: 2,
    role: "Leading Member - Ideathon",
    description: "Served as a key leader for the India Tech Summit Inovet 2025.",
    icon: <Code className="w-5 h-5 text-violet-500" />,
    border: "border-violet-400",
    dotBorder: "border-violet-200/50",
    shadow: "shadow-[0_0_15px_rgba(139,92,246,0.5)]"
  },
  {
    id: 3,
    role: "Event Management & Hosting",
    description: "Managing grand-scale technical events, anchoring, and hosting gaming competitions.",
    icon: <Mic className="w-5 h-5 text-fuchsia-500" />,
    border: "border-fuchsia-400",
    dotBorder: "border-fuchsia-200/50",
    shadow: "shadow-[0_0_15px_rgba(217,70,239,0.5)]"
  }
];

export function Timeline() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Leadership & Milestones
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full mx-auto"></div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l-2 border-slate-200 ml-4 md:ml-0 md:pl-0"
        >
          {milestones.map((item) => (
            <motion.div 
              key={item.id}
              variants={staggerItem}
              className="mb-12 ml-8 md:ml-12 relative group"
            >
              {/* Timeline dot */}
              <div className={`absolute -left-[41px] md:-left-[57px] top-1 p-2 bg-white border-2 rounded-full z-10 ${item.dotBorder} leading-none flex items-center justify-center transition-all duration-500 group-hover:scale-125 shadow-sm`}>
                {item.icon}
              </div>

              <div className={`glass-panel bg-white p-8 rounded-3xl border-l-[4px] ${item.border} hover:-translate-y-2 hover:ml-2 transition-all duration-500 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]`}>
                <h3 className="text-xl font-display font-semibold text-slate-900 mb-2 transition-colors duration-300">{item.role}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
