import { motion, useInView } from 'motion/react';
import { Mic2, Trophy, Flame } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const stats = [
  {
    id: 1,
    value: 20,
    suffix: '+',
    label: 'Stage Talks, Campaigns & Event Management',
    icon: <Mic2 className="w-8 h-8 text-cyan-400" />,
    delay: 0.1,
  },
  {
    id: 2,
    value: 1,
    suffix: '',
    label: 'Google Student Ambassador Role',
    icon: <Trophy className="w-8 h-8 text-violet-400" />,
    delay: 0.2,
  },
  {
    id: 3,
    value: 1, // Custom text mapped below
    isText: true,
    textValue: 'Top',
    suffix: '',
    label: 'Ideathon Leading Member (Inovet 2025)',
    icon: <Flame className="w-8 h-8 text-fuchsia-400" />,
    delay: 0.3,
  },
];

function Counter({ from, to, suffix, isText, textValue }: { from: number; to: number; suffix: string; isText?: boolean; textValue?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      if (isText) return;
      let startTimestamp: number | null = null;
      const duration = 2000;
      
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Easing out cubic: 1 - Math.pow(1 - progress, 3)
        const easeOut = 1 - Math.pow(1 - progress, 5);
        setCount(Math.floor(easeOut * (to - from) + from));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(to);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, isText]);

  return (
    <span ref={ref}>
      {isText ? (inView ? textValue : '') : count}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: stat.delay, type: "spring", bounce: 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-panel rounded-2xl p-8 relative overflow-hidden group border-slate-200 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <motion.div 
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-700"
              >
                {stat.icon}
              </motion.div>
              
              <div className="flex flex-col gap-4 relative z-10">
                <div className="p-3 bg-white rounded-xl w-fit drop-shadow-sm border border-slate-200 group-hover:border-cyan-400/30 transition-colors duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-5xl font-display font-bold text-slate-900 inline-flex">
                  <Counter from={0} to={stat.value} suffix={stat.suffix} isText={stat.isText} textValue={stat.textValue} />
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
