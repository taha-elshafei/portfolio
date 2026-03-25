export type Lang = 'en' | 'ar';

export const TRANSLATIONS: Record<string, Record<Lang, string>> = {
  // Navbar
  'nav.download_cv': { en: 'Download CV', ar: 'تحميل السيرة الذاتية' },
  'nav.toggle_menu': { en: 'Toggle mobile menu', ar: 'القائمة' },

  // Nav Items
  'nav.home': { en: 'Home', ar: 'الرئيسية' },
  'nav.about': { en: 'About', ar: 'نبذة عني' },
  'nav.tech_stack': { en: 'Tech Stack', ar: 'التقنيات' },
  'nav.projects': { en: 'Projects', ar: 'المشاريع' },
  'nav.certificates': { en: 'Certificates', ar: 'الشهادات' },
  'nav.contact': { en: 'Contact', ar: 'تواصل' },

  // Hero
  'hero.welcome': { en: 'Welcome to my portfolio', ar: 'مرحباً بك في معرض أعمالي' },
  'hero.greeting': { en: "Hi, I'm", ar: 'مرحباً، أنا' },
  'hero.view_projects': { en: 'View My Projects', ar: 'عرض مشاريعي' },
  'hero.get_in_touch': { en: 'Get In Touch', ar: 'تواصل معي' },

  // About
  'about.title_highlight': { en: 'About', ar: 'نبذة' },
  'about.title_rest': { en: ' Me', ar: ' عني' },
  'about.subtitle': { en: 'Get to know more about my journey and expertise', ar: 'تعرف أكثر على مسيرتي وخبراتي' },
  'about.bio_extra': {
    en: "I'm always eager to learn new technologies and take on challenging projects that push my skills further. My goal is to create software that makes a real difference and delivers value to users and businesses alike.",
    ar: 'أسعى دائماً لتعلم تقنيات جديدة والعمل على مشاريع تتحدى مهاراتي وتطورها. هدفي هو بناء برمجيات تحدث فرقاً حقيقياً وتقدم قيمة للمستخدمين والشركات على حد سواء.',
  },

  // Tech Stack
  'tech.title_highlight': { en: 'Tech', ar: 'التقنيات' },
  'tech.title_rest': { en: ' Stack', ar: ' والأدوات' },
  'tech.subtitle': { en: 'Technologies and tools I work with on a daily basis', ar: 'التقنيات والأدوات التي أعمل بها يومياً' },
  'tech.all': { en: 'All', ar: 'الكل' },
  'tech.frontend': { en: 'Frontend', ar: 'واجهة أمامية' },
  'tech.backend': { en: 'Backend', ar: 'واجهة خلفية' },
  'tech.database': { en: 'Database', ar: 'قواعد بيانات' },
  'tech.tools': { en: 'Tools', ar: 'أدوات' },

  // Projects
  'projects.title_highlight': { en: 'My', ar: 'مشاريعي' },
  'projects.title_rest': { en: ' Projects', ar: '' },
  'projects.subtitle': { en: "A selection of projects I've built showcasing my full stack expertise", ar: 'مجموعة من المشاريع التي قمت ببنائها تعرض خبرتي في تطوير الويب' },
  'projects.live_demo': { en: 'Live Demo', ar: 'معاينة' },
  'projects.github': { en: 'GitHub', ar: 'GitHub' },
  'projects.view_details': { en: 'View Details', ar: 'عرض التفاصيل' },

  // Certificates
  'certs.title_highlight': { en: 'My', ar: 'شهاداتي' },
  'certs.title_rest': { en: ' Certificates', ar: '' },
  'certs.subtitle': { en: 'Professional certifications and completed courses', ar: 'الشهادات المهنية والدورات المعتمدة' },
  'certs.credential': { en: 'Credential ID', ar: 'رقم الشهادة' },

  // Contact
  'contact.title_highlight': { en: 'Get In', ar: 'تواصل' },
  'contact.title_rest': { en: ' Touch', ar: ' معي' },
  'contact.subtitle': { en: "Have a project in mind or want to collaborate? I'd love to hear from you!", ar: 'عندك مشروع أو تحب نتعاون؟ يسعدني التواصل معك!' },
  'contact.email': { en: 'Email', ar: 'البريد الإلكتروني' },
  'contact.phone': { en: 'Phone', ar: 'الهاتف' },
  'contact.location': { en: 'Location', ar: 'الموقع' },
  'contact.follow_me': { en: 'Follow Me', ar: 'تابعني' },
  'contact.download_cv': { en: 'Download My CV', ar: 'تحميل السيرة الذاتية' },

  // Footer
  'footer.rights': { en: 'All rights reserved.', ar: 'جميع الحقوق محفوظة.' },
  'footer.back_to_top': { en: 'Back to Top', ar: 'العودة للأعلى' },

  // 404
  'notfound.title': { en: '404', ar: '404' },
  'notfound.heading': { en: 'Page Not Found', ar: 'الصفحة غير موجودة' },
  'notfound.message': { en: "The page you're looking for doesn't exist or has been moved.", ar: 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.' },
  'notfound.back_home': { en: 'Back to Home', ar: 'العودة للرئيسية' },

  // Theme toggle
  'theme.switch_light': { en: 'Switch to light mode', ar: 'التبديل للوضع الفاتح' },
  'theme.switch_dark': { en: 'Switch to dark mode', ar: 'التبديل للوضع الداكن' },

  // Welcome splash
  'splash.welcome': { en: 'Welcome to my digital space', ar: 'مرحباً بك في عالمي الرقمي' },
  'splash.loading': { en: '> initializing portfolio...', ar: '> جاري تحميل المعرض...' },
  'splash.enter': { en: 'Explore', ar: 'استكشف' },
  'splash.status': { en: 'available for hire · Cairo, Egypt', ar: 'متاح للتوظيف · القاهرة، مصر' },

  // Language toggle
  'lang.switch': { en: 'عربي', ar: 'EN' },
  'lang.aria': { en: 'Switch to Arabic', ar: 'Switch to English' },

  // Personal Info
  'personal.title': { en: 'Full Stack Developer', ar: 'مطور ويب متكامل' },
  'personal.subtitle': {
    en: 'Building scalable web applications with .NET and Angular',
    ar: 'بناء تطبيقات ويب قابلة للتوسع باستخدام .NET و Angular',
  },
  'personal.bio': {
    en: 'Full Stack Developer with solid experience in C#, ASP.NET Core (Web API & MVC), SQL Server, and front-end technologies including HTML, CSS, JavaScript, jQuery, and Bootstrap. Strong problem-solving skills, a good understanding of software development principles, and hands-on experience building real-world projects with Clean Architecture and CQRS patterns.',
    ar: 'مطور ويب متكامل لديه خبرة قوية في C# و ASP.NET Core (Web API و MVC) و SQL Server وتقنيات الواجهة الأمامية مثل HTML و CSS و JavaScript و jQuery و Bootstrap. مهارات قوية في حل المشكلات وفهم جيد لمبادئ تطوير البرمجيات وخبرة عملية في بناء مشاريع حقيقية باستخدام Clean Architecture و CQRS.',
  },
  'personal.highlight_education': { en: 'Education', ar: 'التعليم' },
  'personal.highlight_projects': { en: 'Projects Completed', ar: 'مشاريع منجزة' },
  'personal.highlight_technologies': { en: 'Technologies', ar: 'تقنيات' },
  'personal.highlight_focus': { en: 'Focus', ar: 'التخصص' },
  'personal.highlight_visitors': { en: 'Visitors', ar: 'زائر' },
  'personal.location': { en: 'Cairo, Egypt', ar: 'القاهرة، مصر' },

  // Project Detail Page
  'project_detail.back_to_projects': { en: 'Back to Projects', ar: 'العودة للمشاريع' },
  'project_detail.video_demo': { en: 'Video Demo', ar: 'عرض فيديو' },
  'project_detail.key_features': { en: 'Key Features', ar: 'المميزات الرئيسية' },
  'project_detail.technologies': { en: 'Technologies Used', ar: 'التقنيات المستخدمة' },
  'project_detail.gallery': { en: 'Screenshots', ar: 'لقطات الشاشة' },
  'project_detail.role': { en: 'Role', ar: 'الدور' },
  'project_detail.duration': { en: 'Duration', ar: 'المدة' },
  'project_detail.about_project': { en: 'About This Project', ar: 'عن هذا المشروع' },
  'project_detail.interested': { en: 'Interested in a similar project?', ar: 'مهتم بمشروع مشابه؟' },
  'project_detail.interested_desc': { en: "Let's discuss how I can help bring your idea to life with modern web technologies.", ar: 'خلينا نتكلم إزاي أقدر أساعدك تحول فكرتك لواقع بتقنيات ويب حديثة.' },
  'project_detail.view_all_projects': { en: 'View All Projects', ar: 'عرض كل المشاريع' },

  // Wajjehni Project
  'project.wajjehni_title': { en: 'Wajjehni - وجّهني', ar: 'وجّهني - Wajjehni' },
  'project.wajjehni_desc': {
    en: 'Egyptian tech mentorship platform connecting aspiring developers with experienced mentors, built with Clean Architecture and CQRS.',
    ar: 'منصة إرشاد تقني مصرية تربط المطورين الطموحين بالمرشدين ذوي الخبرة، مبنية بـ Clean Architecture و CQRS.',
  },
  'project.wajjehni_long_desc': {
    en: 'A full-stack mentorship platform built with .NET 10 and Angular 21, following Clean Architecture with CQRS and MediatR. Features include JWT authentication with refresh tokens, permission-based authorization, admin panel for managing users/mentors/bookings/reviews, public website with mentor browsing and booking, community features, and RTL support. The backend uses EF Core with SQL Server and Serilog for logging.',
    ar: 'منصة إرشاد متكاملة مبنية بـ .NET 10 و Angular 21، تتبع Clean Architecture مع CQRS و MediatR. تشمل المميزات مصادقة JWT مع refresh tokens وتفويض مبني على الصلاحيات ولوحة تحكم لإدارة المستخدمين والمرشدين والحجوزات والتقييمات وموقع عام لتصفح المرشدين والحجز ومميزات مجتمعية ودعم RTL. الباكند يستخدم EF Core مع SQL Server و Serilog للتسجيل.',
  },
  'project.wajjehni_role': { en: 'Full Stack Developer', ar: 'مطور ويب متكامل' },
  'project.wajjehni_duration': { en: 'Ongoing', ar: 'جاري التطوير' },
  'project.wajjehni_feature_1': { en: 'Clean Architecture with CQRS + MediatR pattern', ar: 'Clean Architecture مع نمط CQRS + MediatR' },
  'project.wajjehni_feature_2': { en: 'JWT authentication with refresh tokens & permission-based authorization', ar: 'مصادقة JWT مع refresh tokens وتفويض مبني على الصلاحيات' },
  'project.wajjehni_feature_3': { en: 'Admin panel for users, mentors, bookings, reviews & community', ar: 'لوحة تحكم لإدارة المستخدمين والمرشدين والحجوزات والتقييمات والمجتمع' },
  'project.wajjehni_feature_4': { en: 'Public website with mentor browsing, booking & SSR support', ar: 'موقع عام لتصفح المرشدين والحجز مع دعم SSR' },

  // Training Center Project
  'project.training_center_title': { en: 'Training Center Management System', ar: 'نظام إدارة مركز تدريب' },
  'project.training_center_desc': {
    en: 'A full-featured management system with modules for Labs and Trainers using ASP.NET Core Web API and MVC with Clean Architecture.',
    ar: 'نظام إدارة متكامل بوحدات للمعامل والمدربين باستخدام ASP.NET Core Web API و MVC مع Clean Architecture.',
  },
  'project.training_center_long_desc': {
    en: 'A comprehensive training center management system built with ASP.NET Core, featuring separate Web API and MVC layers with Clean Architecture. Includes modules for managing Labs and Trainers with full CRUD operations, search functionality, pagination, image upload, and HttpClient integration between the API and MVC frontend. The system follows a layered architecture with Domain, Application, Infrastructure, Identity, and Localization layers.',
    ar: 'نظام إدارة مركز تدريب شامل مبني بـ ASP.NET Core، يتضمن طبقات Web API و MVC منفصلة مع Clean Architecture. يشمل وحدات لإدارة المعامل والمدربين مع عمليات CRUD كاملة ووظائف البحث والتصفح وتحميل الصور وتكامل HttpClient بين الـ API وواجهة MVC. النظام يتبع هندسة طبقية مع طبقات Domain و Application و Infrastructure و Identity و Localization.',
  },
  'project.training_center_role': { en: 'Full Stack Developer', ar: 'مطور ويب متكامل' },
  'project.training_center_duration': { en: '2 Months', ar: 'شهرين' },
  'project.training_center_feature_1': { en: 'CRUD operations with search, pagination & image upload', ar: 'عمليات CRUD مع البحث والتصفح وتحميل الصور' },
  'project.training_center_feature_2': { en: 'Separate Web API and MVC layers with HttpClient integration', ar: 'طبقات Web API و MVC منفصلة مع تكامل HttpClient' },
  'project.training_center_feature_3': { en: 'Clean Architecture with Identity & Localization layers', ar: 'Clean Architecture مع طبقات Identity و Localization' },
  'project.training_center_feature_4': { en: 'Lab and Trainer management modules', ar: 'وحدات إدارة المعامل والمدربين' },

  // Educational Platform Project
  'project.edu_platform_title': { en: 'Educational Platform - Teacher Portal', ar: 'منصة تعليمية - بوابة المعلم' },
  'project.edu_platform_desc': {
    en: 'An educational platform for teachers with course management, student subscriptions, dashboard, and admin panel.',
    ar: 'منصة تعليمية للمعلمين مع إدارة الكورسات واشتراكات الطلاب ولوحة تحكم وبوابة أدمن.',
  },
  'project.edu_platform_long_desc': {
    en: 'A frontend educational platform designed for teachers, featuring user authentication (login/register), a dashboard for managing courses, a course viewer for students, subscription management, a notes system, and an admin panel. Built with HTML5 and CSS3 as a clean, responsive web application.',
    ar: 'منصة تعليمية للواجهة الأمامية مصممة للمعلمين، تتضمن مصادقة المستخدم (تسجيل دخول/تسجيل)، لوحة تحكم لإدارة الكورسات، عارض كورسات للطلاب، إدارة الاشتراكات، نظام ملاحظات، وبوابة أدمن. مبنية بـ HTML5 و CSS3 كتطبيق ويب نظيف ومتجاوب.',
  },
  'project.edu_platform_role': { en: 'Frontend Developer', ar: 'مطور واجهة أمامية' },
  'project.edu_platform_duration': { en: '2 Weeks', ar: 'أسبوعين' },
  'project.edu_platform_feature_1': { en: 'User authentication with login & registration', ar: 'مصادقة المستخدم مع تسجيل الدخول والتسجيل' },
  'project.edu_platform_feature_2': { en: 'Dashboard with course management & viewer', ar: 'لوحة تحكم مع إدارة الكورسات وعارض الكورسات' },
  'project.edu_platform_feature_3': { en: 'Student subscription & notes system', ar: 'نظام اشتراكات الطلاب والملاحظات' },
  'project.edu_platform_feature_4': { en: 'Admin panel for platform management', ar: 'بوابة أدمن لإدارة المنصة' },
};
