import { Component, inject, signal, ChangeDetectionStrategy, afterNextRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ScrollProgressComponent } from './shared/components/scroll-progress/scroll-progress.component';
import { ThemeService } from './core/services/theme.service';
import { SeoService } from './core/services/seo.service';
import { TranslationService } from './core/services/translation.service';
import { PERSONAL_INFO } from './core/data/portfolio.data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ScrollProgressComponent],
  template: `
    <!-- Mini Splash -->
    @if (showSplash()) {
      <div class="splash" [class.splash-exit]="splashExit()">
        <div class="splash-content">
          <div class="splash-logo">
            <span class="gradient-text">&lt;</span>
            <span class="splash-name">{{ fullName }}</span>
            <span class="gradient-text"> /&gt;</span>
          </div>
          <div class="splash-title">Full Stack .NET Developer</div>
          <div class="splash-dots">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>
      </div>
    }

    <!-- Main App -->
    <div class="page-wrapper" [class.page-visible]="ready()">
      <app-scroll-progress />
      <app-navbar />
      <main>
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
  styles: [`
    main { min-height: 100vh; }

    .page-wrapper {
      opacity: 0;
      transition: opacity 0.6s ease;
    }
    .page-visible { opacity: 1; }

    /* Splash */
    .splash {
      position: fixed; inset: 0; z-index: 9999;
      display: flex; align-items: center; justify-content: center;
      background: var(--color-dark-bg, #050b15);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    :host-context([data-theme="light"]) .splash {
      background: var(--color-light-bg, #f0fdfa);
    }
    .splash-exit {
      opacity: 0;
      transform: scale(1.05);
    }

    .splash-content { text-align: center; }

    .splash-logo {
      font-size: 2rem;
      font-weight: 800;
      letter-spacing: -1px;
      margin-bottom: 20px;
      animation: fadeUp 0.5s ease both;
    }
    .splash-name { color: inherit; }

    .splash-title {
      font-size: 0.85rem;
      font-weight: 400;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #06b6d4;
      opacity: 0.6;
      margin-bottom: 24px;
      animation: fadeUp 0.5s ease 0.3s both;
    }

    .splash-dots {
      display: flex; gap: 8px; justify-content: center;
      animation: fadeUp 0.5s ease 0.5s both;
    }
    .dot {
      width: 6px; height: 6px;
      border-radius: 50%;
      background: #06b6d4;
      animation: pulse 1.2s ease-in-out infinite;
    }
    .dot:nth-child(2) { animation-delay: 0.2s; }
    .dot:nth-child(3) { animation-delay: 0.4s; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.4); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private themeService = inject(ThemeService);
  private seoService = inject(SeoService);
  private ts = inject(TranslationService);

  fullName = PERSONAL_INFO.name;
  showSplash = signal(true);
  splashExit = signal(false);
  ready = signal(false);

  constructor() {
    this.seoService.initDefaultMeta();
    afterNextRender(() => {
      // After bar fills (~1.3s), start exit
      setTimeout(() => {
        this.splashExit.set(true);
        // After exit animation, show page
        setTimeout(() => {
          this.showSplash.set(false);
          this.ready.set(true);
        }, 500);
      }, 1500);
    });
  }
}
