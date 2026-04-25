"use client";
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail, Cpu, Trophy, Building2, Medal } from 'lucide-react';

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'skills', icon: Cpu, label: 'Skills' },
  { id: 'experience', icon: Building2, label: 'Experience' },
  { id: 'work', icon: Briefcase, label: 'Work' },
  { id: 'profiles', icon: Trophy, label: 'Profiles' },
  { id: 'achievements', icon: Medal, label: 'Achievements' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

export default function FloatingNav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="flex gap-2 px-2 py-2 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="relative px-4 py-3 rounded-full hover:bg-white/10 transition-colors group"
          >
            <item.icon size={20} className="text-white/80 group-hover:text-white transition-colors" />
            <span className="sr-only">{item.label}</span>
            
            {/* Tooltip on Hover */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 whitespace-nowrap pointer-events-none">
              {item.label}
            </span>
          </button>
        ))}
      </motion.div>
    </div>
  );
}