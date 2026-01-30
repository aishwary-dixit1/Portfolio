import { Github, Linkedin, Mail, FileText, Code2, Terminal, Cpu, LayoutTemplate, Globe, Server, Database, Container, Wrench } from "lucide-react";

export const USER = {
  name: "Aishwary Dixit",
  role: "Software Engineer & GDG Lead",
  location: "Kanpur, India",
  college: "IIIT Ranchi",
  bio: "I build high-performance systems. Currently focused on backend architecture, distributed systems, and AI-driven platforms.",
  
  skills: [
    { 
      category: "Languages", 
      items: ["C/C++", "Java", "Python", "JavaScript", "SQL", "Lua"],
      icon: Code2
    },
    { 
      category: "Backend & DB", 
      items: ["Node.js", "Redis", "RabbitMQ", "PostgreSQL", "MongoDB", "Socket.io"],
      icon: Database
    },
    { 
      category: "Frameworks", 
      items: ["React", "Express", "Redux"],
      icon: Globe
    },
    { 
      category: "Tools & DevOps", 
      items: ["Git/GitHub", "AWS", "Linux", "Postman", "Jest"],
      icon: Container
    },
    { 
      category: "Concepts", 
      items: ["System Design", "Microservices", "Distributed Systems", "Concurrency Control", "Object-Oriented Programming (OOP)", "Operating System Concepts", "DBMS", "Computer Networks"],
      icon: Server
    }
  ],

  codingProfiles: [
    { name: "LeetCode", url: "https://leetcode.com/u/aishwary_dixit/", rating: "Knight (1858)", solved: "300+", color: "text-yellow-500" },
    { name: "CodeChef", url: "https://www.codechef.com/users/aishwarydixit", rating: "3★ (1736)", solved: "200+", color: "text-orange-500" },
    { name: "Codeforces", url: "https://codeforces.com/profile/4O4_stillnotfound", rating: "Pupil", solved: "40+", color: "text-blue-500" },
  ],

  socials: [
    { name: "GitHub", url: "https://github.com/aishwary-dixit1", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/aishwary-dixit/", icon: Linkedin },
    { name: "Email", url: "mailto:mr.dixit17@gmail.com", icon: Mail },
    { name: "Resume", url: "https://drive.google.com/file/d/11w7U98YQRFxlfUkFAPfdbwBjssPFTuLn/view?usp=sharing", icon: FileText }
  ],
  
  projects: [
    {
      title: "Flash Sale Engine",
      desc: "A high-concurrency distributed backend capable of handling 10,000+ requests with zero overselling. Built with Node.js, Redis (Lua Scripting) for atomic locking, and RabbitMQ (DLX) for automated inventory recovery.",
      icon: Cpu,
      tech: ["Node.js", "Redis", "RabbitMQ", "Jest"],
      github: "https://github.com/aishwary-dixit1/Flash-Sale-Engine",
      demo: "https://github.com/aishwary-dixit1/Flash-Sale-Engine"
    },
    {
      title: "Web-Chat",
      desc: "A real-time messaging web app for seamless communication. Features instant messaging, user authentication, media sharing, and a sleek, responsive UI. Powered by Node.js, React, Socket.io, and MongoDB for fast and secure conversations. ",
      icon: Terminal,
      tech: ["React", "Socket.io", "Node.js", "MongoDB", "JWT", "Render", "Express.js"],
      github: "https://github.com/aishwary-dixit1/Web-Chat",
      demo: "https://web-chat-4a1l.onrender.com/"
    },
    {
      title: "Git-Match",
      desc: "A Tinder-like matchmaking app for developers, helping coders connect based on skills, interests, and projects. Built with Node.js, Express.js, MongoDB, React, and JWT for seamless authentication and secure connections.",
      icon: LayoutTemplate,
      tech: ["React", "Socket.io", "Node.js", "MongoDB", "Redux", "JWT", "Express.js"],
      github: "https://github.com/aishwary-dixit1/Git-Match",
      demo: "https://github.com/aishwary-dixit1/Git-Match"
    },
    {
      title: "FarmLink",
      desc: "An Android app connecting farmers directly to consumers and retailers, eliminating middlemen. With features like Google Maps integration, real-time chat, and transparent pricing, it ensures fair trade and supports local agriculture.",
      icon: Wrench,
      tech: ["Kotlin", "Jetpack Compose", "Google Maps API", "Firebase", "MongoDB"],
      github: "https://github.com/aishwary-dixit1/FarmLink",
      demo: "https://github.com/aishwary-dixit1/FarmLink"
    }
  ]
};