"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { USER } from '@/lib/data';
import { ArrowUpRight, Github, ExternalLink, Code, Database, Users, Mail, Cpu, Terminal, Layers, MapPin, GraduationCap } from 'lucide-react';
import FloatingNav from '@/components/FloatingNav';
import { useState } from 'react';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } 
  }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

// --- Components ---

// 1. Social Link with Pop-up Tooltip
function SocialLink({ social }: { social: any }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.8 }}
            className="absolute -top-10 px-3 py-1 bg-white text-black text-xs font-bold rounded-full shadow-xl whitespace-nowrap z-20"
          >
            {social.name}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
      <a 
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="p-3 glass-card rounded-xl hover:scale-110 hover:bg-white/10 active:scale-95 transition-all duration-300 border border-white/10 group"
      >
        <social.icon size={20} className="text-white/70 group-hover:text-white transition-colors" />
      </a>
    </div>
  );
}

// 2. UPDATED: Infinite Skill Stream with Color Themes
const SkillStream = ({ 
  skills, 
  direction = "left", 
  speed = 20,
  theme = "blue" // Default theme
}: { 
  skills: string[], 
  direction?: "left" | "right", 
  speed?: number,
  theme?: "blue" | "amber" | "purple"
}) => {
  
  // Define hover styles based on theme
  const themeStyles = {
    blue: "hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:text-cyan-100 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]",
    amber: "hover:bg-amber-500/20 hover:border-amber-400/50 hover:text-amber-100 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]",
    purple: "hover:bg-purple-500/20 hover:border-purple-400/50 hover:text-purple-100 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
  };

  return (
    <div className="flex overflow-hidden relative z-0 w-full mask-gradient py-2">
      {/* Mask to fade edges */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
      
      <motion.div 
        className="flex gap-4 whitespace-nowrap"
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
      >
        {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
          <div 
            key={i} 
            className={`px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white/60 text-sm font-medium transition-all duration-300 cursor-default ${themeStyles[theme]}`}
          >
            {skill}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function Portfolio() {
  // Flatten skills for the stream
  const languages = USER.skills.find(s => s.category === "Languages")?.items || [];
  const backend = USER.skills.find(s => s.category === "Backend & DB")?.items || [];
  const tools = [...(USER.skills.find(s => s.category === "Tools & DevOps")?.items || []), ...(USER.skills.find(s => s.category === "Concepts")?.items || [])];

  return (
    <main className="min-h-screen relative px-6 md:px-12 pb-32 max-w-5xl mx-auto text-white selection:bg-blue-500/30 overflow-x-hidden">
      <div className="bg-mesh fixed inset-0 z-[-1]" />
      <FloatingNav />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center pt-20">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/> Available for work
            </span>

            <span className="px-3 py-1 rounded-full bg-blue-400/10 border border-blue-400/20 text-blue-400 text-sm font-medium flex items-center gap-2">
              <GraduationCap size={16} className="text-blue-400" /> IIIT Ranchi
            </span>

            <span className="px-3 py-1 rounded-full bg-red-400/10 border border-red-400/20 text-red-400 text-sm flex font-medium items-center gap-2">
              <MapPin size={14} className="text-red-400" /> {USER.location}
            </span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            <span className="text-white">Hello, I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {USER.name}.
            </span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl text-white/60 max-w-2xl leading-relaxed mb-8">
            {USER.bio}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex gap-4">
            {USER.socials.map((social) => (
              <SocialLink key={social.name} social={social} />
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={stagger}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-8">About Me</motion.h2>
          <motion.div variants={fadeInUp} className="glass-card p-8 rounded-3xl border border-white/10 bg-white/5">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4 text-white/70 leading-relaxed">
                <p>
                  I’m Aishwary Dixit , a software engineer at <strong className="text-white">IIIT Ranchi</strong> (GPA 8.94)  who thrives at the intersection of complex architecture and community building.
                </p>
                <p>
                  I specialize in Backend Engineering and Distributed Systems. My recent work involves building fault-tolerant systems using Node.js, Redis, and RabbitMQ , including a self-healing microservice architecture that recovers 100% of unpaid order inventory automatically.
                </p>
                <p>
                  Beyond the code, I lead the <strong className="text-white">Google Developer Groups on Campus (GDGoC)</strong> chapter at my university. I’m dedicated to bridging the gap between academic theory and industry-scale application by organizing hackathons and workshops for 550+ peers.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4">
                    <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400"><Code size={24}/></div>
                    <div>
                      <h4 className="font-bold text-white">8.94</h4>
                      <p className="text-xs text-white/50">CGPA (out of 10)</p>
                    </div>
                 </div>
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4">
                    <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400"><Users size={24}/></div>
                    <div>
                      <h4 className="font-bold text-white">GDGoC IIIT Ranchi Organizer (Lead)</h4>
                      <p className="text-xs text-white/50">Community</p>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* NEW: Colorful Technical Skills Section */}
      <section id="skills" className="py-20 overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }} 
          className="text-3xl font-bold mb-8"
        >
          Technical Arsenal
        </motion.h2>
        
        <div className="flex flex-col gap-10 -mx-12 md:mx-0">
          
          {/* Row 1: Languages (Blue/Cyan Glow) */}
          <div className="relative">
             <div className="flex items-center gap-4 mb-3 pl-4 md:pl-0 opacity-80">
                <Terminal size={18} className="text-cyan-400"/> 
                <span className="text-sm uppercase tracking-wider font-semibold text-cyan-200">Core & Languages</span>
             </div>
             <SkillStream skills={languages} direction="left" speed={30} theme="blue" />
          </div>

          {/* Row 2: Backend (Amber/Orange Glow) */}
          <div className="relative">
             <div className="flex items-center gap-4 mb-3 pl-4 md:pl-0 opacity-80">
                <Cpu size={18} className="text-amber-400" /> 
                <span className="text-sm uppercase tracking-wider font-semibold text-amber-200">Backend & Architecture</span>
             </div>
             <SkillStream skills={backend} direction="right" speed={30} theme="amber" />
          </div>

          {/* Row 3: Tools (Purple/Pink Glow) */}
          <div className="relative">
             <div className="flex items-center gap-4 mb-3 pl-4 md:pl-0 opacity-80">
                <Layers size={18} className="text-purple-400" /> 
                <span className="text-sm uppercase tracking-wider font-semibold text-purple-200">DevOps & Tools</span>
             </div>
             <SkillStream skills={tools} direction="left" speed={30} theme="purple" />
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20">
        <motion.h2 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }} 
          className="text-3xl font-bold mb-12"
        >
          Selected Work
        </motion.h2>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {USER.projects.map((project, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              className="glass-card rounded-3xl p-8 relative group overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                  <project.icon size={24} />
                </div>
                <div className="flex gap-2">
                  <a href={project.github} target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors border border-white/10" title="Source Code">
                    <Github size={18} />
                  </a>
                  <a href={project.demo} target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors border border-white/10" title="Live Demo">
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm mb-6">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Coding Profiles Section */}
      <section id="profiles" className="py-20">
        <motion.h2 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }} 
          className="text-3xl font-bold mb-8"
        >
          Coding Profiles
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {USER.codingProfiles.map((profile, i) => (
             <motion.a 
               key={i}
               href={profile.url}
               target="_blank"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
               className="glass-card p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all group"
             >
               <div className="flex justify-between items-start mb-4">
                 <h3 className={`text-xl font-bold ${profile.color}`}>{profile.name}</h3>
                 <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-white/50"/>
               </div>
               <div className="flex justify-between items-end">
                 <div>
                   <p className="text-sm text-white/50">Rating</p>
                   <p className="text-lg font-semibold">{profile.rating}</p>
                 </div>
                 <div className="text-right">
                   <p className="text-sm text-white/50">Solved</p>
                   <p className="text-lg font-semibold">{profile.solved}</p>
                 </div>
               </div>
             </motion.a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 min-h-[50vh] flex flex-col justify-center items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-12 text-center bg-white/5 border border-white/10 max-w-2xl w-full"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to collaborate?</h2>
          <p className="text-white/60 mb-8 mx-auto">
            I'm currently looking for internship opportunities. If you need a robust backend engineer or a creative problem solver, let's talk.
          </p>
          <a 
            href="mailto:your.email@iiitranchi.ac.in"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
          >
            <Mail size={18} />
            Get in Touch
          </a>
        </motion.div>
      </section>
      
      <footer className="text-center text-white/30 text-sm py-8 border-t border-white/5 mt-10">
        © {new Date().getFullYear()} {USER.name}.
      </footer>
    </main>
  );
}