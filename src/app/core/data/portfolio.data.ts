import { Certificate } from '../models/certificate.model';
import { Project } from '../models/project.model';
import { Skill } from '../models/skill.model';
import { SocialLink } from '../models/social-link.model';
import { NavItem } from '../models/nav-item.model';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', sectionId: 'hero' },
  { label: 'About', sectionId: 'about' },
  { label: 'Tech Stack', sectionId: 'tech-stack' },
  { label: 'Projects', sectionId: 'projects' },
  { label: 'Certificates', sectionId: 'certificates' },
  { label: 'Contact', sectionId: 'contact' },
];

export const SKILLS: Skill[] = [
  // Backend
  { name: 'C#', icon: 'assets/icons/tech/csharp.svg', category: 'backend' },
  { name: 'ASP.NET Core Web API', icon: 'assets/icons/tech/dotnet.svg', category: 'backend' },
  { name: 'ASP.NET Core MVC', icon: 'assets/icons/tech/dotnet.svg', category: 'backend' },
  { name: 'EF Core', icon: 'assets/icons/tech/dotnet.svg', category: 'backend' },
  { name: 'MediatR / CQRS', icon: 'assets/icons/tech/dotnet.svg', category: 'backend' },
  { name: 'JWT Authentication', icon: 'assets/icons/tech/dotnet.svg', category: 'backend' },

  // Database
  { name: 'SQL Server', icon: 'assets/icons/tech/sql-server.svg', category: 'database' },

  // Frontend
  { name: 'Angular', icon: 'assets/icons/tech/angular.svg', category: 'frontend' },
  { name: 'TypeScript', icon: 'assets/icons/tech/typescript.svg', category: 'frontend' },
  { name: 'JavaScript', icon: 'assets/icons/tech/javascript.svg', category: 'frontend' },
  { name: 'HTML5', icon: 'assets/icons/tech/html5.svg', category: 'frontend' },
  { name: 'CSS3', icon: 'assets/icons/tech/css3.svg', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'assets/icons/tech/tailwind.svg', category: 'frontend' },
  { name: 'Bootstrap', icon: 'assets/icons/tech/bootstrap.svg', category: 'frontend' },
  { name: 'jQuery', icon: 'assets/icons/tech/javascript.svg', category: 'frontend' },

  // Tools
  { name: 'Git', icon: 'assets/icons/tech/git.svg', category: 'tools' },
  { name: 'GitHub', icon: 'assets/icons/tech/git.svg', category: 'tools' },
  { name: 'Postman', icon: 'assets/icons/tech/vscode.svg', category: 'tools' },
  { name: 'Swagger', icon: 'assets/icons/tech/vscode.svg', category: 'tools' },
];

export const PROJECTS: Project[] = [
  {
    slug: 'nextlearnhub',
    title: 'project.nextlearnhub_title',
    description: 'project.nextlearnhub_desc',
    longDescription: 'project.nextlearnhub_long_desc',
    image: 'assets/images/projects/nextlearn-logo.png',
    placeholderIcon: '🎓',
    placeholderGradient: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
    technologies: ['Angular', 'ASP.NET Core', 'SQL Server', 'Tailwind CSS', 'Bootstrap'],
    featured: true,
    role: 'project.nextlearnhub_role',
    duration: 'project.nextlearnhub_duration',
    features: [
      'project.nextlearnhub_feature_1',
      'project.nextlearnhub_feature_2',
      'project.nextlearnhub_feature_3',
      'project.nextlearnhub_feature_4',
    ],
  },
  {
    slug: 'wajjehni',
    title: 'project.wajjehni_title',
    description: 'project.wajjehni_desc',
    longDescription: 'project.wajjehni_long_desc',
    placeholderIcon: '🧭',
    placeholderGradient: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
    technologies: ['.NET 10', 'Angular 21', 'EF Core', 'SQL Server', 'MediatR', 'JWT', 'Tailwind CSS'],
    githubUrl: 'https://github.com/taha-elshafei/wajjehni',
    featured: true,
    role: 'project.wajjehni_role',
    duration: 'project.wajjehni_duration',
    features: [
      'project.wajjehni_feature_1',
      'project.wajjehni_feature_2',
      'project.wajjehni_feature_3',
      'project.wajjehni_feature_4',
    ],
  },
  {
    slug: 'training-center',
    title: 'project.training_center_title',
    description: 'project.training_center_desc',
    longDescription: 'project.training_center_long_desc',
    placeholderIcon: '🏫',
    placeholderGradient: 'linear-gradient(135deg, #a855f7, #06b6d4)',
    technologies: ['ASP.NET Core Web API', 'ASP.NET Core MVC', 'SQL Server', 'EF Core', 'HttpClient'],
    githubUrl: 'https://github.com/taha-elshafei/TrainingCenter',
    featured: true,
    role: 'project.training_center_role',
    duration: 'project.training_center_duration',
    features: [
      'project.training_center_feature_1',
      'project.training_center_feature_2',
      'project.training_center_feature_3',
      'project.training_center_feature_4',
    ],
  },
  {
    slug: 'educational-platform',
    title: 'project.edu_platform_title',
    description: 'project.edu_platform_desc',
    longDescription: 'project.edu_platform_long_desc',
    placeholderIcon: '📚',
    placeholderGradient: 'linear-gradient(135deg, #06b6d4, #14b8a6)',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/taha-elshafei/Educational-Platform-Teacher',
    featured: true,
    role: 'project.edu_platform_role',
    duration: 'project.edu_platform_duration',
    features: [
      'project.edu_platform_feature_1',
      'project.edu_platform_feature_2',
      'project.edu_platform_feature_3',
      'project.edu_platform_feature_4',
    ],
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    title: 'ASP Full Stack Developer',
    issuer: 'CLS Learning Solutions',
    credentialId: '099088',
    date: 'Feb 2025 – Jul 2025',
    topics: [
      'Microsoft SQL Essentials',
      'C# Programming',
      'Programming in HTML5, JavaScript & CSS3',
      'Developing ASP.NET Core MVC Web Applications',
      'ASP Core Web APIs',
    ],
  },
  {
    title: 'Developing ASP.Net Web Applications',
    issuer: 'Microsoft / CLS Learning Solutions',
    courseId: 'Course 20486',
    date: 'Jul 2025',
  },
  {
    title: 'Programming in HTML5, JavaScript & CSS3',
    issuer: 'Microsoft / CLS Learning Solutions',
    courseId: 'Course 20480',
    date: 'Jul 2025',
  },
  {
    title: 'Artificial Intelligence (72 hrs)',
    issuer: 'ITI - Information Technology Institute',
    date: 'Jan 2023',
    topics: [
      'Introduction to Artificial Intelligence',
      'Probability & Statistics for Machine Learning',
      'Linear Algebra for Data Science',
      'Introduction to Python',
      'Data Preparation and Exploration',
      'Neural Network & Deep Learning',
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/taha-elshafei',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
    ariaLabel: 'GitHub Profile',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/engtaha7',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
    ariaLabel: 'LinkedIn Profile',
  },
  {
    platform: 'WhatsApp',
    url: 'https://wa.me/201062623089',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>`,
    ariaLabel: 'WhatsApp',
  },
  {
    platform: 'Email',
    url: 'mailto:tahatito1810@gmail.com',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    ariaLabel: 'Send Email',
  },
];

export const PERSONAL_INFO = {
  name: 'Taha Elshafei',
  title: 'Full Stack Developer',
  subtitle: 'Building scalable web applications with .NET and Angular',
  bio: `Full Stack Developer currently working at Sure Global Technology, building scalable web applications using ASP.NET Core and Angular. Experienced in C#, ASP.NET Core (Web API & MVC), EF Core, SQL Server, and front-end technologies including Angular, TypeScript, Tailwind CSS, and Bootstrap. Skilled in Clean Architecture, CQRS, and MediatR patterns with hands-on experience in JWT authentication and permission-based authorization.`,
  highlights: [
    { label: 'Experience', value: 'Sure Global' },
    { label: 'Projects Completed', value: '4+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Focus', value: '.NET' },
  ],
  cvUrl: '/documents/Taha_Elshafei_CV.pdf',
  email: 'tahatito1810@gmail.com',
  phone: '+201062623089',
  whatsapp: '+201062623089',
  location: 'Cairo, Egypt',
};
