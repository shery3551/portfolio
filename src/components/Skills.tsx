import React from 'react';
import { motion } from 'motion/react';
import { skillGroups } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-zinc-900/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-accent uppercase tracking-[0.4em] mb-6">Technical Stack</h2>
          <div className="w-20 h-1.5 bg-accent rounded-full mb-8 mx-auto" />
          <h3 className="text-5xl font-black tracking-tighter">Technical Ecosystem</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {skillGroups.map((group, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-card-bg/80 backdrop-blur-md border border-white/5 hover:border-accent/20 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h4 className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-8 group-hover:translate-x-2 transition-transform">{group.title}</h4>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, j) => (
                    <motion.span 
                      key={j}
                      whileHover={{ scale: 1.1, color: '#fff', backgroundColor: 'rgba(245, 158, 11, 0.1)' }}
                      className="px-4 py-2 rounded-xl bg-white/5 text-xs font-bold text-zinc-500 border border-white/5 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
