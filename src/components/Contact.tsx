import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { personalInfo } from '../data';

const Contact = () => {
  const contactInfo = [
    { label: "Email", value: personalInfo.email, icon: <Mail size={24} />, href: `mailto:${personalInfo.email}` },
    { label: "Phone", value: personalInfo.phone, icon: <Phone size={24} />, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
    { label: "Location", value: personalInfo.location, icon: <MapPin size={24} />, href: "#" },
    { label: "LinkedIn", value: "Shehryar Khan", icon: <Linkedin size={24} />, href: personalInfo.linkedin },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-black text-accent uppercase tracking-[0.4em] mb-6">Contact Information</h2>
          <div className="w-20 h-1.5 bg-accent rounded-full mb-8 mx-auto" />
          <h3 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">Let's <span className="text-accent">Connect</span></h3>
          <p className="text-zinc-500 text-xl mb-20 max-w-2xl mx-auto font-medium">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {contactInfo.map((info, i) => (
            <motion.a 
              key={i}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : undefined}
              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="p-10 rounded-[2.5rem] bg-card-bg border border-white/5 hover:border-accent/30 transition-all duration-500 group glow-accent"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-accent mx-auto mb-8 group-hover:bg-accent group-hover:text-zinc-950 transition-all duration-500">
                {info.icon}
              </div>
              <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-3">{info.label}</p>
              <p className="text-sm font-black text-white group-hover:text-accent transition-colors">{info.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 max-w-3xl mx-auto"
        >
          <form className="p-12 rounded-[3.5rem] bg-card-bg border border-white/5 shadow-2xl space-y-8 text-left glow-accent">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-2">Name</label>
                <input type="text" className="w-full bg-bg-dark/50 border border-white/5 rounded-2xl px-6 py-5 focus:outline-none focus:border-accent transition-all text-white font-medium" placeholder="John Doe" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-2">Email</label>
                <input type="email" className="w-full bg-bg-dark/50 border border-white/5 rounded-2xl px-6 py-5 focus:outline-none focus:border-accent transition-all text-white font-medium" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-2">Message</label>
              <textarea rows={6} className="w-full bg-bg-dark/50 border border-white/5 rounded-2xl px-6 py-5 focus:outline-none focus:border-accent transition-all text-white font-medium resize-none" placeholder="How can I help you?" />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-6 rounded-2xl bg-accent text-zinc-950 font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 glow-accent-strong"
            >
              Send Message
              <Send size={20} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
