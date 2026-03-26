import { Component, input, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../../core/models/project.model';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  template: `
    <a [routerLink]="['/projects', project().slug]"
       class="block h-full no-underline text-inherit">
      <div class="h-full flex flex-col rounded-xl overflow-hidden transition-all duration-300
                  glass hover:border-[var(--color-primary)]/30
                  hover:shadow-xl hover:shadow-[var(--color-primary)]/10 hover:-translate-y-2 group"
      >
        <!-- Project Image / Placeholder -->
        <div class="relative h-52 overflow-hidden"
             [style.viewTransitionName]="'project-image-' + project().slug">
          @if (project().image && !imgError()) {
            <img [src]="project().image" [alt]="ts.t(project().title)"
                 class="absolute inset-0 w-full h-full object-contain"
                 [style.background-color]="'#fff'"
                 (error)="imgError.set(true)" />
          } @else {
            <!-- Gradient Placeholder -->
            <div class="absolute inset-0 flex flex-col items-center justify-center gap-3"
                 [style.background]="project().placeholderGradient || 'linear-gradient(135deg, #06b6d4, #14b8a6)'">
              <span class="text-5xl">{{ project().placeholderIcon || '💻' }}</span>
              <span class="text-white/80 text-sm font-semibold tracking-wide uppercase">
                {{ ts.t(project().title) }}
              </span>
            </div>
          }
          <!-- Overlay on hover -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
               style="background: linear-gradient(135deg, rgba(6,182,212,0.15), rgba(20,184,166,0.1), transparent);"></div>
        </div>

        <!-- Content -->
        <div class="p-6 flex flex-col flex-1">
          <h3 class="text-xl font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300"
              [style.viewTransitionName]="'project-title-' + project().slug">
            {{ ts.t(project().title) }}
          </h3>
          <p class="text-sm mb-4 leading-relaxed flex-1 text-[var(--color-dark-text-secondary)]">
            {{ ts.t(project().description) }}
          </p>

          <!-- Technologies -->
          <div class="flex flex-wrap gap-2 mb-5">
            @for (tech of project().technologies; track tech) {
              <span class="text-xs px-3 py-1 rounded-full font-medium
                           bg-[var(--color-primary-subtle)] text-[var(--color-primary)]
                           border border-[var(--color-primary)]/10">
                {{ tech }}
              </span>
            }
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-3">
            @if (project().liveUrl) {
              <a [href]="project().liveUrl" target="_blank" rel="noopener noreferrer"
                 (click)="$event.stopPropagation()"
                 class="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg text-white
                        transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
                 style="background: linear-gradient(135deg, #06b6d4, #14b8a6);">
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
                 (click)="$event.stopPropagation()"
                 class="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg
                        glass hover:border-[var(--color-primary)]/30
                        hover:text-[var(--color-primary)] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
                {{ ts.t('projects.github') }}
              </a>
            }
            <span class="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg
                         text-[var(--color-primary)] ms-auto">
              {{ ts.t('projects.view_details') }}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="rtl:rotate-180">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </a>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  ts = inject(TranslationService);
  project = input.required<Project>();
  imgError = signal(false);
}
