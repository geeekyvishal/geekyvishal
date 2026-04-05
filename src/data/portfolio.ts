export type NavItem = {
  label: string;
  href: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  stack: string[];
  href?: string;
  github: string;
  bullets: string[];
  linkLabel?: string;
};

export type TimelineItem = {
  title: string;
  subtitle: string;
  period: string;
  location: string;
  bullets: string[];
  logo?: string;
};

export type SocialItem = {
  label: string;
  href: string;
  kind: 'github' | 'linkedin' | 'x' | 'email' | 'resume' | 'home';
};

export const profile = {
  name: 'Vishal Singh',
  initials: 'VS',
  role: 'Full Stack Developer & iOS Engineer',
  email: 'geeekyvishal@gmail.com',
  phone: '+91-9244395723',
  github: 'https://github.com/geeekyvishal',
  linkedin: 'https://linkedin.com/in/geekyvishal',
  x: 'https://x.com/geeekyvishal',
  resumeHref: '/Vishal_Singh_Resume.pdf',
  headline:
    'I build fast, product-minded software across iOS, web, and backend systems, with a strong bias for clean architecture and measurable performance.',
  heroDescription:
    'Computer Science student at IIIT Nagpur, Head of Development at CRISPR, and a builder focused on SwiftUI, Next.js, Node.js, distributed systems, and production-ready developer tooling.',
  availability: 'Open to internships, freelance work, and ambitious product collaborations.'
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' }
];

export const heroMetrics: Metric[] = [
  { value: '43k+', label: 'req/s benchmarked on cached retries' },
  { value: '0.5ms', label: 'prefix search latency on 5,000+ records' },
  { value: 'AIR 5', label: 'C.R. Rao Statistics Olympiad' }
];

export const focusAreas = [
  'Native iOS with SwiftUI and SwiftData',
  'Full-stack apps with Next.js, Node.js, and PostgreSQL',
  'Distributed-system tooling with Redis, Docker, and CI/CD',
  'Performance-focused engineering with strong testing discipline'
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['Swift', 'Rust', 'TypeScript', 'JavaScript', 'Python', 'C++', 'Java', 'SQL']
  },
  {
    title: 'Frontend & Mobile',
    items: ['SwiftUI', 'Next.js', 'React.js', 'Tailwind CSS', 'Xcode', 'Chrome Extensions']
  },
  {
    title: 'Backend & Data',
    items: ['Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'MongoDB', 'MySQL', 'REST APIs']
  },
  {
    title: 'DevOps & Concepts',
    items: ['Docker', 'CI/CD', 'System Design', 'TDD', 'Microservices', 'Distributed Systems']
  }
];

export const projects: Project[] = [
  {
    title: 'Lekha',
    eyebrow: 'Offline-first iOS product',
    description:
      'A zero-dependency SME ledger app built fully with native Apple frameworks for fast, reliable bookkeeping without network dependence.',
    image: '/projects/lekha.svg',
    stack: ['SwiftUI', 'SwiftData', 'Vision', 'MVVM-C'],
    github: 'https://github.com/geeekyvishal',
    bullets: [
      'Built custom Trie-based indexing for 5,000+ records with around 0.5ms prefix search.',
      'Used Swift Actors and denormalized caching for thread-safe transaction handling and O(1) balance lookups.',
      'Integrated on-device OCR with Vision and validated logic through a 61-test suite.'
    ],
    linkLabel: 'GitHub'
  },
  {
    title: 'NoteCode',
    eyebrow: 'Shipped Chrome extension',
    description:
      'A feature-rich note utility shipped to real users, with automated syncing and lightweight workflow automation through Google Sheets.',
    image: '/projects/notecode.svg',
    stack: ['JavaScript', 'Chrome APIs', 'Google Apps Script', 'Google Sheets API'],
    github: 'https://github.com/geeekyvishal',
    bullets: [
      'Owned the product from development to deployment with 60+ active users.',
      'Integrated a Google Apps Script backend for note sync and structured data management.',
      'Designed for speed and simplicity rather than bloated extension UX.'
    ],
    linkLabel: 'GitHub'
  },
  {
    title: 'Mercari Clone',
    eyebrow: 'Microservices e-commerce system',
    description:
      'A full-stack e-commerce platform connecting a SwiftUI iOS client, Node.js backend, AI pricing service, and real-time messaging architecture.',
    image: '/projects/mercari.svg',
    stack: ['SwiftUI', 'Node.js', 'PostgreSQL', 'Docker', 'FastAPI', 'Socket.io'],
    github: 'https://github.com/geeekyvishal',
    bullets: [
      'Connected native iOS, Prisma-backed APIs, and Dockerized services into one coherent system.',
      'Added AI-powered dynamic pricing through a Python/FastAPI microservice.',
      'Implemented bidirectional messaging with Socket.io and protected APIs with JWT auth.'
    ],
    linkLabel: 'GitHub'
  },
  {
    title: 'Fintech Idempotency Middleware',
    eyebrow: 'Developer tooling / npm package',
    description:
      'An enterprise-style npm package that provides exactly-once execution guarantees for critical REST APIs in distributed systems.',
    image: '/projects/idempotency.svg',
    stack: ['TypeScript', 'Node.js', 'Redis', 'PostgreSQL', 'Jest', 'npm'],
    href: 'https://www.npmjs.com/package/@geekyvishal/idempotency-key-middleware',
    github: 'https://github.com/geeekyvishal',
    bullets: [
      'Designed pluggable Redis and PostgreSQL adapters using Factory and Strategy patterns.',
      'Reached 43k+ requests per second on cached retries with p99 latency under 8 ms.',
      'Backed the package with an extensive Jest test suite for reliability.'
    ],
    linkLabel: 'npm'
  }
];

export const experience: TimelineItem[] = [
  {
    title: 'Open Source Contributor',
    subtitle: 'Summer of Bitcoin',
    period: 'Mar 2026 - Present',
    location: 'Remote',
    logo: '/sob.png',
    bullets: [
      'Contributing to global open-source Bitcoin and Lightning Network projects using modern frameworks.',
      'Collaborating with an international community of developers to resolve issues and implement new features.',
      'Learning deep technical concepts related to cryptography, consensus, and decentralized systems.'
    ]
  },
  {
    title: 'Solana India Fellow',
    subtitle: 'Solana India',
    period: 'Mar 2026 - Present',
    location: 'Remote',
    logo: '/superteam.png',
    bullets: [
      'Selected among the top 150 developers across India for an exclusive, highly competitive 8-week hands-on learning cohort led by Harkirat Singh.',
      'Participating in guided quests and building diverse real-world projects spanning from Web3 Gaming and NFTs to DeFi and DAO tooling.',
      'Engaging with leading ecosystem experts, competing for grants at Demo Day, and expanding opportunities in the broader Solana ecosystem.'
    ]
  },
  {
    title: 'Solana Developer',
    subtitle: 'Turbin3',
    period: 'Jul 2025 - Aug 2025',
    location: 'Remote',
    logo: '/turbin3.png',
    bullets: [
      'Successfully graduated from the Turbin3 builder cohort, gaining deep experience in Solana blockchain development.',
      'Built fully functional client-side Web3 applications capable of seamless interaction with on-chain programs.',
      'Architected and wrote secure smart contracts using the Anchor framework for decentralized applications (dApps).'
    ]
  },
  {
    title: 'Head of Development',
    subtitle: 'CRISPR IIIT Nagpur',
    period: 'Aug 2024 - Aug 2025',
    location: 'Nagpur, India',
    logo: '/crispr.png',
    bullets: [
      'Led full-stack product delivery for institutional needs from requirements gathering to deployment and maintenance.',
      'Mentored junior developers and established Git workflows, code reviews, and testing standards.',
      'Maintained CI/CD pipelines and production systems using React.js, Node.js, PostgreSQL, MongoDB, and Docker.'
    ]
  },
  {
    title: 'Freelance Developer',
    subtitle: 'Self-employed',
    period: 'Feb 2024 - Apr 2025',
    location: 'Remote',
    logo: '/freelance.png',
    bullets: [
      'Delivered end-to-end iOS applications using SwiftUI and native Apple frameworks, focusing on offline-first architecture and smooth UX.',
      'Built and shipped Chrome extensions with real-time DOM manipulation, syncing, and Google Sheets API integration for productivity tools.',
      'Developed RESTful backend services with Node.js, Express, and PostgreSQL, including auth flows, rate limiting, and deployment via Docker.',
      'Collaborated directly with clients to scope requirements, iterate on feedback, and deliver production-ready products on tight timelines.'
    ]
  }
];

export const education: TimelineItem[] = [
  {
    title: 'Bachelor of Technology in Computer Science & Engineering',
    subtitle: 'Indian Institute of Information Technology, Nagpur',
    period: 'Expected Aug 2027',
    location: 'Nagpur, India',
    bullets: [
      'Relevant coursework: Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks, Distributed Systems, Software Engineering.',
      'Balancing academics with leadership, product engineering, technical writing, and competitive programming.'
    ]
  }
];

export const achievements = [
  'Authored zero-to-hero LaTeX textbooks on Rust and Dynamic Programming.',
  'Amazon ML Challenge 2025: ranked 262 out of 7000+ teams.',
  'Silicon Maze (NITK): Rank 3 overall and Rank 1 in Competitive Programming.',
  '3-Star CodeChef (max rating 1648) and Pupil on Codeforces (max rating 1301).'
];

export const contactBlurb =
  'If you are building something ambitious and want someone who can think across product, performance, and implementation detail, I would love to talk.';

export const socialLinks: SocialItem[] = [
  { label: 'X', href: profile.x, kind: 'x' },
  { label: 'GitHub', href: profile.github, kind: 'github' },
  { label: 'LinkedIn', href: profile.linkedin, kind: 'linkedin' },
  { label: 'Email', href: `mailto:${profile.email}`, kind: 'email' },
  { label: 'Resume', href: profile.resumeHref, kind: 'resume' }
];

export const socialDockItems: SocialItem[] = [
  { label: 'Home', href: '#home', kind: 'home' },
  { label: 'GitHub', href: profile.github, kind: 'github' },
  { label: 'LinkedIn', href: profile.linkedin, kind: 'linkedin' },
  { label: 'X', href: profile.x, kind: 'x' },
  { label: 'Email', href: `mailto:${profile.email}`, kind: 'email' },
  { label: 'Resume', href: profile.resumeHref, kind: 'resume' }
];
