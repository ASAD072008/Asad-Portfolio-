import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, Mail, ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { Magnetic } from './animations/Magnetic';
import { premiumSpring } from '../lib/animations';

export function Footer() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Get form data
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Construct mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    // Open default email client
    window.location.href = `mailto:asadmujawar142008@gmail.com?subject=${subject}&body=${body}`;

    setFormState('success');
    e.currentTarget.reset();
    setTimeout(() => setFormState('idle'), 3000);
  };

  return (
    <footer id="contact" className="relative pt-24 pb-12 border-t border-slate-200 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-cyan-100/50 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-16 md:gap-8 items-center">
        
        {/* Contact Form side */}
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={premiumSpring}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-slate-600 mb-8 max-w-md">
            Ready to collaborate on innovative projects or have a speaking opportunity? Drop a message below.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
            <div className="relative group">
              <input 
                type="text"
                name="name"
                required
                placeholder="Your Name" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-cyan-500/50 transition-colors peer"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 opacity-0 peer-focus:opacity-20 pointer-events-none transition-opacity blur-sm"></div>
            </div>
            
            <div className="relative group">
              <input 
                type="email" 
                name="email"
                required
                placeholder="Email Address" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-cyan-500/50 transition-colors peer"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 opacity-0 peer-focus:opacity-20 pointer-events-none transition-opacity blur-sm"></div>
            </div>

            <div className="relative group">
              <textarea 
                rows={4}
                name="message"
                required
                placeholder="Your Message" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-cyan-500/50 transition-colors peer resize-none"
              ></textarea>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 opacity-0 peer-focus:opacity-20 pointer-events-none transition-opacity blur-sm"></div>
            </div>

            <button 
              type="submit"
              disabled={formState !== 'idle'}
              className="w-full py-4 mt-2 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold rounded-xl flex items-center justify-center gap-2 group transition-all shadow-[0_8px_20px_rgba(6,182,212,0.3)] hover:shadow-[0_15px_30px_rgba(6,182,212,0.4)]"
            >
              {formState === 'idle' && (
                <>
                  <motion.span transition={{ type: "spring", mass: 0.6, stiffness: 140 }} className="flex items-center gap-2 group-hover:scale-105">
                     Send Message
                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.span>
                </>
              )}
              {formState === 'submitting' && 'Sending...'}
              {formState === 'success' && (
                <>
                  Message Sent! <CheckCircle2 className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Socials / Brand Side */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={premiumSpring}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-end text-center md:text-right"
        >
          <div className="text-2xl font-display font-bold tracking-tight text-slate-900 mb-2">
            ASAD<span className="text-cyan-600">.DEV</span>
          </div>
          <p className="text-slate-600 text-sm mb-4 max-w-xs">
            Forging digital experiences at the intersection of AI, design, and engineering.
          </p>
          
          <div className="flex items-center justify-center md:justify-end gap-2 text-slate-600 font-mono text-sm mb-10">
             <Phone className="w-4 h-4 text-cyan-600" />
             <a href="tel:9356243220" className="hover:text-cyan-600 transition-colors">9356243220</a>
          </div>

          <div className="flex gap-4">
            <Magnetic strength={0.5}>
              <a 
                href="https://github.com/ASAD072008" 
                target="_blank" rel="noreferrer"
                className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-slate-600 border border-slate-200 hover:border-cyan-500/50 hover:text-cyan-600 hover:shadow-[0_15px_30px_rgba(6,182,212,0.15)] transition-colors group"
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={premiumSpring}>
                  <Github className="w-6 h-6" />
                </motion.div>
              </a>
            </Magnetic>
            <Magnetic strength={0.5}>
              <a 
                href="https://www.linkedin.com/in/asadali-mujawar-a26145361" 
                target="_blank" rel="noreferrer"
                className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-slate-600 border border-slate-200 hover:border-blue-500/50 hover:text-blue-600 hover:shadow-[0_15px_30px_rgba(59,130,246,0.15)] transition-colors group"
              >
                <motion.div whileHover={{ scale: 1.2, rotate: -10 }} transition={premiumSpring}>
                  <Linkedin className="w-6 h-6" />
                </motion.div>
              </a>
            </Magnetic>
            <Magnetic strength={0.5}>
              <a 
                href="https://www.instagram.com/tech._with_asad" 
                target="_blank" rel="noreferrer"
                className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-slate-600 border border-slate-200 hover:border-fuchsia-500/50 hover:text-fuchsia-600 hover:shadow-[0_15px_30px_rgba(217,70,239,0.15)] transition-colors group"
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={premiumSpring}>
                  <Instagram className="w-6 h-6" />
                </motion.div>
              </a>
            </Magnetic>
            <Magnetic strength={0.5}>
              <a 
                href="mailto:asadmujawar142008@gmail.com" 
                className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-slate-600 border border-slate-200 hover:border-red-500/50 hover:text-red-500 hover:shadow-[0_15px_30px_rgba(239,68,68,0.15)] transition-colors group"
              >
                <motion.div whileHover={{ scale: 1.2, rotate: -10 }} transition={premiumSpring}>
                  <Mail className="w-6 h-6" />
                </motion.div>
              </a>
            </Magnetic>
            <Magnetic strength={0.5}>
              <a 
                href="tel:9356243220" 
                className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-slate-600 border border-slate-200 hover:border-emerald-500/50 hover:text-emerald-500 hover:shadow-[0_15px_30px_rgba(16,185,129,0.15)] transition-colors group"
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={premiumSpring}>
                  <Phone className="w-6 h-6" />
                </motion.div>
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 pt-8 border-t border-slate-200 text-center text-slate-500 text-sm font-mono">
        &copy; {new Date().getFullYear()} Asadali Jamir Mujawar. All rights reserved.
      </div>
    </footer>
  );
}
