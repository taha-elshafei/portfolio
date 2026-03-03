import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { TechStackComponent } from './sections/tech-stack/tech-stack.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactComponent } from './sections/contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutComponent, TechStackComponent, ProjectsComponent, ContactComponent],
  template: `
    <app-hero />
    @defer (on viewport) {
      <app-about />
    } @placeholder {
      <div class="h-96"></div>
    }
    @defer (on viewport) {
      <app-tech-stack />
    } @placeholder {
      <div class="h-96"></div>
    }
    @defer (on viewport) {
      <app-projects />
    } @placeholder {
      <div class="h-96"></div>
    }
    @defer (on viewport) {
      <app-contact />
    } @placeholder {
      <div class="h-96"></div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
