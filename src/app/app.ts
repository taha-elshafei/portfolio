import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ScrollProgressComponent } from './shared/components/scroll-progress/scroll-progress.component';
import { WelcomeSplashComponent } from './shared/components/welcome-splash/welcome-splash.component';
import { ThemeService } from './core/services/theme.service';
import { SeoService } from './core/services/seo.service';
import { TranslationService } from './core/services/translation.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ScrollProgressComponent, WelcomeSplashComponent],
  template: `
    <app-welcome-splash />
    <app-scroll-progress />
    <app-navbar />
    <main>
      <router-outlet />
    </main>
    <app-footer />
  `,
  styles: [`
    main {
      min-height: 100vh;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private themeService = inject(ThemeService);
  private seoService = inject(SeoService);
  private ts = inject(TranslationService);

  constructor() {
    this.seoService.initDefaultMeta();
  }
}
