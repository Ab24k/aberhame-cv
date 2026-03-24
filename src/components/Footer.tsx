import { motion } from 'motion/react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [addisTime, setAddisTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Addis_Ababa',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setAddisTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const socials = [
    { icon: <Instagram size={20} />, href: 'https://instagram.com/aberhame_edits', label: '@aberhame_edits' },
    { icon: <Phone size={20} />, href: 'https://wa.me/0940581985', label: 'WhatsApp' },
    { icon: <Mail size={20} />, href: 'mailto:aberhame@gmail.com', label: 'Email' },
  ];

  return (
    <footer id="contact" className="py-20 px-6 border-t border-graphite/10 bg-apple-white dark:bg-obsidian">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-display">ABERHAME</h3>
            <p className="text-charcoal/60 dark:text-white/60 max-w-xs">
              Crafting cinematic experiences through clean storytelling and professional editing.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium">
              <MapPin size={16} className="text-neon-lime animate-pulse" />
              <span>Addis Ababa, Ethiopia</span>
              <span className="text-graphite/40 mx-2">|</span>
              <span className="font-mono text-xs">{addisTime}</span>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-graphite/40">Connect</h4>
            <div className="flex flex-col gap-4">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 hover:text-neon-lime transition-colors"
                >
                  {social.icon}
                  <span className="font-medium">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-graphite/40">Newsletter</h4>
            <p className="text-sm text-charcoal/60 dark:text-white/60">
              Get updates on my latest projects and editing tips.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-graphite/5 dark:bg-white/5 border border-graphite/10 rounded-full px-4 py-2 text-sm flex-1 focus:outline-none focus:border-neon-lime transition-colors"
              />
              <button className="bg-obsidian dark:bg-white text-white dark:text-obsidian px-6 py-2 rounded-full text-sm font-bold hover:bg-neon-lime hover:text-obsidian transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-graphite/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-graphite/40">
          <p>© 2026 Aberhame Tamerat. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neon-lime">Privacy Policy</a>
            <a href="#" className="hover:text-neon-lime">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
