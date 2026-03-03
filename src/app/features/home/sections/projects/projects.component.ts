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
    <section id="projects" class="py-20 md:py-28 bg-[var(--color-dark-bg-secondary)]">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <app-section-header
          [titleHighlight]="ts.t('projects.title_highlight')"
          [titleRest]="ts.t('projects.title_rest')"
          [subtitle]="ts.t('projects.subtitle')"
        />

        <div appScrollAnimation class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (project of projects; track project.title) {
            <app-project-card [project]="project" />
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host-context([data-theme="light"]) section {
      background-color: var(--color-light-bg-secondary);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  ts = inject(TranslationService);
  projects = PROJECTS;
}
