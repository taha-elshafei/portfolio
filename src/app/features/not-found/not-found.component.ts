import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section class="min-h-screen flex items-center justify-center">
      <div class="text-center px-4">
        <h1 class="text-8xl md:text-9xl font-extrabold text-[var(--color-primary)] mb-4">{{ ts.t('notfound.title') }}</h1>
        <h2 class="text-2xl md:text-3xl font-bold mb-4">{{ ts.t('notfound.heading') }}</h2>
        <p class="text-lg text-[var(--color-dark-text-secondary)] mb-8 max-w-md mx-auto">
          {{ ts.t('notfound.message') }}
        </p>
        <a routerLink="/"
           class="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold rounded-xl
                  bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]
                  transition-all duration-300 no-underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
          </svg>
          {{ ts.t('notfound.back_home') }}
        </a>
      </div>
    </section>
  `,
  styles: [`
    :host-context([data-theme="light"]) .text-\\[var\\(--color-dark-text-secondary\\)\\] {
      color: var(--color-light-text-secondary);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {
  ts = inject(TranslationService);
}
