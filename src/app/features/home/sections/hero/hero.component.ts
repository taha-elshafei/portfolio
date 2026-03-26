import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ScrollService } from '../../../../core/services/scroll.service';
import { PERSONAL_INFO } from '../../../../core/data/portfolio.data';
import { ScrollAnimationDirective } from '../../../../shared/directives/scroll-animation.directive';
import { TranslationService } from '../../../../core/services/translation.service';

@Component({
  selector: 'app-hero',
  imports: [ScrollAnimationDirective],
  template: `
    <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Mesh Gradient -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Cyan orb -->
        <div class="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[100px] opacity-20"
             style="background: radial-gradient(circle, #06b6d4, transparent 70%); animation: meshFloat1 8s ease-in-out infinite;"></div>
        <!-- Teal orb -->
        <div class="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
             style="background: radial-gradient(circle, #14b8a6, transparent 70%); animation: meshFloat2 10s ease-in-out infinite;"></div>
        <!-- Purple orb -->
        <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-10"
             style="background: radial-gradient(circle, #a855f7, transparent 70%); animation: meshFloat1 12s ease-in-out infinite;"></div>
        <!-- Subtle grid overlay -->
        <div class="absolute inset-0 opacity-[0.03]"
             style="background-image: linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px); background-size: 80px 80px;"></div>
      </div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div class="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          <!-- Text Content -->
          <div class="flex-1 text-center lg:text-start">
            <!-- Greeting -->
            <div appScrollAnimation class="mb-6">
              <span class="inline-block px-5 py-2.5 text-sm font-medium rounded-full
                           glass border-[var(--color-dark-border)]
                           text-[var(--color-primary)]">
                {{ ts.t('hero.welcome') }}
              </span>
            </div>

            <!-- Name -->
            <h1 appScrollAnimation class="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              {{ ts.t('hero.greeting') }}
              <span class="gradient-text relative">
                {{ personalInfo.name }}
                <span class="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                      style="background: linear-gradient(90deg, #06b6d4, #14b8a6, transparent);"></span>
              </span>
            </h1>

            <!-- Title -->
            <div appScrollAnimation class="mb-8">
              <p class="text-xl sm:text-2xl md:text-3xl font-light text-[var(--color-dark-text-secondary)]">
                {{ ts.t('personal.title') }}
              </p>
              <p class="text-base sm:text-lg mt-3 text-[var(--color-dark-text-secondary)]/70 max-w-2xl">
                {{ ts.t('personal.subtitle') }}
              </p>
            </div>

            <!-- CTA Buttons -->
            <div appScrollAnimation class="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8">
              <button (click)="scrollService.scrollToSection('projects')"
                      class="px-8 py-3.5 text-base font-semibold rounded-xl text-white
                             transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/30
                             hover:-translate-y-1 cursor-pointer border-none"
                      style="background: linear-gradient(135deg, #06b6d4, #14b8a6);">
                {{ ts.t('hero.view_projects') }}
              </button>
              <button (click)="scrollService.scrollToSection('contact')"
                      class="px-8 py-3.5 text-base font-semibold rounded-xl
                             glass text-[var(--color-primary)]
                             hover:border-[var(--color-primary)]/40
                             transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                {{ ts.t('hero.get_in_touch') }}
              </button>
            </div>

          </div>

          <!-- Profile Image -->
          <div appScrollAnimation class="flex-shrink-0">
            <div class="relative">
              <!-- Animated glow ring -->
              <div class="absolute -inset-4 rounded-full opacity-30 blur-xl"
                   style="background: conic-gradient(from 0deg, #06b6d4, #14b8a6, #a855f7, #06b6d4); animation: meshFloat1 6s ease-in-out infinite;"></div>
              <div class="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden
                          shadow-2xl shadow-[var(--color-primary)]/20"
                   style="border: 3px solid rgba(6, 182, 212, 0.3);">
                <img src="/images/profile.jpg"
                     alt="{{ personalInfo.name }}"
                     class="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="text-[var(--color-primary)]/50">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host-context([data-theme="light"]) .text-\\[var\\(--color-dark-text-secondary\\)\\] {
      color: var(--color-light-text-secondary);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  scrollService = inject(ScrollService);
  ts = inject(TranslationService);
  personalInfo = PERSONAL_INFO;
}
