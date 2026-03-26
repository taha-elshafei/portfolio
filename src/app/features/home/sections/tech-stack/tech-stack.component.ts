import { Component, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { SkillBadgeComponent } from '../../../../shared/components/skill-badge/skill-badge.component';
import { ScrollAnimationDirective } from '../../../../shared/directives/scroll-animation.directive';
import { SKILLS } from '../../../../core/data/portfolio.data';
import { TranslationService } from '../../../../core/services/translation.service';

type Category = 'all' | 'frontend' | 'backend' | 'database' | 'tools';

@Component({
  selector: 'app-tech-stack',
  imports: [SectionHeaderComponent, SkillBadgeComponent, ScrollAnimationDirective],
  template: `
    <section id="tech-stack" class="py-20 md:py-28 relative">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <app-section-header
          [titleHighlight]="ts.t('tech.title_highlight')"
          [titleRest]="ts.t('tech.title_rest')"
          [subtitle]="ts.t('tech.subtitle')"
        />

        <!-- Filter Tabs -->
        <div appScrollAnimation class="flex flex-wrap justify-center gap-2 mb-12">
          @for (cat of categories; track cat.key) {
            <button (click)="activeCategory.set(cat.key)"
                    class="px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer border-none"
                    [class]="activeCategory() === cat.key
                      ? 'text-white shadow-lg shadow-[var(--color-primary)]/25'
                      : 'glass text-[var(--color-dark-text-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/30'"
                    [style.background]="activeCategory() === cat.key ? 'linear-gradient(135deg, #06b6d4, #14b8a6)' : ''">
              {{ ts.t(cat.translationKey) }}
            </button>
          }
        </div>

        <!-- Skills Grid -->
        <div appScrollAnimation class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          @for (skill of filteredSkills(); track skill.name) {
            <app-skill-badge [skill]="skill" />
          }
        </div>
      </div>
    </section>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechStackComponent {
  ts = inject(TranslationService);

  categories: { key: Category; translationKey: string }[] = [
    { key: 'all', translationKey: 'tech.all' },
    { key: 'frontend', translationKey: 'tech.frontend' },
    { key: 'backend', translationKey: 'tech.backend' },
    { key: 'database', translationKey: 'tech.database' },
    { key: 'tools', translationKey: 'tech.tools' },
  ];

  activeCategory = signal<Category>('all');

  filteredSkills = computed(() => {
    const cat = this.activeCategory();
    if (cat === 'all') return SKILLS;
    return SKILLS.filter(s => s.category === cat);
  });
}
