import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private document = inject(DOCUMENT);
  private platformId = inject(PLATFORM_ID);

  scrollToSection(sectionId: string): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const element = this.document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    // Section might be inside @defer (on viewport) and not loaded yet.
    // Scroll down incrementally to trigger deferred loading, then retry.
    const startY = window.scrollY;
    const maxScroll = this.document.documentElement.scrollHeight - window.innerHeight;
    const step = window.innerHeight * 0.7;
    let currentY = startY;

    const scrollAndCheck = () => {
      currentY = Math.min(currentY + step, maxScroll);
      window.scrollTo({ top: currentY, behavior: 'instant' });

      setTimeout(() => {
        const target = this.document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (currentY < maxScroll) {
          scrollAndCheck();
        }
      }, 100);
    };

    scrollAndCheck();
  }

  scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
