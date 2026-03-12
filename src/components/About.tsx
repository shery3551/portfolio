import React from 'react';
import { motion } from 'motion/react';
import { Code2, Database, BarChart3, Brain } from 'lucide-react';
import { features, aboutStats } from '../data';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={24} />,
  Database: <Database size={24} />,
  BarChart3: <BarChart3 size={24} />,
  Brain: <Brain size={24} />,
};

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-black text-accent uppercase tracking-[0.4em] mb-6">About Me</h2>
            <div className="w-20 h-1.5 bg-accent rounded-full mb-8" />
            <h3 className="text-5xl md:text-6xl font-black mb-10 tracking-tighter leading-tight">
              Engineering <br />
              smarter solutions <br />
              <span className="text-accent">with precision.</span>
            </h3>
            <p className="text-zinc-400 text-xl leading-relaxed mb-12">
              I am a Software Engineer dedicated to bridging the gap between complex data and actionable intelligence. With a strong foundation in Machine Learning and Business Intelligence, I specialize in building scalable automation workflows and predictive models that solve real-world challenges.
            </p>
            <div className="flex items-center gap-8">
              <div>
                <p className="text-4xl font-black text-white mb-1">{aboutStats.cgpa}</p>
                <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">CGPA</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-4xl font-black text-white mb-1">{aboutStats.languagesCount}</p>
                <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Languages</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-10 rounded-[2.5rem] bg-card-bg/80 backdrop-blur-md border border-white/5 group hover:border-accent/30 transition-all duration-500 glow-accent relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-zinc-950 transition-all duration-500">
                    {iconMap[f.icon]}
                  </div>
                  <h4 className="text-lg font-black text-white mb-3">{f.title}</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
