import { Github, Linkedin, Mail, FileText, Code2, Terminal, Cpu, Globe, Server, Database, Container, Trophy, BriefcaseBusiness } from "lucide-react";

export const USER = {
  name: "Aishwary Dixit",
  role: "Software Developer Engineer Intern | CSE Undergraduate",
  location: "Ranchi, India",
  college: "IIIT Ranchi",
  bio: "I build resilient, high-performance backend systems and distributed architectures. Currently focused on scalable APIs, concurrency control, and event-driven platforms.",
  
  skills: [
    { 
      category: "Languages", 
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
    { name: "Resume", url: "https://drive.google.com/file/d/1ajfhZH-rbBFWS62MlYlhD41faZMXDDez/view?usp=sharing", icon: FileText }
  ],

  experience: [
    {
      title: "Software Engineer Intern",
      company: "Nimble AI",
      duration: "Jul 2026 - Sep 2026",
      location: "India",
      icon: BriefcaseBusiness,
      highlights: [
        "Architected a high-throughput Node.js link redirection microservice on AWS EC2, achieving 153+ RPS (9,300+ requests/min) under 100 concurrent virtual users with 0.00% error rate by decoupling HTTP redirects from async PostgreSQL click logging.",
        "Engineered an event-driven Shopify abandoned cart recovery pipeline with stateless HMAC-SHA256 webhook verification, BullMQ/Redis delayed jobs, and Meta WhatsApp Cloud API messaging enforced by 24-hour Redis rate-limiting locks to eliminate notification fatigue.",
        "Executed full-system stress testing across all microservices using Postman Performance Mode and Autocannon, validating 7,690+ combined requests/min with 111ms average latency (p95 156ms) and 0.00% failure rate while monitoring CPU and memory limits.",
        "Built an asynchronous AI-powered communication layer using FastAPI, Python, and PostgreSQL, with RabbitMQ processing webhooks in under 200ms with WAMID deduplication, and a multi-provider LLM abstraction with dynamic tool calling for a real-time customer support AI agent."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Syncliner Software Platforms Pvt. Ltd.",
      duration: "Jun 2025 - Dec 2025",
      location: "India",
      icon: BriefcaseBusiness,
      recommendation: "https://drive.google.com/file/d/1n302BEMrZZJ4ALXicUoZxeVhP5H8Fd_c/view?usp=sharing",
      highlights: [
        "Designed scalable RESTful APIs in Java using object-oriented design principles and Spring Boot with JWT for secure authentication, integrating Razorpay API to handle high-concurrency transaction workflows.",
        "Ensured ACID-compliant payment handling and eliminated duplicate payments across distributed consumers by implementing custom idempotency keys and transactional database locking.",
        "Engineered an event-driven webhook architecture using the Factory Design Pattern, authoring detailed system design documentation for real-time GitHub data synchronization and analytics",
        "Migrated nested, loop-heavy MongoDB eligibility-search queries to Elasticsearch, restructuring multi-stage college/property/eligibility lookups into indexed queries to cut search latency by 91%.",
        "Reduced frontend test/build cycle time using TypeScript + Redux Toolkit Query, decoupled testing via MSW, and enforced 90% code coverage through CI/CD gates using Istanbul and Playwright."
      ] 
    }
  ],
  featuredProject: {
    title: "Cromone Greens",
    tagline: "B2B Electrical Components & Inventory Catalog",
    desc: "A production B2B inventory catalog web application engineered for an electrical equipment supplier. Features 47+ indexed industrial components, category-based faceted filtering, real-time specifications, and an integrated quote inquiry pipeline.",
    url: "https://cromone.com",
    role: "Full-Stack Developer",
    status: "Live in Production",
    metrics: [
      { label: "Catalog Items", value: "47+ Components" },
      { label: "Deployment", value: "Vercel & Render" },
      { label: "Workflow", value: "B2B Quote (RFQ)" },
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "REST API", "Vercel", "Render", "Cloudinary"],
  },

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
      tech: ["Lua", "Node.js", "Redis", "RabbitMQ", "Jest"],
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
      detail: "Peak competitive rating of 1817 with Global Rank 102 in Starters 156.",
      url: "https://www.codechef.com/users/aishwarydixit",
      icon: Trophy
    }
  ]
};
