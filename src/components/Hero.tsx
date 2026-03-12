import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Linkedin, 
  MapPin, 
  Mail, 
  Terminal, 
  Zap, 
  Award, 
  Sparkles 
} from 'lucide-react';
import { personalInfo } from '../data';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-mesh">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      {/* Animated Background Blobs */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-8"
          >
            <Sparkles size={12} />
            Available for new opportunities
          </motion.div>
          
          <h1 className="text-7xl md:text-9xl font-black mb-8 leading-[0.9] tracking-tighter">
            {personalInfo.name.split(' ')[0]} <br />
            <span className="text-gradient">{personalInfo.name.split(' ')[1]}</span>
          </h1>
          
          <p className="text-zinc-400 text-xl mb-12 max-w-lg leading-relaxed font-medium">
            Architecting intelligent systems through <span className="text-white">AI Automation</span>, 
            <span className="text-white"> Machine Learning</span> & 
            <span className="text-white"> Data-Driven Insights</span>.
          </p>
          
          <div className="flex flex-wrap gap-6 mb-12">
            <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3 text-zinc-500 text-sm font-medium group">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-zinc-950 transition-all duration-300">
                <MapPin size={16} />
              </div>
              {personalInfo.location}
            </motion.div>
            <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3 text-zinc-500 text-sm font-medium group">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-zinc-950 transition-all duration-300">
                <Mail size={16} />
              </div>
              {personalInfo.email}
            </motion.div>
          </div>

          <div className="flex flex-wrap gap-5 items-center">
            <motion.a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-2xl bg-accent text-zinc-950 font-black text-xs uppercase tracking-widest hover:bg-accent-hover transition-all flex items-center gap-3 glow-accent-strong"
            >
              <Linkedin size={18} />
              Connect
            </motion.a>
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-2xl border border-white/10 text-white font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-all flex items-center gap-3"
            >
              <Terminal size={18} />
              Projects
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] group">
            {/* Spinning Rings */}
            <div className="absolute inset-0 rounded-full border border-accent/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-dashed border-accent/10 animate-[spin_30s_linear_infinite_reverse]" />
            <div className="absolute -inset-10 rounded-full bg-accent/5 blur-[100px] group-hover:bg-accent/10 transition-colors duration-700" />
            
            <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white/5 shadow-2xl group-hover:border-accent/20 transition-all duration-700">
              <img 
                src="475838656_1350329439745664_2664636415981371472_n.jpg" 
                alt={personalInfo.name} 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/60 via-transparent to-transparent" />
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass px-6 py-4 rounded-3xl border border-accent/20 glow-accent"
            >
              <Zap size={20} className="text-accent mb-2" />
              <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Experience</p>
              <p className="text-lg font-black text-white">5+ Years</p>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 glass px-6 py-4 rounded-3xl border border-accent/20 glow-accent"
            >
              <Award size={20} className="text-accent mb-2" />
              <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Projects</p>
              <p className="text-lg font-black text-white">50+ Done</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600">Scroll</p>
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
