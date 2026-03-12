import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';
import { personalInfo } from '../data';

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
        <div className="text-center md:text-left">
          <a href="#home" className="text-3xl font-black tracking-tighter text-white mb-4 block">
            {personalInfo.name.split(' ')[0]}<span className="text-accent">.</span>
          </a>
          <p className="text-zinc-600 text-sm font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          {[
            { icon: <Github size={20} />, href: personalInfo.github },
            { icon: <Linkedin size={20} />, href: personalInfo.linkedin },
            { icon: <Mail size={20} />, href: `mailto:${personalInfo.email}` }
          ].map((social, i) => (
            <motion.a 
              key={i}
              href={social.href}
              whileHover={{ y: -5 }}
              className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-zinc-500 hover:bg-accent hover:text-zinc-950 transition-all duration-300 border border-white/5 hover:border-accent/30"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
        
        <div className="flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
        <motion.button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent hover:bg-accent hover:text-zinc-950 transition-all duration-500 group glow-accent"
        >
          <ChevronUp size={24} className="group-hover:animate-bounce" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
