import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollAnimationDirective } from '../../../../shared/directives/scroll-animation.directive';
import { CERTIFICATES } from '../../../../core/data/portfolio.data';
import { TranslationService } from '../../../../core/services/translation.service';

@Component({
  selector: 'app-certificates',
  imports: [SectionHeaderComponent, ScrollAnimationDirective],
  template: `
    <section id="certificates" class="py-20 md:py-28">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <app-section-header
          [titleHighlight]="ts.t('certs.title_highlight')"
          [titleRest]="ts.t('certs.title_rest')"
          [subtitle]="ts.t('certs.subtitle')"
        />

        <div appScrollAnimation class="grid md:grid-cols-2 gap-6">
          @for (cert of certificates; track cert.title) {
            <div class="group relative rounded-2xl border border-[var(--color-dark-border)] bg-[var(--color-dark-card)] p-6 transition-all duration-300 hover:border-[var(--color-primary)]/50 hover:shadow-lg hover:shadow-[var(--color-primary)]/5">
              <!-- Badge icon -->
              <div class="mb-4 flex items-center gap-3">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="8" r="6"/>
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-[var(--color-dark-text)]">{{ cert.title }}</h3>
                  <p class="text-sm text-[var(--color-dark-text-secondary)]">{{ cert.issuer }}</p>
                </div>
              </div>

              <!-- Details -->
              <div class="space-y-2 text-sm text-[var(--color-dark-text-secondary)]">
                @if (cert.courseId) {
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                    <span>{{ cert.courseId }}</span>
                  </div>
                }
                @if (cert.credentialId) {
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>
                    <span>{{ ts.t('certs.credential') }}: {{ cert.credentialId }}</span>
                  </div>
                }
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                  <span>{{ cert.date }}</span>
                </div>
              </div>

              <!-- Topics -->
              @if (cert.topics?.length) {
                <div class="mt-4 flex flex-wrap gap-2">
                  @for (topic of cert.topics; track topic) {
                    <span class="rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
                      {{ topic }}
                    </span>
                  }
                </div>
              }
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host-context([data-theme="light"]) div.group {
      background-color: var(--color-light-card);
      border-color: var(--color-light-border);
    }
    :host-context([data-theme="light"]) h3 {
      color: var(--color-light-text);
    }
    :host-context([data-theme="light"]) p,
    :host-context([data-theme="light"]) span.text-sm,
    :host-context([data-theme="light"]) div.text-sm {
      color: var(--color-light-text-secondary);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificatesComponent {
  ts = inject(TranslationService);
  certificates = CERTIFICATES;
}
