import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private meta = inject(Meta);
  private title = inject(Title);
  private document = inject(DOCUMENT);

  initDefaultMeta(): void {
    this.title.setTitle('Mohamed Mohr | Full Stack .NET + Angular Developer');

    this.meta.addTags([
      { name: 'description', content: 'Portfolio of Mohamed Mohr - Full Stack Developer specializing in ASP.NET Core, Web API, Angular, TypeScript, and SQL Server.' },
      { name: 'keywords', content: 'Mohamed Mohr, Full Stack Developer, .NET, Angular, ASP.NET Core, TypeScript, SQL Server, Portfolio, Web Developer' },
      { name: 'author', content: 'Mohamed Mohr' },
      { property: 'og:title', content: 'Mohamed Mohr | Full Stack .NET + Angular Developer' },
      { property: 'og:description', content: 'Professional portfolio showcasing full stack .NET and Angular projects.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Mohamed Mohr | Full Stack .NET + Angular Developer' },
      { name: 'twitter:description', content: 'Professional portfolio showcasing full stack .NET and Angular projects.' },
      { name: 'robots', content: 'index, follow' },
    ]);

    this.setJsonLd();
  }

  private setJsonLd(): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Mohamed Mohr',
      jobTitle: 'Full Stack .NET + Angular Developer',
      sameAs: [
        'https://github.com/mohamedmohr',
        'https://linkedin.com/in/mohamedmohr',
      ],
      knowsAbout: ['ASP.NET Core', 'Angular', 'TypeScript', 'SQL Server', 'C#', 'Web API'],
    };

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }
}
