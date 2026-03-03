import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollAnimationDirective } from '../../../../shared/directives/scroll-animation.directive';
import { TranslationService } from '../../../../core/services/translation.service';

@Component({
  selector: 'app-about',
  imports: [SectionHeaderComponent, ScrollAnimationDirective],
  template: `
    <section id="about" class="py-20 md:py-28 bg-[var(--color-dark-bg-secondary)]">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <app-section-header
          [titleHighlight]="ts.t('about.title_highlight')"
          [titleRest]="ts.t('about.title_rest')"
          [subtitle]="ts.t('about.subtitle')"
        />

        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Bio -->
          <div appScrollAnimation [animationClass]="'scroll-hidden-left'" class="space-y-6">
            <p class="text-lg leading-relaxed text-[var(--color-dark-text-secondary)]">
              {{ ts.t('personal.bio') }}
            </p>
            <p class="text-lg leading-relaxed text-[var(--color-dark-text-secondary)]">
              {{ ts.t('about.bio_extra') }}
            </p>
          </div>

          <!-- Stats -->
          <div appScrollAnimation [animationClass]="'scroll-hidden-right'">
            <div class="grid grid-cols-2 gap-4">
              @for (stat of highlights; track stat.key) {
                <div class="p-6 rounded-xl border text-center
                            bg-[var(--color-dark-card)] border-[var(--color-dark-border)]
                            hover:border-[var(--color-primary)] transition-all duration-300 group">
                  <div class="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] mb-2
                              group-hover:scale-110 transition-transform duration-300">
                    {{ stat.value }}
                  </div>
                  <div class="text-sm text-[var(--color-dark-text-secondary)] font-medium">
                    {{ ts.t(stat.key) }}
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host-context([data-theme="light"]) section {
      background-color: var(--color-light-bg-secondary);
    }
    :host-context([data-theme="light"]) .text-\\[var\\(--color-dark-text-secondary\\)\\] {
      color: var(--color-light-text-secondary);
    }
    :host-context([data-theme="light"]) .grid > div {
      background-color: var(--color-light-card);
      border-color: var(--color-light-border);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  ts = inject(TranslationService);
  highlights = [
    { key: 'personal.highlight_education', value: 'B.Eng' },
    { key: 'personal.highlight_projects', value: '3+' },
    { key: 'personal.highlight_technologies', value: '10+' },
    { key: 'personal.highlight_focus', value: '.NET' },
  ];
}
