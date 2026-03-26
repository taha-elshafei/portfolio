import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollAnimationDirective } from '../../../../shared/directives/scroll-animation.directive';
import { CERTIFICATES } from '../../../../core/data/portfolio.data';
import { TranslationService } from '../../../../core/services/translation.service';

@Component({
  selector: 'app-certificates',
  imports: [SectionHeaderComponent, ScrollAnimationDirective],
  template: `
    <section id="certificates" class="py-20 md:py-28 relative">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <app-section-header
          [titleHighlight]="ts.t('certs.title_highlight')"
          [titleRest]="ts.t('certs.title_rest')"
          [subtitle]="ts.t('certs.subtitle')"
        />

        <div appScrollAnimation class="grid md:grid-cols-2 gap-6">
          @for (cert of certificates; track cert.title; let i = $index) {
            <div class="group relative rounded-2xl overflow-hidden transition-all duration-300
                        glass hover:border-[var(--color-primary)]/30
                        hover:shadow-lg hover:shadow-[var(--color-primary)]/10 hover:-translate-y-1">
              <!-- Certificate Image -->
              @if (cert.image) {
                <button (click)="openLightbox(i)"
                        class="w-full h-48 overflow-hidden cursor-pointer border-none p-0 bg-gray-100">
                  <img [src]="cert.image" [alt]="cert.title"
                       class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </button>
              }

              <div class="p-6">
                <!-- Badge icon & title -->
                <div class="mb-4 flex items-center gap-3">
                  <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white"
                       style="background: linear-gradient(135deg, #06b6d4, #14b8a6);">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="8" r="6"/>
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold">{{ cert.title }}</h3>
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
                      <span class="rounded-full px-3 py-1 text-xs font-medium text-[var(--color-primary)]
                                   bg-[var(--color-primary-subtle)] border border-[var(--color-primary)]/10">
                        {{ topic }}
                      </span>
                    }
                  </div>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    @if (lightboxOpen()) {
      <div class="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
           (click)="lightboxOpen.set(false)">
        <button (click)="lightboxOpen.set(false)"
                class="absolute top-6 right-6 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20
                       text-white transition-colors cursor-pointer border-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
          </svg>
        </button>
        <img [src]="certificates[lightboxIndex()].image"
             [alt]="certificates[lightboxIndex()].title"
             class="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
             (click)="$event.stopPropagation()" />
      </div>
    }
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificatesComponent {
  ts = inject(TranslationService);
  certificates = CERTIFICATES;
  lightboxOpen = signal(false);
  lightboxIndex = signal(0);

  openLightbox(index: number): void {
    this.lightboxIndex.set(index);
    this.lightboxOpen.set(true);
  }
}
