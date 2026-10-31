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
        "Architected a Node.js campaign link redirection microservice on AWS EC2, decoupling in-memory URL parameter parsing and redirects from queue-backed PostgreSQL click-logging sustaining 50,000+ requests/min (830+ RPS) at 25ms average latency (p90 40ms) via Autocannon load testing to prevent campaign click drop-offs.",
        "Engineered an event-driven Shopify abandoned cart recovery pipeline using HMAC-SHA256 webhook verification and BullMQ/Redis, implementing a 30-minute sliding-window debounce keyed by checkout token to reschedule active carts and a 24-hour Redis cooldown lock to drop redundant webhooks pre-queue automating merchant revenue recovery via Meta WhatsApp Cloud API while preventing spam and wasted messaging spend.",
        "Built an asynchronous AI customer support layer using FastAPI, Python, RabbitMQ, and PostgreSQL, enforcing Redis-backed WAMID idempotency (<200ms webhook ack) and a 5-message sliding context window to cut duplicate LLM token spend on webhook retries, with dynamic tool-calling for live order-tracking and policy queries.",
        "Collaborated across Agile sprints via system design discussions, peer PR code reviews, and API documentation, while unblocking teammates on backend issues and leading a technical session on RAG architectures."
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
        "Designed secure payment REST APIs in Java and Spring Boot with JWT authentication and Razorpay API integration to power paid college-counseling subscription plans, automating end-to-end transaction lifecycle verification and webhook state synchronization.",
        "Eliminated duplicate customer charges and payment race conditions during concurrent network retries by implementing custom idempotency keys and ACID-compliant transactional database locking across distributed consumers.",
        "Slashed college-predictor API latency by 91% (from 60s to 5s) and eliminated gateway timeouts by migrating N+1 nested MongoDB rank-cutoff lookups across branches and categories into indexed Elasticsearch queries, pairing it with API pagination to shrink response payload sizes during peak JEE counseling traffic.",
        "Accelerated frontend release velocity and eliminated flaky staging dependencies by decoupling API testing via Mock Service Worker (MSW) with TypeScript and RTK Query, enforcing 90% code coverage gates in CI/CD via Istanbul and Playwright to prevent production UI regressions."
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
