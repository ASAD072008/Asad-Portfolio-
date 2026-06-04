import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TiltCard } from "./animations/TiltCard";
import {
  Award,
  Calendar,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Google Student Ambassador Certificate",
    issuer: "Google Gemini & PING Network",
    date: "Dec 31, 2025",
    image: "/certificate.png",
    link: "#",
  },
  {
    id: 2,
    title: "Selected as Google Student Ambassador",
    issuer: "DKTE Society's Yashwantrao Chavan Polytechnic",
    date: "2025",
    image: "/poster.jpeg",
    link: "#",
  },
  {
    id: 3,
    title: "Honored by Executive Director Of DKTE Society",
    issuer: "DKTE Society - Mr. Ravi Awade",
    date: "2025",
    image: "/awade.jpeg",
    link: "#",
  },
  {
    id: 4,
    title: "Honored by Principal",
    issuer: "Yashwantrao Chavan Polytechnic - Prof. A. P. Kothali",
    date: "2026",
    image: "/kothali.jpg",
    link: "#",
  },
];

export function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCert = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevCert = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + certificates.length) % certificates.length,
    );
  };

  const cert = certificates[currentIndex];

  return (
    <section
      id="certificates"
      className="relative py-24 md:py-32 overflow-hidden bg-slate-50"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Certificates & Awards
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-20">
            <button
              onClick={prevCert}
              className="p-3 rounded-full bg-white shadow-lg text-slate-800 hover:text-cyan-600 hover:scale-110 transition-all border border-slate-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-20">
            <button
              onClick={nextCert}
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
                    {/* Image Placeholder */}
                    <div className="relative h-64 md:h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-4">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 z-20 flex items-center justify-center w-12 h-12 bg-white/50 backdrop-blur-md rounded-full text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-slate-200">
                        <Award className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-cyan-600 mb-3 text-sm font-semibold tracking-wide uppercase">
                        <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                        {cert.issuer}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-6 group-hover:text-cyan-700 transition-colors">
                        {cert.title}
                      </h3>

                      <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100">
                        <div className="flex items-center gap-2 text-slate-500 font-mono text-sm md:text-base">
                          <Calendar className="w-5 h-5" />
                          {cert.date}
                        </div>
                        <a
                          href={cert.link}
                          className="flex items-center gap-1 text-slate-400 hover:text-cyan-600 transition-colors text-sm md:text-base font-medium"
                        >
                          View <ExternalLink className="w-5 h-5" />
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
            {certificates.map((_, idx) => (
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
