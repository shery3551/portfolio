import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Zap, Award, Globe } from 'lucide-react';
import { certifications, languages, aboutStats } from '../data';

const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-sm font-black text-accent uppercase tracking-[0.4em] mb-6">Academic Background</h2>
          <div className="w-20 h-1.5 bg-accent rounded-full mb-8 mx-auto" />
          <h3 className="text-5xl font-black tracking-tighter">Education & Certificates</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-12 rounded-[3rem] bg-card-bg border border-white/5 flex flex-col md:flex-row gap-10 hover:border-accent/20 transition-all duration-500 group">
              <div className="w-20 h-20 rounded-[2rem] bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-zinc-950 transition-all duration-500">
                <Briefcase size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-black text-white mb-2">IQRA University</h4>
                <p className="text-accent text-lg font-black mb-4">B.Sc. Software Engineering</p>
                <div className="flex flex-wrap gap-4 text-zinc-500 text-xs font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-2"><MapPin size={14} /> Islamabad, PK</span>
                  <span className="flex items-center gap-2"><Zap size={14} /> 2022 - 2026</span>
                  <span className="flex items-center gap-2 text-white"><Award size={14} /> CGPA: {aboutStats.cgpa}</span>
                </div>
              </div>
            </div>
            
            <div className="p-12 rounded-[3rem] bg-card-bg border border-white/5 flex flex-col md:flex-row gap-10 hover:border-accent/20 transition-all duration-500 group">
              <div className="w-20 h-20 rounded-[2rem] bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-zinc-950 transition-all duration-500">
                <Globe size={32} />
              </div>
              <div className="w-full">
                <h4 className="text-2xl font-black text-white mb-6">Languages</h4>
                <div className="grid grid-cols-2 gap-4">
                  {languages.map((l, i) => (
                    <div key={i} className="px-5 py-3 rounded-2xl bg-white/5 text-xs font-black text-zinc-400 border border-white/5 uppercase tracking-widest text-center">
                      {l}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3rem] bg-card-bg border border-white/5 hover:border-accent/20 transition-all duration-500"
          >
            <div className="flex items-center gap-6 mb-12">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                <Award size={32} />
              </div>
              <h4 className="text-3xl font-black text-white tracking-tighter">Certifications</h4>
            </div>
            <div className="grid gap-4">
              {certifications.map((c, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 10, color: '#f59e0b' }}
                  className="text-zinc-500 text-sm font-bold flex items-start gap-4 transition-colors cursor-default group"
                >
                  <span className="text-accent mt-1 group-hover:scale-150 transition-transform">◆</span>
                  {c}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
