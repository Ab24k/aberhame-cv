import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-0"
    >
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-apple-white dark:bg-card-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border-2 border-neon-lime/20">
              <img
                src="https://picsum.photos/seed/aberhame-profile/800/1000"
                alt="Aberhame Tamerat"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-neon-lime rounded-2xl flex items-center justify-center -rotate-6 shadow-xl">
              <span className="text-obsidian font-black text-4xl">7+</span>
              <span className="text-obsidian text-[10px] font-bold uppercase absolute bottom-4">Years Exp.</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-black font-display tracking-tighter">
              CLEAN STORYTELLING
            </h2>
            <p className="text-lg text-charcoal/70 dark:text-white/70 leading-relaxed">
              I am Aberhame Tamerat, a professional video editor based in Addis Ababa. I specialize in turning raw footage into compelling narratives that resonate with audiences.
            </p>
            <p className="text-lg text-charcoal/70 dark:text-white/70 leading-relaxed">
              Whether it's a high-energy commercial, a soulful wedding film, or a deep-dive documentary, my focus is always on clarity, rhythm, and emotional impact.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { label: 'Editing', value: 'Adobe Premiere, DaVinci' },
                { label: 'Motion', value: 'After Effects' },
                { label: 'Color', value: 'Professional Grading' },
                { label: 'Sound', value: 'Sound Design & Mixing' },
              ].map((skill) => (
                <div key={skill.label} className="space-y-1">
                  <h4 className="text-neon-lime text-xs font-bold uppercase tracking-widest">{skill.label}</h4>
                  <p className="font-medium">{skill.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Portfolio />
    </motion.div>
  );
}
