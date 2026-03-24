import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Cinematic Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian/20 to-obsidian dark:to-obsidian" />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-electric-blue/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-neon-lime/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl md:text-9xl font-black font-display tracking-tighter mb-6">
            <span className="glitch-text" data-text="ABERHAME">ABERHAME</span>
          </h1>
          <p className="text-xl md:text-2xl text-charcoal/70 dark:text-white/70 max-w-2xl mx-auto mb-10 font-medium">
            I create clean videos that grow your brand. Cinematic storytelling for the modern age.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-lg font-bold overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Play size={20} className="fill-current" />
              <span className="relative z-10">Watch Reel</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-neon-lime text-obsidian rounded-full text-lg font-bold shadow-[0_0_20px_rgba(224,255,0,0.3)] hover:shadow-[0_0_30px_rgba(224,255,0,0.5)] transition-all"
            >
              Hire Me
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-graphite/30 rounded-full flex justify-center p-1"
      >
        <div className="w-1 h-2 bg-neon-lime rounded-full" />
      </motion.div>
    </section>
  );
}
