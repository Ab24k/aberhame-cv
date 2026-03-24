import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Upload, Trash2, Plus, LogIn } from 'lucide-react';

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'aberhame77') {
      setIsLoggedIn(true);
    } else {
      alert('Incorrect access code');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md p-8 bg-white dark:bg-card-dark rounded-3xl border border-graphite/10 shadow-2xl"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-neon-lime rounded-full flex items-center justify-center mx-auto mb-4">
              <LogIn className="text-obsidian" />
            </div>
            <h2 className="text-2xl font-bold font-display">Admin Access</h2>
            <p className="text-sm text-charcoal/60 dark:text-white/60">Enter your secret code to manage portfolio</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Access Code"
              className="w-full bg-graphite/5 dark:bg-white/5 border border-graphite/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-neon-lime transition-colors"
            />
            <button
              type="submit"
              className="w-full bg-neon-lime text-obsidian font-bold py-4 rounded-2xl hover:shadow-[0_0_20px_rgba(224,255,0,0.4)] transition-all"
            >
              Enter Dashboard
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-black font-display tracking-tighter">DASHBOARD</h1>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="text-sm font-bold text-system-red hover:underline"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Upload Form */}
          <div className="lg:col-span-1 space-y-8">
            <div className="p-8 bg-white dark:bg-card-dark rounded-3xl border border-graphite/10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Plus size={20} className="text-neon-lime" />
                Add New Project
              </h3>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-graphite/40">Title</label>
                  <input
                    type="text"
                    placeholder="Project Title"
                    className="w-full bg-graphite/5 dark:bg-white/5 border border-graphite/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neon-lime"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-graphite/40">Category</label>
                  <select className="w-full bg-graphite/5 dark:bg-white/5 border border-graphite/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neon-lime">
                    <option>Commercial</option>
                    <option>Wedding</option>
                    <option>Music</option>
                    <option>Documentary</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-graphite/40">Video URL</label>
                  <input
                    type="text"
                    placeholder="YouTube/Vimeo Link"
                    className="w-full bg-graphite/5 dark:bg-white/5 border border-graphite/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neon-lime"
                  />
                </div>
                <div className="pt-4">
                  <div className="border-2 border-dashed border-graphite/20 rounded-2xl p-8 text-center hover:border-neon-lime transition-colors cursor-pointer group">
                    <Upload className="mx-auto mb-2 text-graphite/40 group-hover:text-neon-lime transition-colors" />
                    <p className="text-xs font-medium text-graphite/40">Drag & drop thumbnail or click to upload</p>
                  </div>
                </div>
                <button className="w-full bg-obsidian dark:bg-white text-white dark:text-obsidian font-bold py-4 rounded-xl hover:bg-neon-lime hover:text-obsidian transition-colors">
                  Publish Project
                </button>
              </form>
            </div>
          </div>

          {/* Manage Portfolio */}
          <div className="lg:col-span-2 space-y-8">
            <div className="p-8 bg-white dark:bg-card-dark rounded-3xl border border-graphite/10">
              <h3 className="text-xl font-bold mb-6">Manage Portfolio</h3>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-graphite/5 dark:bg-white/5 rounded-2xl border border-graphite/5">
                    <div className="flex items-center gap-4">
                      <div className="w-20 aspect-video rounded-lg bg-obsidian overflow-hidden">
                        <img src={`https://picsum.photos/seed/${i}/200/112`} alt="" className="w-full h-full object-cover opacity-50" />
                      </div>
                      <div>
                        <h4 className="font-bold">Project Title {i}</h4>
                        <p className="text-xs text-graphite/40 uppercase font-bold tracking-widest">Commercial</p>
                      </div>
                    </div>
                    <button className="p-3 text-system-red hover:bg-system-red/10 rounded-xl transition-colors">
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
