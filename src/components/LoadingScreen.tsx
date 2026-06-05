import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // 0 -> 1: Show speech bubble
    const timer1 = setTimeout(() => setPhase(1), 1000);
    // 1 -> 2: Hide speech buble & character
    const timer2 = setTimeout(() => setPhase(2), 3500);
    // 2 -> 3: Slide up background
    const timer3 = setTimeout(() => setPhase(3), 4000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const welcomeText = "Hi! Welcome to my portfolio✌️ ";

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {phase < 3 && (
        <motion.div
          key="loading-container"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900 overflow-hidden"
          exit={{ y: "-100vh", opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Animated Background Gradients */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[100px]" 
          />
          <motion.div 
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[80px]" 
          />

          <div className="relative flex items-center justify-center">
            {/* Character Container with Floating Animation */}
            <AnimatePresence>
              {phase < 2 && (
                <motion.div
                  key="character-container"
                  initial={{ scale: 0, y: 60, opacity: 0, rotate: -15 }}
                  animate={{ scale: 1, y: 0, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0, y: -40, opacity: 0, rotate: 15 }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 18,
                  }}
                  className="relative z-10"
                >
                  {/* Floating effect */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    className="relative flex items-center justify-center w-24 h-24 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 rounded-full shadow-[0_0_50px_rgba(6,182,212,0.5)] p-1.5"
                  >
                    <img src="/profile.jpg" alt="Asad" className="w-full h-full object-cover rounded-full border-2 border-white/20" />
                    
                    {/* Ring Pulse 1 */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-cyan-400"
                      animate={{ scale: [1, 1.8], opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                    />
                    {/* Ring Pulse 2 */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-blue-400"
                      animate={{ scale: [1, 2.2], opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeOut", delay: 0.5 }}
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Speech Bubble */}
            <AnimatePresence>
              {phase === 1 && (
                <motion.div
                  key="speech-bubble"
                  initial={{ opacity: 0, scale: 0.3, x: -40, y: 30, rotate: 10 }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20, rotate: -5 }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 18,
                  }}
                  style={{ transformOrigin: 'bottom left' }}
                  className="absolute left-full ml-6 top-[-30px] bg-white/95 backdrop-blur-md text-slate-800 px-6 py-4 rounded-3xl rounded-bl-sm font-semibold shadow-2xl text-lg md:text-xl whitespace-nowrap z-20 border border-white/40"
                >
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ staggerChildren: 0.05 }}
                     className="flex items-center"
                  >
                    {welcomeText.split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.03, type: "spring", stiffness: 300, damping: 20 }}
                        className={char === " " ? "mr-1.5" : ""}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
