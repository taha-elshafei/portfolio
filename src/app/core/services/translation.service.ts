import { Injectable, signal, effect, inject, PLATFORM_ID, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { Lang, TRANSLATIONS } from '../i18n/translations';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private document = inject(DOCUMENT);
  private platformId = inject(PLATFORM_ID);

  lang = signal<Lang>(this.getInitialLang());
  isArabic = computed(() => this.lang() === 'ar');

  constructor() {
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        const current = this.lang();
        this.document.documentElement.setAttribute('dir', current === 'ar' ? 'rtl' : 'ltr');
        this.document.documentElement.setAttribute('lang', current);
        localStorage.setItem('portfolio-lang', current);
      }
    });
  }

  toggleLang(): void {
    this.lang.update(l => (l === 'en' ? 'ar' : 'en'));
  }

  t(key: string): string {
    const entry = TRANSLATIONS[key];
    if (!entry) return key;
    return entry[this.lang()] || entry['en'] || key;
  }

  private getInitialLang(): Lang {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem('portfolio-lang') as Lang | null;
      if (stored) return stored;
    }
    return 'en';
  }
}
