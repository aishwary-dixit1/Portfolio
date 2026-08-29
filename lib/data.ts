import { Github, Linkedin, Mail, FileText, Code2, Terminal, Cpu, Globe, Server, Database, Container, Trophy, BriefcaseBusiness } from "lucide-react";

export const USER = {
  name: "Aishwary Dixit",
  role: "Software Developer Engineer Intern | CSE Undergraduate",
  location: "Ranchi, India",
  college: "IIIT Ranchi",
  bio: "I build resilient, high-performance backend systems and distributed architectures. Currently focused on scalable APIs, concurrency control, and event-driven platforms.",
  
  skills: [
    { 
      category: "Programming Languages", 
      items: ["Java", "C++", "C", "TypeScript", "JavaScript", "Python", "SQL"],
      icon: Code2
    },
    { 
      category: "Backend & Frameworks", 
      items: ["Spring Boot", "Node.js", "Express.js", "React.js", "Redux"],
      icon: Database
    },
    { 
      category: "Cloud & DevOps", 
      items: ["AWS (EC2, S3, Lambda)", "Docker", "Git", "Linux"],
      icon: Globe
    },
    { 
      category: "Databases & Messaging", 
      items: ["PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "Kafka"],
      icon: Container
    },
    { 
      category: "Concepts", 
      items: ["Distributed Systems", "Microservices", "Event-Driven Design", "Concurrency Control", "System Design", "Object-Oriented Programming (OOP)", "Data Structures & Algorithms"],
      icon: Server
    }
  ],

  codingProfiles: [
    { name: "LeetCode", url: "https://leetcode.com/u/aishwary_dixit/", rating: "Knight (1964)", solved: "Top 3%", color: "text-yellow-500" },
    { name: "CodeChef", url: "https://www.codechef.com/users/aishwarydixit", rating: "4★ (1817)", solved: "Global Rank 102", color: "text-orange-500" },
    // { name: "AlgoUniversity", url: "https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/atf_stage_1/aishwary-dixit.png", rating: "Top 20% Fellowship", solved: "20,000+ Participants", color: "text-blue-500" },
  ],

  socials: [
    { name: "GitHub", url: "https://github.com/aishwary-dixit1", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/aishwary-dixit/", icon: Linkedin },
    { name: "Email", url: "mailto:mr.dixit17@gmail.com", icon: Mail },
    { name: "Resume", url: "https://drive.google.com/file/d/16mezOE-t-kmrSiEO00lgmowOAsa0iO-g/view?usp=sharing", icon: FileText }
  ],

  experience: [
    {
      title: "Full Stack Developer Intern",
      company: "Nimble AI",
      duration: "Jul 2026 - Present",
      location: "India",
      icon: BriefcaseBusiness,
      highlights: [
        "Designed, built, and deployed on AWS EC2 a low-latency Node.js redirect server that resolves inbound API hits to target URLs with near-zero delay while asynchronously logging click analytics to PostgreSQL",
        "Architected an abandoned cart recovery system from scratch: verified HMAC webhook signatures from e-commerce platforms and enqueued payloads to RabbitMQ for immediate 200 acknowledgment",
        "Built a RabbitMQ worker service to sequentially process queued cart events, persisting analytics to PostgreSQL and triggering the Meta WhatsApp Business API to recover abandoned carts",
        "Collaborate cross-functionally through regular code reviews and system design discussions with the engineering team"
      ]
    },
    {
      title: "Software Developer Engineer Intern",
      company: "Syncliner Software Platforms Pvt. Ltd.",
      duration: "Jun 2025 - Dec 2025",
      location: "India",
      icon: BriefcaseBusiness,
      recommendation: "https://drive.google.com/file/d/1n302BEMrZZJ4ALXicUoZxeVhP5H8Fd_c/view?usp=sharing",
      highlights: [
        "Architected scalable RESTful APIs in Java using object-oriented design principles and Spring Boot with JWT for secure authentication, integrating Razorpay API to handle high-concurrency transaction workflows",
        "Guaranteed ACID compliance and prevented 100% of duplicate payments across distributed consumers by implementing custom idempotency keys and transactional database locking",
        "Engineered an event-driven webhook architecture using the Factory Design Pattern, authoring detailed system design documentation for real-time GitHub data synchronization and analytics",
        "Migrated nested, loop-heavy MongoDB eligibility-search queries to Elasticsearch, restructuring multi-stage college/property/eligibility lookups into indexed queries to cut search latency by 91%",
        "Accelerated frontend cycles by 60% with TypeScript + Redux Toolkit Query state management, decoupling testing via Mock Service Worker (MSW) and configured CI/CD quality gates to test on beta and used Istanbul(unit testing) and Playwright (E2E testing) gates to enforce 90% code coverage"
      ] 
    }
  ],
  
  projects: [
    {
      title: "CodeForge",
      desc: "A distributed code execution engine supporting Python, Node.js, Java, and C++ with RabbitMQ job dispatch and hardened Docker sandboxes per submission.",
      icon: Cpu,
      tech: ["Node.js", "Docker", "RabbitMQ", "PostgreSQL", "Redis"],
      github: "https://github.com/aishwary-dixit1/CodeForge",
      demo: "https://github.com/aishwary-dixit1/CodeForge"
    },
    {
      title: "High-Concurrency Flash Sale Engine",
      desc: "A fault-tolerant microservice backend with atomic Redis Lua semaphore locking, RabbitMQ DLX recovery, and stress-tested low-latency consistency under burst traffic.",
      icon: Terminal,
      tech: ["Node.js", "Redis", "RabbitMQ", "Jest"],
      github: "https://github.com/aishwary-dixit1/Flash-Sale-Engine",
      demo: "https://github.com/aishwary-dixit1/Flash-Sale-Engine"
    }
  ],

  achievements: [
    {
      title: "LeetCode Knight",
      detail: "Peak rating of 1964, ranked in Top 3% globally.",
      url: "https://leetcode.com/u/aishwary_dixit/",
      icon: Trophy
    },
    {
      title: "CodeChef 4-Star",
      detail: "Peak competitive rating of 1802 with Global Rank 102 in Starters 156.",
      url: "https://www.codechef.com/users/aishwarydixit",
      icon: Trophy
    }
  ]
};
