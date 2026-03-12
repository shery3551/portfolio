import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { experiences } from '../data';

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-sm font-black text-accent uppercase tracking-[0.4em] mb-6">Professional Experience</h2>
            <div className="w-20 h-1.5 bg-accent rounded-full mb-8" />
            <h3 className="text-5xl font-black tracking-tighter">Work Experience</h3>
          </div>
          <motion.a 
            href="#contact"
            whileHover={{ x: 10 }}
            className="flex items-center gap-3 text-accent font-black text-xs uppercase tracking-widest group"
          >
            Hire Me <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
          </motion.a>
        </div>

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="p-12 rounded-[3rem] bg-card-bg border border-white/5 hover:border-accent/20 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:bg-accent/10 transition-colors" />
                
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 relative z-10">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-4 mb-4">
                      <h4 className="text-3xl font-black text-white">{exp.company}</h4>
                      <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-accent font-black text-sm uppercase tracking-widest mb-8">{exp.role} • {exp.location}</p>
                    <ul className="space-y-4">
                      {exp.description.map((item, j) => (
                        <li key={j} className="text-zinc-400 text-lg flex items-start gap-4 leading-relaxed">
                          <span className="w-2 h-2 rounded-full bg-accent mt-2.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
