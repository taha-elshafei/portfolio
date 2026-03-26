import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ProjectCardComponent } from '../../../../shared/components/project-card/project-card.component';
import { ScrollAnimationDirective } from '../../../../shared/directives/scroll-animation.directive';
import { PROJECTS } from '../../../../core/data/portfolio.data';
import { TranslationService } from '../../../../core/services/translation.service';

@Component({
  selector: 'app-projects',
  imports: [SectionHeaderComponent, ProjectCardComponent, ScrollAnimationDirective],
  template: `
    <section id="projects" class="py-20 md:py-28 relative"
             style="background: var(--color-dark-bg-secondary);">
      <!-- Background mesh -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-[0.05]"
             style="background: radial-gradient(circle, #a855f7, transparent 70%);"></div>
      </div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
        <app-section-header
          [titleHighlight]="ts.t('projects.title_highlight')"
          [titleRest]="ts.t('projects.title_rest')"
          [subtitle]="ts.t('projects.subtitle')"
        />

        <div appScrollAnimation class="grid md:grid-cols-2 gap-6">
          @for (project of projects; track project.slug) {
            <app-project-card [project]="project" />
          }
        </div>
      </div>
    </section>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  ts = inject(TranslationService);
  projects = PROJECTS;
}
