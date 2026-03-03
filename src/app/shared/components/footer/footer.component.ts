import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ScrollService } from '../../../core/services/scroll.service';
import { PERSONAL_INFO } from '../../../core/data/portfolio.data';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="border-t border-[var(--color-dark-border)] py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <!-- Copyright -->
          <div class="text-sm text-[var(--color-dark-text-secondary)]">
            &copy; {{ currentYear }} {{ personalInfo.name }}. {{ ts.t('footer.rights') }}
          </div>

          <!-- Back to Top -->
          <button (click)="scrollService.scrollToTop()"
                  class="flex items-center gap-2 text-sm text-[var(--color-dark-text-secondary)]
                         hover:text-[var(--color-primary)] transition-colors duration-300
                         cursor-pointer bg-transparent border-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m18 15-6-6-6 6"/>
            </svg>
            {{ ts.t('footer.back_to_top') }}
          </button>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host-context([data-theme="light"]) footer {
      border-color: var(--color-light-border);
    }
    :host-context([data-theme="light"]) .text-\\[var\\(--color-dark-text-secondary\\)\\] {
      color: var(--color-light-text-secondary);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  scrollService = inject(ScrollService);
  ts = inject(TranslationService);
  personalInfo = PERSONAL_INFO;
  currentYear = new Date().getFullYear();
}
