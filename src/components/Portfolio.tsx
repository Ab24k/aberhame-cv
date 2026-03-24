import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { initialPortfolio } from '../constants';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-white dark:bg-obsidian">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-black font-display tracking-tighter mb-4">
              PORTFOLIO
            </h2>
            <p className="text-charcoal/60 dark:text-white/60 text-lg max-w-md">
              A selection of my best work across various genres and industries.
            </p>
          </div>
          <div className="flex gap-4">
            {['All', 'Commercial', 'Wedding', 'Music'].map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full border border-graphite/20 hover:border-neon-lime hover:text-neon-lime transition-all text-sm font-medium"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initialPortfolio.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-video rounded-2xl overflow-hidden bg-card-dark cursor-pointer"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-neon-lime rounded-full flex items-center justify-center text-obsidian scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Play size={32} fill="currentColor" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-neon-lime text-xs font-bold uppercase tracking-widest mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
