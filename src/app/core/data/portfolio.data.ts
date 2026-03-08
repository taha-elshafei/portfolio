import { Project } from '../models/project.model';
import { Skill } from '../models/skill.model';
import { SocialLink } from '../models/social-link.model';
import { NavItem } from '../models/nav-item.model';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', sectionId: 'hero' },
  { label: 'About', sectionId: 'about' },
  { label: 'Tech Stack', sectionId: 'tech-stack' },
  { label: 'Projects', sectionId: 'projects' },
  { label: 'Contact', sectionId: 'contact' },
];

export const SKILLS: Skill[] = [
  // Backend
  { name: 'C#', icon: 'assets/icons/tech/csharp.svg', category: 'backend' },
  { name: 'ASP.NET Core', icon: 'assets/icons/tech/dotnet.svg', category: 'backend' },
  { name: 'ASP.NET MVC', icon: 'assets/icons/tech/dotnet.svg', category: 'backend' },
  { name: '.NET Framework', icon: 'assets/icons/tech/dotnet.svg', category: 'backend' },
  { name: 'Identity Framework', icon: 'assets/icons/tech/dotnet.svg', category: 'backend' },
  { name: 'JWT Authentication', icon: 'assets/icons/tech/dotnet.svg', category: 'backend' },

  // Database
  { name: 'SQL Server', icon: 'assets/icons/tech/sql-server.svg', category: 'database' },
  { name: 'MySQL', icon: 'assets/icons/tech/sql-server.svg', category: 'database' },

  // Frontend
  { name: 'Angular', icon: 'assets/icons/tech/angular.svg', category: 'frontend' },
  { name: 'TypeScript', icon: 'assets/icons/tech/typescript.svg', category: 'frontend' },
  { name: 'JavaScript', icon: 'assets/icons/tech/javascript.svg', category: 'frontend' },
  { name: 'HTML5', icon: 'assets/icons/tech/html5.svg', category: 'frontend' },
  { name: 'CSS3', icon: 'assets/icons/tech/css3.svg', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'assets/icons/tech/tailwind.svg', category: 'frontend' },
  { name: 'Bootstrap', icon: 'assets/icons/tech/bootstrap.svg', category: 'frontend' },

  // Tools
  { name: 'Git', icon: 'assets/icons/tech/git.svg', category: 'tools' },
  { name: 'GitHub', icon: 'assets/icons/tech/git.svg', category: 'tools' },
  { name: 'Postman', icon: 'assets/icons/tech/vscode.svg', category: 'tools' },
  { name: 'Figma', icon: 'assets/icons/tech/vscode.svg', category: 'tools' },
  { name: 'Visual Studio', icon: 'assets/icons/tech/vs.svg', category: 'tools' },
  { name: 'VS Code', icon: 'assets/icons/tech/vscode.svg', category: 'tools' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Educational Center Management System',
    description: 'A web-based system to manage students, teachers, classes, and payments for an educational center. Implemented authentication, user roles, and permissions with layered architecture for scalability and maintainability.',
    image: 'assets/images/projects/project-1.webp',
    technologies: ['ASP.NET MVC', '.NET Framework', 'SQL Server', 'Angular', 'Identity Framework'],
    githubUrl: 'https://github.com/mohamedmoharam',
    featured: true,
  },
  {
    title: 'Nextlearnhub',
    description: 'A multi-role EdTech SaaS platform with four independent portals: Super Admin, Providers, Provider Profile Subdomain, and End Users. Built a comprehensive Super Admin dashboard, dynamic Provider Profile Subdomain system with unique subdomains, and an End User portal with course browsing, enrollment workflows, and personalized learning dashboards.',
    image: 'assets/images/projects/project-2.webp',
    technologies: ['Angular', 'ASP.NET Core', 'SQL Server', 'Tailwind CSS', 'Bootstrap'],
    featured: true,
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/mohamedmohr',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
    ariaLabel: 'GitHub Profile',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/mohamed-moharam',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
    ariaLabel: 'LinkedIn Profile',
  },
  {
    platform: 'WhatsApp',
    url: 'https://wa.me/201066922874',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>`,
    ariaLabel: 'WhatsApp',
  },
  {
    platform: 'Twitter',
    url: 'https://x.com/mohamedmohr',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16h-4.267z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>`,
    ariaLabel: 'X (Twitter) Profile',
  },
  {
    platform: 'Facebook',
    url: 'https://facebook.com/mohamedmohr',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
    ariaLabel: 'Facebook Profile',
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/mohamedmohr',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
    ariaLabel: 'Instagram Profile',
  },
  {
    platform: 'Email',
    url: 'mailto:mmoharam844@gmail.com',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    ariaLabel: 'Send Email',
  },
];

export const PERSONAL_INFO = {
  name: 'Mohamed Moharam',
  title: 'Full Stack Developer',
  subtitle: 'Building scalable multi-role SaaS platforms with Angular and .NET',
  bio: `Full Stack Developer with hands-on experience building scalable multi-role SaaS platforms using Angular and .NET. Skilled in developing RESTful APIs with ASP.NET Core, managing SQL databases, and delivering complete end-to-end features from backend to frontend. Electrical Engineering background brings a disciplined, systems-thinking approach to software architecture and problem-solving.`,
  highlights: [
    { label: 'Education', value: 'B.Eng' },
    { label: 'Projects Completed', value: '2+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Focus', value: '.NET' },
  ],
  cvUrl: '/documents/Mohamed_Moharam_CV.pdf',
  email: 'mmoharam844@gmail.com',
  phone: '+201066922874',
  whatsapp: '+201066922874',
  location: 'Cairo, Egypt',
};
