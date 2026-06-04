import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, X, Send, Sparkles } from 'lucide-react';
import { premiumSpring, bouncierSpring } from '../lib/animations';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  typing?: boolean;
};

const predefPrompts = [
  "Tell me about his AI projects",
  "What are his leadership roles?",
  "How to contact Asad?"
];

// Simulated AI responses based on keywords
const getSimulatedResponse = (text: string) => {
  const lower = text.toLowerCase();
  
  if (lower.includes('project') || lower.includes('ai')) {
    return "Asad built 'Deepfake KYC Buster' using dense neural networks to detect AI media fraud with massive accuracy. He also crafted an 'Interactive Travel Discovery Platform' with a stunning UI! He's always innovating.";
  }
  if (lower.includes('leader') || lower.includes('role')) {
    return "He's a Google Student Ambassador! He reps Google/Gemini AI on campus and was a leading member for the India Tech Summit Inovet 2025 ideathon. Plus, he's great at anchoring events.";
  }
  if (lower.includes('contact') || lower.includes('hire') || lower.includes('reach')) {
    return "You can ping him via the Contact form below, or hit him up on LinkedIn! His GitHub handle is ASAD072008 and tracking him down on Instagram @tech._with_asad works too.";
  }
  if (lower.includes('hello') || lower.includes('hi')) {
    return "Hey there! I'm Asad's AI Twin. I've learned a lot about his skills and projects. What would you like to know?";
  }
  
  return "That's an interesting question! While I don't have the exact specifics on that, I can definitely tell you Asad is constantly learning new tech stacks. Ask me about his projects or leadership!";
};

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hey! I'm Asad's AI Twin. Ask me anything about his skills, projects, or how to reach him.", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const newMsgId = Date.now();
    setMessages(prev => [...prev, { id: newMsgId, text, sender: 'user' }]);
    setInputValue('');

    // Simulate typing delay
    setTimeout(() => {
      setMessages(prev => [...prev, { id: newMsgId + 1, text: 'typing...', sender: 'bot', typing: true }]);
      
      setTimeout(() => {
        setMessages(prev => prev.map(msg => 
          msg.id === newMsgId + 1 ? { ...msg, text: getSimulatedResponse(text), typing: false } : msg
        ));
      }, 1000 + Math.random() * 1000); // 1-2s delay
    }, 400); // initial delay before "typing" shows
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend(inputValue);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 45 }}
            transition={bouncierSpring}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-16 h-16 bg-cyan-500 rounded-full shadow-[0_10px_35px_rgba(6,182,212,0.5)] flex items-center justify-center text-white hover:bg-cyan-600 transition-colors z-40 group"
          >
            <motion.div whileHover={{ scale: 1.1, rotate: 10 }} transition={premiumSpring}>
               <Bot className="w-8 h-8" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={premiumSpring}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[550px] max-h-[85vh] glass-panel rounded-3xl flex flex-col z-50 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-200 bg-white"
          >
            {/* Header */}
            <div className="p-5 border-b border-slate-100 bg-slate-50/80 backdrop-blur-md flex items-center justify-between z-10">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-tr from-cyan-500 to-violet-500 rounded-2xl relative shadow-sm">
                  <Bot className="w-5 h-5 text-white" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-slate-900">Asad AI Twin</h3>
                  <p className="text-[10px] uppercase text-cyan-600 font-mono tracking-wider flex items-center gap-1 font-semibold">
                    <Sparkles className="w-3 h-3" /> Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-200/50 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 bg-slate-50/30">
              {messages.map(msg => (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed ${
                      msg.sender === 'user' 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-br-sm shadow-[0_5px_15px_rgba(6,182,212,0.2)]' 
                        : 'bg-white text-slate-700 border border-slate-100 rounded-bl-sm shadow-sm'
                    }`}
                  >
                    {msg.typing ? (
                      <div className="flex gap-1 items-center h-5">
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      </div>
                    ) : (
                      <p>{msg.text}</p>
                    )}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Prompt Chips */}
            <div className="p-4 border-t border-slate-100 bg-white overflow-x-auto flex gap-2 whitespace-nowrap no-scrollbar hide-scroll-bar">
              {predefPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className="px-4 py-2 bg-slate-50 hover:bg-cyan-50 border border-slate-200 hover:border-cyan-500/30 rounded-xl text-xs font-medium text-slate-600 transition-colors shadow-sm"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white flex gap-3 border-t border-slate-50">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask AI Twin..."
                className="flex-1 bg-slate-50 border border-slate-200 outline-none rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:ring-1 focus:ring-cyan-500 focus:bg-white shadow-inner transition-colors"
              />
              <button 
                onClick={() => handleSend(inputValue)}
                className="p-3 bg-cyan-500 text-white rounded-xl hover:bg-cyan-600 transition-colors shadow-[0_5px_15px_rgba(6,182,212,0.3)] hover:shadow-[0_8px_20px_rgba(6,182,212,0.4)]"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
