import { Component, input, inject, ChangeDetectionStrategy } from '@angular/core';
import { Project } from '../../../core/models/project.model';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-project-card',
  template: `
    <div class="rounded-xl overflow-hidden border transition-all duration-300
                bg-[var(--color-dark-card)] border-[var(--color-dark-border)]
                hover:border-[var(--color-primary)] hover:shadow-xl hover:-translate-y-2 group"
    >
      <!-- Project Image -->
      <div class="relative h-48 overflow-hidden bg-[var(--color-dark-bg-secondary)]">
        <div class="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-blue-700 flex items-center justify-center">
          <span class="text-5xl font-bold text-white/20">{{ project().title.charAt(0) }}</span>
        </div>
        <!-- Overlay on hover -->
        <div class="absolute inset-0 bg-[var(--color-primary)]/0 group-hover:bg-[var(--color-primary)]/10 transition-all duration-300"></div>
      </div>

      <!-- Content -->
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">
          {{ project().title }}
        </h3>
        <p class="text-sm mb-4 leading-relaxed line-clamp-3 text-[var(--color-dark-text-secondary)]">
          {{ project().description }}
        </p>

        <!-- Technologies -->
        <div class="flex flex-wrap gap-2 mb-5">
          @for (tech of project().technologies; track tech) {
            <span class="text-xs px-3 py-1 rounded-full font-medium
                         bg-[var(--color-primary-subtle)] text-[var(--color-primary)]">
              {{ tech }}
            </span>
          }
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-3">
          @if (project().liveUrl) {
            <a [href]="project().liveUrl" target="_blank" rel="noopener noreferrer"
               class="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg
                      bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]
                      transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              {{ ts.t('projects.live_demo') }}
            </a>
          }
          @if (project().githubUrl) {
            <a [href]="project().githubUrl" target="_blank" rel="noopener noreferrer"
               class="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg
                      border border-[var(--color-dark-border)] hover:border-[var(--color-primary)]
                      hover:text-[var(--color-primary)] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
              {{ ts.t('projects.github') }}
            </a>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    :host-context([data-theme="light"]) div:first-child {
      background-color: var(--color-light-card);
      border-color: var(--color-light-border);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
    }
    :host-context([data-theme="light"]) p {
      color: var(--color-light-text-secondary);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  ts = inject(TranslationService);
  project = input.required<Project>();
}
