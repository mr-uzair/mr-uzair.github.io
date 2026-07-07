/**
 * Single source of content truth for the site.
 * Derived from resume/master.md in the career-assets workspace —
 * never add a metric here that master.md does not contain.
 */

export const identity = {
  name: 'Uzair Ashraf',
  fullName: 'Hafiz Uzair Ashraf',
  roles: [
    'Software Architect',
    'AI / LLM Engineer',
    'Senior Full-Stack Engineer',
    'Fintech & Payments Specialist'
  ],
  taglineHtml:
    'I build <b>fintech &amp; payment platforms</b> end-to-end — and I\'m bringing <b>AI/LLM capabilities</b> into production software.',
  email: 'uzair.m.ashraf@gmail.com',
  location: 'Islamabad, Pakistan',
  linkedin: 'https://www.linkedin.com/in/uzair-ashraf-015713146/',
  github: 'https://github.com/mr-uzair',
  repo: 'https://github.com/mr-uzair/mr-uzair.github.io',
  resumePdf: '/assets/UzairCV.pdf',
  site: 'https://uzairashraf.com'
};

export const seo = {
  title: 'Uzair Ashraf — Software Architect & AI Engineer | .NET, Fintech, Payments',
  description:
    'Hafiz Uzair Ashraf — Software Architect & AI Engineer. 9+ years building fintech, payments and AI-enabled products with .NET, Angular/React and Azure. PCI DSS–scoped platforms processing 1M+ transactions/day, integrated with Mastercard, VISA, AMEX & CLAVE.'
};

export const aboutHtml = [
  'I\'m a <b>Software Architect and Senior Full-Stack Engineer</b> with <span class="hl">9+ years</span> building fintech and enterprise products end-to-end — .NET backends, Angular/React front ends, and the Azure DevOps pipelines that ship them. Team Lead from 2019; architect since 2024.',
  'Most of my work lives in <b>payments</b>: card-issuing wallets and transaction-acquiring engines processing <span class="hl">1M+ transactions a day</span> across Latin America, built and operated in <span class="hl">PCI DSS–scoped environments</span>. I lean on Clean Architecture and Domain-Driven Design to keep complex financial systems maintainable as they scale.',
  'Right now I\'m focused on bringing <span class="hl">AI/LLM capabilities into production apps</span> and modernizing on the latest .NET. Open to senior/staff and engineering-lead roles — USA, UK, EU (relocation + sponsorship) and Pakistan.'
];

export const trustNetworks = ['MASTERCARD', 'VISA', 'AMEX', 'CLAVE'];

export const stats = [
  { n: '9+', label: 'Years Experience' },
  { n: '1M+', label: 'Transactions Processed / Day' },
  { n: '10+', label: 'Years in Production (NeoGateway)' },
  { n: '1,000+', label: 'Stores on Wa! QR Network' }
];

export interface Experience {
  when: string;
  title: string;
  org: string;
  url: string;
  bulletsHtml: string[];
  tech: string[];
}

export const experience: Experience[] = [
  {
    when: '2024 — Present',
    title: 'Software Architect',
    org: 'CROEM (Pvt.) Ltd. — Fintech (~100 employees) · Islamabad',
    url: 'https://croeminc.com/',
    bulletsHtml: [
      'Lead architecture and technical strategy for payment platforms processing <span class="m">1M+ transactions a day</span> — microservices, event-driven systems (Azure Service Bus, RabbitMQ, Kafka), CQRS and DDD.',
      'Integrate AI/LLM capabilities into production systems: RAG pipelines, AI chatbots and agent workflows on Azure OpenAI, Claude and Semantic Kernel / LangChain.',
      'Own technical decision-making — technology selection, coding standards, architecture reviews and Azure DevOps CI/CD design — in <span class="m">PCI DSS</span>–scoped environments.'
    ],
    tech: ['.NET 8', 'Azure', 'AI / LLM', 'Kafka', 'CQRS / DDD', 'Azure DevOps']
  },
  {
    when: '2019 — 2023',
    title: 'Senior Full-Stack Engineer · Team Lead',
    org: 'CROEM (Pvt.) Ltd. — Fintech · Islamabad',
    url: 'https://croeminc.com/',
    bulletsHtml: [
      'Led a development team across code review, CI/CD and real-time production support for card-issuing and acquiring platforms across LATAM.',
      'Led a transaction-processing initiative that cut processing time <span class="m">~20%</span>, improving system efficiency and client satisfaction.',
      'Built secure, compliance-aware financial systems with Clean Architecture / DDD / modular-monolith patterns.'
    ],
    tech: ['.NET', 'Angular', 'React', 'DDD', 'SQL Server']
  },
  {
    when: '2017 — 2019',
    title: 'Full-Stack Software Engineer',
    org: 'FUTURESOL — Islamabad',
    url: 'https://www.futuresol.net/',
    bulletsHtml: [
      'Built an ERP solution from scratch through to production release — front end, back end, and MS SQL database design.',
      'Drove a stability initiative that reduced post-release issues <span class="m">~30%</span> through rigorous testing and debugging.'
    ],
    tech: ['.NET', 'SQL Server', 'JavaScript']
  }
];

export interface Project {
  name: string;
  badge: string;
  url?: string;
  descriptionHtml: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    name: 'Wa! — MI Wallet',
    badge: 'CARD ISSUING · PANAMA',
    url: 'https://daimvirtual.com/',
    descriptionHtml:
      'All-in-one wallet and prepaid card-issuing platform: benefits reception, savings accounts, bill pay, and QR withdrawals at <span class="m">1,000+ stores</span>. Live at daimvirtual.com.',
    tech: ['.NET 8 API', 'ABP.IO / DDD', 'SignalR', 'Ionic-Angular', 'React']
  },
  {
    name: 'NeoGateway',
    badge: 'PAYMENT GATEWAY · USA',
    descriptionHtml:
      'Transaction-acquiring engine (eCommerce, POS, IVR, SDK, API) integrated directly with <span class="m">Mastercard, VISA, AMEX, CLAVE</span> — 10+ years in production across Latin America, covering processing through clearing and settlement.',
    tech: ['.NET Core', 'DDD / MVVM', 'Angular', 'SQL Server']
  },
  {
    name: 'MiCedulad',
    badge: 'AWARD-WINNING · CIVIC',
    url: 'https://micedulad.com/',
    descriptionHtml:
      'Award-winning COVID-19 citizen-assistance platform built for Panama, delivering essential aid to citizens during the pandemic.',
    tech: ['.NET Core 3.1', 'DDD', 'Ionic-Angular', 'Azure DevOps']
  },
  {
    name: 'Property Manuel',
    badge: 'SAAS · HOME MGMT',
    descriptionHtml:
      'Home-management platform for documents, warranties and manuals, with automated appliance-manual enrichment. Free to use.',
    tech: ['.NET 8 API', 'ABP.IO', 'SignalR', 'Ionic-Angular']
  }
];

export const skillGroups = [
  { title: 'Backend', body: 'C# · .NET / .NET Core (→ .NET 10) · ASP.NET Core Web API · EF Core · Dapper · ABP.IO · SignalR · Node.js', wide: false },
  { title: 'Frontend', body: 'Angular · React · React Native · Ionic · TypeScript · Bootstrap', wide: false },
  { title: 'Architecture', body: 'Clean Architecture · Domain-Driven Design · Modular Monolith · Microservices · REST', wide: false },
  { title: 'Data & DevOps', body: 'SQL Server · MongoDB · Azure DevOps CI/CD · Git · Production support', wide: false },
  { title: 'Payments & Compliance', body: 'PCI DSS–scoped engineering · secure card-data handling · card-network integrations (Mastercard, VISA, AMEX, CLAVE) · transaction processing, clearing & settlement', wide: false },
  { title: 'AI Engineering ▲ growing', body: 'LLM / RAG integration · AI-assisted development · Claude & OpenAI APIs · agentic workflows · .NET Aspire', wide: false }
];

export interface ArchiveProject {
  year: string;
  name: string;
  description: string;
  url?: string;
  tech: string[];
}

/** Full project archive (restored from the original portfolio's /projects page). */
export const archiveProjects: ArchiveProject[] = [
  {
    year: '2022',
    name: 'NFT Market Place',
    description:
      'Revenue-generating engagement platform with QR-code offline marketing, live chat / call / livestream support, and user analytics.',
    tech: ['.NET Core API', 'DDD / ABP.IO', 'EF / Dapper / SignalR', 'Ionic-Angular', 'React', 'SQL Server', 'Azure DevOps']
  },
  {
    year: '2022',
    name: 'go NDA',
    description:
      'Mobile platform for automated legal templates with real-time execution — NDAs generated and signed on the go.',
    url: 'https://www.getgonda.com/',
    tech: ['React Native', 'TypeScript']
  },
  {
    year: '2021',
    name: 'Azhealth24',
    description:
      'Hybrid cross-platform healthcare application delivering services across web, iOS and Android.',
    tech: ['.NET Core 3.1 API', 'DDD', 'EF / LINQ', 'Ionic-Angular', 'GitLab', 'SQL Server']
  },
  {
    year: '2020',
    name: 'Fourlead',
    description:
      'Malaysian job portal with a behaviour-assessment engine for better candidate–employer matching.',
    tech: ['.NET Core 3.1 API', 'DDD', 'EF / LINQ', 'Angular', 'Docker', 'SQL Server']
  },
  {
    year: '2020',
    name: 'Sahulat Services',
    description: 'On-demand handyman services app.',
    tech: ['.NET Core 3.1 API', 'DDD', 'EF / LINQ', 'Angular', 'Azure DevOps', 'SQL Server']
  },
  {
    year: '2019',
    name: 'Fox Rehabilitation',
    description:
      'Healthcare web platform for patient–clinician interaction, appointment scheduling and home-based care.',
    tech: ['.NET Core 3.1 API', 'DDD', 'EF / LINQ', 'Angular', 'Azure DevOps', 'SQL Server']
  },
  {
    year: '2018',
    name: 'School ERP Solutions',
    description: 'ezSCHOOL-ERP — school and college management software.',
    url: 'http://www.ezschoolerp.com/',
    tech: ['ASP.NET MVC 5', 'EF / LINQ', 'Oracle', 'TFS']
  },
  {
    year: '2018',
    name: 'Franchise Management System',
    description: 'Bird\'s-eye operational view of all franchises for top management.',
    tech: ['ASP.NET MVC 5', 'EF / LINQ', 'SQL Server', 'TFS']
  },
  {
    year: '2017',
    name: 'Multivendor E-Commerce Platform',
    description: 'Marketplace for buying and selling new and used mobile devices online.',
    tech: ['ASP.NET MVC 5', 'ASP.NET Identity', 'EF / LINQ', 'SQL Server']
  }
];

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];
