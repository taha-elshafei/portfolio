import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollAnimationDirective } from '../../../../shared/directives/scroll-animation.directive';
import { TranslationService } from '../../../../core/services/translation.service';
import { VisitorCounterService } from '../../../../core/services/visitor-counter.service';

@Component({
  selector: 'app-about',
  imports: [SectionHeaderComponent, ScrollAnimationDirective],
  template: `
    <section id="about" class="py-20 md:py-28 relative overflow-x-hidden"
             style="background: var(--color-dark-bg-secondary);">
      <!-- Subtle background mesh -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.07]"
             style="background: radial-gradient(circle, #06b6d4, transparent 70%);"></div>
        <div class="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-[100px] opacity-[0.05]"
             style="background: radial-gradient(circle, #14b8a6, transparent 70%);"></div>
      </div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
        <app-section-header
          [titleHighlight]="ts.t('about.title_highlight')"
          [titleRest]="ts.t('about.title_rest')"
          [subtitle]="ts.t('about.subtitle')"
        />

        <div class="grid sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <!-- Bio -->
          <div appScrollAnimation [animationClass]="'scroll-hidden-left'" class="space-y-4 sm:space-y-6">
            <p class="text-sm sm:text-base lg:text-lg leading-relaxed text-[var(--color-dark-text-secondary)]"
               style="overflow-wrap: anywhere; word-break: break-word;">
              {{ ts.t('personal.bio') }}
            </p>
            <p class="text-sm sm:text-base lg:text-lg leading-relaxed text-[var(--color-dark-text-secondary)]"
               style="overflow-wrap: anywhere; word-break: break-word;">
              {{ ts.t('about.bio_extra') }}
            </p>
          </div>

          <!-- Stats -->
          <div appScrollAnimation [animationClass]="'scroll-hidden-right'" class="w-full">
            <div class="grid grid-cols-2 gap-3 sm:gap-4">
              @for (stat of highlights; track stat.key) {
                <div class="glass p-3 sm:p-4 md:p-6 rounded-xl text-center
                            hover:border-[var(--color-primary)]/30 transition-all duration-300 group
                            hover:shadow-lg hover:shadow-[var(--color-primary)]/10 hover:-translate-y-1">
                  <div class="text-xl sm:text-2xl md:text-4xl font-extrabold gradient-text mb-1 sm:mb-2
                              group-hover:scale-110 transition-transform duration-300">
                    {{ stat.value }}
                  </div>
                  <div class="text-[10px] sm:text-xs md:text-sm text-[var(--color-dark-text-secondary)] font-medium">
                    {{ ts.t(stat.key) }}
                  </div>
                </div>
              }
              <!-- Visitor Count Card -->
              <div class="col-span-2 glass p-3 sm:p-4 md:p-6 rounded-xl text-center
                          hover:border-[var(--color-primary)]/30 transition-all duration-300 group
                          hover:shadow-lg hover:shadow-[var(--color-primary)]/10 hover:-translate-y-1">
                <div class="text-xl sm:text-2xl md:text-4xl font-extrabold gradient-text mb-1 sm:mb-2
                            group-hover:scale-110 transition-transform duration-300">
                  {{ visitorCounter.visitorCount() }}
                </div>
                <div class="text-[10px] sm:text-xs md:text-sm text-[var(--color-dark-text-secondary)] font-medium">
                  {{ ts.t('personal.highlight_visitors') }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  ts = inject(TranslationService);
  visitorCounter = inject(VisitorCounterService);
  highlights = [
    { key: 'personal.highlight_education', value: 'B.Eng' },
    { key: 'personal.highlight_projects', value: '2+' },
    { key: 'personal.highlight_technologies', value: '15+' },
    { key: 'personal.highlight_focus', value: '.NET' },
  ];
}
