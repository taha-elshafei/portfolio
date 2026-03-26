import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { SocialLinksComponent } from '../../../../shared/components/social-links/social-links.component';
import { ScrollAnimationDirective } from '../../../../shared/directives/scroll-animation.directive';
import { PERSONAL_INFO } from '../../../../core/data/portfolio.data';
import { TranslationService } from '../../../../core/services/translation.service';

@Component({
  selector: 'app-contact',
  imports: [SectionHeaderComponent, SocialLinksComponent, ScrollAnimationDirective],
  template: `
    <section id="contact" class="py-20 md:py-28 relative">
      <!-- Background mesh -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.05]"
             style="background: radial-gradient(circle, #06b6d4, transparent 70%);"></div>
      </div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
        <app-section-header
          [titleHighlight]="ts.t('contact.title_highlight')"
          [titleRest]="ts.t('contact.title_rest')"
          [subtitle]="ts.t('contact.subtitle')"
        />

        <!-- Contact Info Cards Grid -->
        <div id="contact-cards" appScrollAnimation class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <!-- Email Card -->
          <a href="mailto:{{ personalInfo.email }}"
             class="contact-card group block p-6 rounded-2xl text-center transition-all duration-300
                    glass hover:border-[var(--color-primary)]/30
                    hover:shadow-lg hover:shadow-[var(--color-primary)]/10 hover:-translate-y-1
                    no-underline">
            <div class="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center text-white
                        group-hover:scale-110 transition-transform duration-300"
                 style="background: linear-gradient(135deg, #06b6d4, #14b8a6);">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <h3 class="text-base font-bold mb-1 group-hover:text-[var(--color-primary)] transition-colors">
              {{ ts.t('contact.email') }}
            </h3>
            <p class="text-sm text-[var(--color-dark-text-secondary)]">
              {{ personalInfo.email }}
            </p>
          </a>

          <!-- Phone Card -->
          <a href="tel:{{ personalInfo.phone }}"
             class="contact-card group block p-6 rounded-2xl text-center transition-all duration-300
                    glass hover:border-[var(--color-primary)]/30
                    hover:shadow-lg hover:shadow-[var(--color-primary)]/10 hover:-translate-y-1
                    no-underline">
            <div class="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center text-white
                        group-hover:scale-110 transition-transform duration-300"
                 style="background: linear-gradient(135deg, #06b6d4, #14b8a6);">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3 class="text-base font-bold mb-1 group-hover:text-[var(--color-primary)] transition-colors">
              {{ ts.t('contact.phone') }}
            </h3>
            <p class="text-sm text-[var(--color-dark-text-secondary)]">
              {{ personalInfo.phone }}
            </p>
          </a>

          <!-- Location Card -->
          <div class="contact-card group block p-6 rounded-2xl text-center transition-all duration-300
                      glass hover:border-[var(--color-primary)]/30
                      hover:shadow-lg hover:shadow-[var(--color-primary)]/10 hover:-translate-y-1">
            <div class="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center text-white
                        group-hover:scale-110 transition-transform duration-300"
                 style="background: linear-gradient(135deg, #06b6d4, #14b8a6);">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3 class="text-base font-bold mb-1 group-hover:text-[var(--color-primary)] transition-colors">
              {{ ts.t('contact.location') }}
            </h3>
            <p class="text-sm text-[var(--color-dark-text-secondary)]">
              {{ ts.t('personal.location') }}
            </p>
          </div>
        </div>

        <!-- Social Links & CTA -->
        <div appScrollAnimation class="max-w-2xl mx-auto text-center space-y-8">
          <!-- Social Media -->
          <div>
            <p class="text-[var(--color-dark-text-secondary)] mb-5 text-sm font-medium uppercase tracking-wider">
              {{ ts.t('contact.follow_me') }}
            </p>
            <div class="flex justify-center">
              <app-social-links size="lg" />
            </div>
          </div>

          <!-- Download CV -->
          <div>
            <a [href]="personalInfo.cvUrl" download="Taha_Elshafei_CV.pdf" target="_blank" rel="noopener noreferrer"
               class="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold rounded-xl
                      glass text-[var(--color-primary)]
                      hover:border-[var(--color-primary)]/40
                      hover:shadow-lg hover:shadow-[var(--color-primary)]/15
                      transition-all duration-300 no-underline">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              {{ ts.t('contact.download_cv') }}
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  ts = inject(TranslationService);
  personalInfo = PERSONAL_INFO;
}
