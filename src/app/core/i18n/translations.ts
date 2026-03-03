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
  'personal.title': { en: 'Full Stack .NET + Angular Developer', ar: 'مطور ويب متكامل .NET + Angular' },
  'personal.subtitle': {
    en: 'Building responsive, high-performance web applications with clean architecture',
    ar: 'بناء تطبيقات ويب متجاوبة وعالية الأداء بهندسة برمجية نظيفة',
  },
  'personal.bio': {
    en: "I'm a Junior Full Stack Developer specialized in .NET and Angular. I have experience building responsive, high-performance web applications using .NET Framework, MVC, SQL Server, and Angular. I'm passionate about clean code, problem-solving, and continuous learning to grow my technical expertise.",
    ar: 'أنا مطور ويب متكامل مبتدئ متخصص في .NET و Angular. لدي خبرة في بناء تطبيقات ويب متجاوبة وعالية الأداء باستخدام .NET Framework و MVC و SQL Server و Angular. شغوف بالكود النظيف وحل المشكلات والتعلم المستمر لتطوير خبراتي التقنية.',
  },
  'personal.highlight_education': { en: 'Education', ar: 'التعليم' },
  'personal.highlight_projects': { en: 'Projects Completed', ar: 'مشاريع منجزة' },
  'personal.highlight_technologies': { en: 'Technologies', ar: 'تقنيات' },
  'personal.highlight_focus': { en: 'Focus', ar: 'التخصص' },
  'personal.location': { en: 'Cairo, Egypt', ar: 'القاهرة، مصر' },

  // Quote Calculator
  'calc.title': { en: 'What Can I Build For You?', ar: 'إيه اللي أقدر أبنيه ليك؟' },
  'calc.step1': { en: 'Project Type', ar: 'نوع المشروع' },
  'calc.step2': { en: 'Budget Range', ar: 'نطاق الميزانية' },
  'calc.step3': { en: 'Timeline', ar: 'المدة الزمنية' },
  'calc.step4': { en: 'Your Package', ar: 'الباقة المناسبة' },
  'calc.next': { en: 'Next', ar: 'التالي' },
  'calc.back': { en: 'Back', ar: 'رجوع' },
  'calc.reset': { en: 'Start Over', ar: 'ابدأ من جديد' },
  'calc.lets_talk': { en: "Let's Talk", ar: 'تواصل معي' },
  'calc.features': { en: 'Included Features', ar: 'المميزات المتضمنة' },
  'calc.techs': { en: 'Technologies', ar: 'التقنيات المستخدمة' },
  'calc.estimate': { en: 'Estimated Price', ar: 'السعر التقديري' },
  'calc.timeline_label': { en: 'Estimated Timeline', ar: 'المدة التقديرية' },
  'calc.type_landing': { en: 'Landing Page', ar: 'صفحة هبوط' },
  'calc.type_webapp': { en: 'Web Application', ar: 'تطبيق ويب' },
  'calc.type_ecommerce': { en: 'E-Commerce', ar: 'متجر إلكتروني' },
  'calc.type_dashboard': { en: 'Dashboard', ar: 'لوحة تحكم' },
  'calc.custom_budget': { en: 'Custom Budget', ar: 'ميزانية مخصصة' },
  'calc.custom_budget_input': { en: 'Your budget (e.g. $2,000)', ar: 'ميزانيتك (مثال: $2,000)' },
  'calc.custom_desc': { en: 'Describe what you need', ar: 'اوصف اللي محتاجه' },
  'calc.custom_desc_placeholder': { en: 'Tell me about your project requirements, features you need, any references...', ar: 'احكيلي عن متطلبات مشروعك، المميزات اللي محتاجها، أي مراجع...' },
  'calc.send_whatsapp': { en: 'Send via WhatsApp', ar: 'أرسل عبر واتساب' },
  'calc.time1': { en: '1-2 Weeks', ar: '١-٢ أسابيع' },
  'calc.time2': { en: '2-4 Weeks', ar: '٢-٤ أسابيع' },
  'calc.time3': { en: '1-2 Months', ar: '١-٢ شهور' },
  'calc.time4': { en: '2+ Months', ar: '+٢ شهور' },

  // Project
  'project.edu_center_title': { en: 'Educational Center Management System', ar: 'نظام إدارة مركز تعليمي' },
  'project.edu_center_desc': {
    en: 'A web-based system to manage students, teachers, classes, and payments for an educational center. Implemented authentication, user roles, and permissions with layered architecture for scalability and maintainability.',
    ar: 'نظام ويب لإدارة الطلاب والمعلمين والفصول والمدفوعات لمركز تعليمي. تم تنفيذ المصادقة وأدوار المستخدمين والصلاحيات بهندسة طبقية لضمان قابلية التوسع والصيانة.',
  },
};
