import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <button
      (click)="themeService.toggleTheme()"
      class="relative p-2 rounded-full transition-colors duration-300 hover:bg-[var(--color-primary-subtle)] cursor-pointer"
      [attr.aria-label]="themeService.isDark() ? ts.t('theme.switch_light') : ts.t('theme.switch_dark')"
    >
      <!-- Sun Icon -->
      @if (themeService.isDark()) {
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="text-yellow-400 transition-transform duration-300 hover:rotate-45">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2"/><path d="M12 20v2"/>
          <path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/>
          <path d="M2 12h2"/><path d="M20 12h2"/>
          <path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
        </svg>
      } @else {
        <!-- Moon Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="text-slate-700 transition-transform duration-300 hover:-rotate-12">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
        </svg>
      }
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggleComponent {
  themeService = inject(ThemeService);
  ts = inject(TranslationService);
}
