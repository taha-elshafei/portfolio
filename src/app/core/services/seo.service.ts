import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private meta = inject(Meta);
  private title = inject(Title);
  private document = inject(DOCUMENT);

  initDefaultMeta(): void {
    this.title.setTitle('Taha Elshafei | Full Stack .NET Developer');

    this.meta.addTags([
      { name: 'description', content: 'Portfolio of Taha Elshafei - Full Stack Developer specializing in ASP.NET Core, Web API, Angular, TypeScript, and SQL Server.' },
      { name: 'keywords', content: 'Taha Elshafei, Full Stack Developer, .NET, Angular, ASP.NET Core, TypeScript, SQL Server, Portfolio, Web Developer' },
      { name: 'author', content: 'Taha Elshafei' },
      { property: 'og:title', content: 'Taha Elshafei | Full Stack .NET Developer' },
      { property: 'og:description', content: 'Professional portfolio showcasing full stack .NET and Angular projects.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Taha Elshafei | Full Stack .NET Developer' },
      { name: 'twitter:description', content: 'Professional portfolio showcasing full stack .NET and Angular projects.' },
      { name: 'robots', content: 'index, follow' },
    ]);

    this.setJsonLd();
  }

  updateMeta(title: string, description: string): void {
    const fullTitle = `${title} | Taha Elshafei`;
    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });
  }

  private setJsonLd(): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Taha Elshafei',
      jobTitle: 'Full Stack .NET Developer',
      sameAs: [
        'https://github.com/taha-elshafei',
        'https://www.linkedin.com/in/engtaha7',
      ],
      knowsAbout: ['ASP.NET Core', 'Angular', 'TypeScript', 'SQL Server', 'C#', 'Web API'],
    };

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }
}
