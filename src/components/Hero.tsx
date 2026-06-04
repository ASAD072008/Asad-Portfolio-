import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight, Code2 } from 'lucide-react';
import { Magnetic } from './animations/Magnetic';
import { premiumSpring } from '../lib/animations';

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { scrollY } = useScroll();
  const bgY1 = useTransform(scrollY, [0, 1000], [0, 250]);
  const bgY2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const contentY = useTransform(scrollY, [0, 1000], [0, 100]);
  const badgeY = useTransform(scrollY, [0, 1000], [0, 150]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: premiumSpring }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Orbs with Parallax */}
      <motion.div 
        style={{ y: bgY1 }}
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"
      ></motion.div>
      
      <motion.div 
        style={{ y: bgY2 }}
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, -40, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        <motion.div
          style={{ y: contentY }}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 text-sm font-mono w-fit relative overflow-hidden group shadow-sm hover:scale-105 transition-transform duration-300">
             <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
             <Code2 className="w-4 h-4" />
             <span>Hello World</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-display font-bold leading-tight">
             I'm <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 neon-text-blue inline-block hover:scale-105 hover:rotate-1 transition-all duration-300">
                Asadali
             </span><br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 drop-shadow-xl inline-block hover:scale-105 hover:-rotate-1 transition-all duration-300">
                Jamir Mujawar
             </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-600 max-w-lg font-light leading-relaxed">
             Computer Science & Engineering Student | Tech Innovator & Public Speaker.
             Crafting the future of digital experiences with code and AI.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-4 relative z-20">
             <Magnetic strength={0.4}>
               <button 
                  onClick={() => scrollTo('projects')}
                  className="px-6 py-3 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-400 transition-colors duration-300 shadow-[0_8px_20px_rgba(6,182,212,0.3)] hover:shadow-[0_15px_30px_rgba(6,182,212,0.5)] flex items-center gap-2 group border border-transparent hover:border-cyan-200"
               >
                  <motion.span transition={premiumSpring} className="flex items-center gap-2 relative z-10 group-hover:scale-105">
                     Explore Portfolio
                     <ChevronRight className="w-4 h-4 group-hover:translate-x-1" />
                  </motion.span>
               </button>
             </Magnetic>
             <Magnetic strength={0.3}>
               <button 
                  onClick={() => scrollTo('contact')}
                  className="px-6 py-3 rounded-xl bg-white/70 backdrop-blur-md border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-colors duration-300 overflow-hidden relative group shadow-sm hover:shadow-md"
               >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <motion.span transition={premiumSpring} className="relative z-10 block group-hover:scale-105">Connect Now</motion.span>
               </button>
             </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ...premiumSpring, delay: 0.9 }}
          style={{ y: badgeY }}
          className="relative h-[500px] hidden md:flex justify-center items-center"
        >
          {/* Profile Picture with Abstract Tech Badge Art */}
          <div className="relative w-full h-full max-w-md flex items-center justify-center">
            
            {/* Animated fluid blobs */}
            <motion.div 
               animate={{ borderRadius: ["40% 60% 70% 30%", "50% 50% 30% 70%", "60% 40% 50% 50%", "40% 60% 70% 30%"] }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               className="absolute inset-[10%] bg-gradient-to-tr from-cyan-400/20 to-transparent border border-cyan-400/30 blur-sm mix-blend-multiply"
            ></motion.div>
            <motion.div 
               animate={{ borderRadius: ["60% 40% 50% 50%", "30% 70% 70% 30%", "50% 50% 30% 70%", "60% 40% 50% 50%"] }}
               transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
               className="absolute inset-[15%] bg-gradient-to-bl from-violet-400/20 to-transparent border border-violet-400/30 blur-sm mix-blend-multiply"
            ></motion.div>

            {/* Spinning Dashed Rings for the Circular Effect */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[10%] border-2 border-dashed border-cyan-400/40 rounded-full"
            ></motion.div>
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[15%] border border-dashed border-violet-400/40 rounded-full"
            ></motion.div>

            <motion.div 
               animate={{ scale: [1, 1.1, 1], filter: ["blur(30px)", "blur(20px)", "blur(30px)"] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-cyan-400 to-violet-500 rounded-full opacity-40 mix-blend-multiply"
            ></motion.div>
            
            {/* Image Container */}
            <motion.div 
               whileHover={{ scale: 1.05, rotate: 2 }}
               transition={premiumSpring}
               className="relative z-10 w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-[0_20px_50px_rgba(6,182,212,0.15)] bg-slate-50"
            >
              <img 
                 src="/profile.jpg" 
                 alt="Asadali Jamir Mujawar" 
                 className="w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-110"
                 onError={(e) => {
                  (e.target as HTMLImageElement).src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2338bdf8' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='8' r='5'/%3E%3Cpath d='M20 21a8 8 0 1 0-16 0'/%3E%3C/svg%3E`;
                  (e.target as HTMLImageElement).style.padding = "2rem";
                }}
              />
            </motion.div>
            
            {/* Organic Floating Badges */}
            <motion.div 
               animate={{ y: [-15, 15, -10], x: [-5, 10, -5], rotate: [-2, 3, -1] }} 
               transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
               className="absolute top-10 right-4 glass-panel px-4 py-2 rounded-xl font-mono text-sm text-cyan-700 border border-white font-semibold z-20 shadow-[0_8px_20px_rgba(0,0,0,0.05)] bg-white/90 backdrop-blur-md"
            >
               AI & ML
            </motion.div>
            <motion.div 
               animate={{ y: [15, -15, 10], x: [10, -5, 5], rotate: [2, -3, 1] }} 
               transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
               className="absolute bottom-16 left-0 glass-panel px-4 py-2 rounded-xl font-mono text-sm text-violet-700 border border-white font-semibold z-20 shadow-[0_8px_20px_rgba(0,0,0,0.05)] bg-white/90 backdrop-blur-md"
            >
               Full Stack
            </motion.div>
            <motion.div 
               animate={{ y: [-10, 10, -5], x: [5, -10, 0], rotate: [-1, 2, -2] }} 
               transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
               className="absolute top-1/2 -right-6 glass-panel px-4 py-2 rounded-xl font-mono text-sm text-fuchsia-700 border border-white font-semibold z-20 shadow-[0_8px_20px_rgba(0,0,0,0.05)] bg-white/90 backdrop-blur-md"
            >
               Innovator
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
