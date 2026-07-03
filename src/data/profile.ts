/**
 * Single source of content truth for the site.
 * Derived from resume/master.md in the career-assets workspace —
 * never add a metric here that master.md does not contain.
 */

export const identity = {
  name: 'Uzair Ashraf',
  fullName: 'Hafiz Uzair Ashraf',
  roles: [
    'Senior Full-Stack Engineer',
    'AI / LLM Engineer',
    'Fintech Team Lead',
    'DevOps & Platform Engineer'
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
  title: 'Uzair Ashraf — Senior Full-Stack & AI Engineer | .NET, Fintech, Payments',
  description:
    'Hafiz Uzair Ashraf — Senior Full-Stack Software Engineer & Team Lead. 9+ years building fintech, payments and AI-enabled products with .NET, Angular/React and Azure DevOps. Integrated with Mastercard, VISA, AMEX & CLAVE.'
};

export const aboutHtml = [
  'I\'m a <b>Senior Full-Stack Software Engineer and Team Lead</b> with <span class="hl">9+ years</span> building fintech and enterprise products end-to-end — .NET backends, Angular/React front ends, and the Azure DevOps pipelines that ship them.',
  'Most of my work lives in <b>payments</b>: card-issuing wallets and transaction-acquiring engines used across Latin America. I lean on Clean Architecture and Domain-Driven Design to keep complex financial systems maintainable as they scale.',
  'Right now I\'m focused on bringing <span class="hl">AI/LLM capabilities into production apps</span> and modernizing on the latest .NET. Open to senior/staff and engineering-lead roles — USA, UK, EU (relocation + sponsorship) and Pakistan.'
];

export const trustNetworks = ['MASTERCARD', 'VISA', 'AMEX', 'CLAVE'];

export const stats = [
  { n: '9+', label: 'Years Experience' },
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
    when: '2019 — Present',
    title: 'Senior Full-Stack Engineer · Team Lead',
    org: 'CROEM (Pvt.) Ltd. — Fintech · Islamabad',
    url: 'https://croeminc.com/',
    bulletsHtml: [
      'Lead a development team across architecture, code review, CI/CD and real-time production support for financial products.',
      'Led a transaction-processing initiative that cut processing time <span class="m">~20%</span>, improving system efficiency and client satisfaction.',
      'Designed Clean Architecture / DDD / modular-monolith systems for card issuing and payment acquiring across LATAM.'
    ],
    tech: ['.NET 8', 'Angular', 'React', 'DDD', 'Azure DevOps', 'SQL Server']
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
  { title: 'AI Engineering ▲ growing', body: 'LLM / RAG integration · AI-assisted development · Claude & OpenAI APIs · agentic workflows · .NET Aspire', wide: true }
];

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];
