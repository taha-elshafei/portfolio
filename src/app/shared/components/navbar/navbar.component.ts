import { Component, inject, signal, ChangeDetectionStrategy, afterNextRender } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageToggleComponent } from '../language-toggle/language-toggle.component';
import { ScrollService } from '../../../core/services/scroll.service';
import { TranslationService } from '../../../core/services/translation.service';
import { PERSONAL_INFO } from '../../../core/data/portfolio.data';

const NAV_KEYS = [
  { key: 'nav.home', sectionId: 'hero' },
  { key: 'nav.about', sectionId: 'about' },
  { key: 'nav.tech_stack', sectionId: 'tech-stack' },
  { key: 'nav.projects', sectionId: 'projects' },
  { key: 'nav.certificates', sectionId: 'certificates' },
  { key: 'nav.contact', sectionId: 'contact' },
];

@Component({
  selector: 'app-navbar',
  imports: [LanguageToggleComponent],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
         [class.nav-scrolled]="scrolled()"
         [class.bg-transparent]="!scrolled()">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between h-[72px]">
          <!-- Logo -->
          <button (click)="navigateToSection('hero')"
                  class="text-xl font-bold tracking-tight cursor-pointer bg-transparent border-none">
            <span class="gradient-text">&lt;</span>
            <span>{{ personalInfo.name.split(' ')[0] }}</span>
            <span class="gradient-text"> /&gt;</span>
          </button>

          <!-- Desktop Nav -->
          <div class="hidden md:flex items-center gap-1">
            @for (item of navKeys; track item.sectionId) {
              <button (click)="navigateToSection(item.sectionId)"
                      class="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300
                             hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-subtle)]
                             cursor-pointer bg-transparent border-none text-inherit">
                {{ ts.t(item.key) }}
              </button>
            }
            <app-language-toggle />
            <a [href]="personalInfo.cvUrl" download="Taha_Elshafei_CV.pdf" target="_blank" rel="noopener noreferrer"
               class="ms-2 px-4 py-2 text-sm font-medium rounded-lg text-white
                      transition-all duration-300 no-underline hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
               style="background: linear-gradient(135deg, #06b6d4, #14b8a6);">
              {{ ts.t('nav.download_cv') }}
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <div class="flex items-center gap-2 md:hidden">
            <app-language-toggle />
            <button (click)="mobileMenuOpen.set(!mobileMenuOpen())"
                    class="p-2 rounded-lg cursor-pointer bg-transparent border-none text-inherit"
                    [attr.aria-label]="ts.t('nav.toggle_menu')">
              @if (mobileMenuOpen()) {
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                </svg>
              } @else {
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="4" x2="20" y1="12" y2="12"/>
                  <line x1="4" x2="20" y1="6" y2="6"/>
                  <line x1="4" x2="20" y1="18" y2="18"/>
                </svg>
              }
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      @if (mobileMenuOpen()) {
        <div class="md:hidden glass-strong">
          <div class="px-4 py-4 flex flex-col gap-1">
            @for (item of navKeys; track item.sectionId) {
              <button (click)="navigateToSection(item.sectionId); mobileMenuOpen.set(false)"
                      class="w-full text-start px-4 py-3 text-sm font-medium rounded-lg
                             hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-subtle)]
                             transition-colors duration-300 cursor-pointer bg-transparent border-none text-inherit">
                {{ ts.t(item.key) }}
              </button>
            }
            <a [href]="personalInfo.cvUrl" download="Taha_Elshafei_CV.pdf" target="_blank" rel="noopener noreferrer"
               class="mt-2 px-4 py-3 text-sm font-medium rounded-lg text-center text-white
                      transition-all duration-300 no-underline"
               style="background: linear-gradient(135deg, #06b6d4, #14b8a6);">
              {{ ts.t('nav.download_cv') }}
            </a>
          </div>
        </div>
      }
    </nav>
  `,
  styles: [`
    .nav-scrolled {
      background: rgba(5, 11, 21, 0.85);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2), 0 0 20px rgba(6, 182, 212, 0.05);
      border-bottom: 1px solid rgba(6, 182, 212, 0.1);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  private router = inject(Router);
  scrollService = inject(ScrollService);
  ts = inject(TranslationService);
  navKeys = NAV_KEYS;
  personalInfo = PERSONAL_INFO;

  scrolled = signal(false);
  mobileMenuOpen = signal(false);

  constructor() {
    afterNextRender(() => {
      window.addEventListener('scroll', () => {
        this.scrolled.set(window.scrollY > 50);
      }, { passive: true });
    });
  }

  navigateToSection(sectionId: string): void {
    const url = this.router.url;
    if (url === '/' || url.startsWith('/#')) {
      this.scrollService.scrollToSection(sectionId);
    } else {
      this.router.navigate(['/'], { fragment: sectionId });
    }
  }
}
