import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-language-toggle',
  template: `
    <button
      (click)="ts.toggleLang()"
      class="px-3 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300
             hover:bg-[var(--color-primary-subtle)] hover:text-[var(--color-primary)]
             cursor-pointer border border-[var(--color-dark-border)] bg-transparent text-inherit"
      [attr.aria-label]="ts.t('lang.aria')"
    >
      {{ ts.lang() === 'en' ? 'AR' : 'EN' }}
    </button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageToggleComponent {
  ts = inject(TranslationService);
}
