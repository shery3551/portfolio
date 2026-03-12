import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data';

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-zinc-900/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-sm font-black text-accent uppercase tracking-[0.4em] mb-6">Selected Projects</h2>
          <div className="w-20 h-1.5 bg-accent rounded-full mb-8 mx-auto" />
          <h3 className="text-5xl font-black tracking-tighter">Featured Projects</h3>
        </div>

        <div className="space-y-40">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}
            >
              <div className="lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-accent/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <motion.div 
                  whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? 2 : -2 }}
                  className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-video"
                >
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-5 py-2 rounded-full bg-accent text-zinc-950 text-[10px] font-black uppercase tracking-[0.2em] glow-accent">
                      {p.techStack}
                    </span>
                  </div>
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 bg-bg-dark/20 group-hover:bg-transparent transition-colors duration-700" />
                </motion.div>
              </div>
              
              <div className="lg:w-1/2">
                <h4 className="text-4xl font-black mb-8 text-white tracking-tighter leading-tight">{p.title}</h4>
                <p className="text-zinc-400 text-xl mb-10 leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-12">
                  {p.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 rounded-xl bg-white/5 text-[10px] font-black text-zinc-500 border border-white/5 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  <motion.a 
                    href={p.github} 
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-8 py-4 rounded-2xl bg-accent text-zinc-950 font-black text-xs uppercase tracking-widest flex items-center gap-3 glow-accent"
                  >
                    <Github size={20} />
                    Source
                  </motion.a>
                  <motion.a 
                    href={p.link} 
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-8 py-4 rounded-2xl border border-white/10 text-white font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-white/5 transition-all"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
