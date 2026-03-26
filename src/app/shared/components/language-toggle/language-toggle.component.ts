import { Component, inject, signal, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-language-toggle',
  template: `
    <div class="relative">
      <button
        (click)="open.set(!open())"
        class="relative p-2 rounded-full transition-colors duration-300
               hover:bg-[var(--color-primary-subtle)] cursor-pointer
               border-none bg-transparent text-inherit"
        [attr.aria-label]="ts.t('lang.aria')"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
          <path d="M2 12h20"/>
        </svg>
      </button>

      @if (open()) {
        <div class="absolute top-full mt-2 end-0 min-w-[120px] py-1 rounded-lg shadow-xl
                    glass z-50 overflow-hidden">
          <button (click)="selectLang('en')"
                  class="lang-option w-full px-4 py-2.5 text-sm text-start transition-colors duration-200
                         cursor-pointer border-none bg-transparent text-inherit
                         hover:bg-[var(--color-primary-subtle)] hover:text-[var(--color-primary)]"
                  [class.active]="ts.lang() === 'en'">
            English
          </button>
          <button (click)="selectLang('ar')"
                  class="lang-option w-full px-4 py-2.5 text-sm text-start transition-colors duration-200
                         cursor-pointer border-none bg-transparent text-inherit
                         hover:bg-[var(--color-primary-subtle)] hover:text-[var(--color-primary)]"
                  [class.active]="ts.lang() === 'ar'">
            العربية
          </button>
        </div>
      }
    </div>
  `,
  styles: [`
    .lang-option.active {
      color: var(--color-primary);
      font-weight: 700;
    }
    :host-context([data-theme="light"]) .glass {
      background: rgba(255, 255, 255, 0.8);
      border-color: rgba(6, 182, 212, 0.15);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageToggleComponent {
  ts = inject(TranslationService);
  open = signal(false);

  selectLang(lang: 'en' | 'ar') {
    if (this.ts.lang() !== lang) {
      this.ts.toggleLang();
    }
    this.open.set(false);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const el = event.target as HTMLElement;
    if (!el.closest('app-language-toggle')) {
      this.open.set(false);
    }
  }
}
