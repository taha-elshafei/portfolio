import { Component, input, inject, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SOCIAL_LINKS } from '../../../core/data/portfolio.data';
import { SocialLink } from '../../../core/models/social-link.model';

@Component({
  selector: 'app-social-links',
  template: `
    <div class="flex items-center justify-center flex-wrap"
         [class.gap-4]="size() === 'lg'" [class.gap-3]="size() !== 'lg'">
      @for (link of trustedLinks; track link.platform) {
        <a [href]="link.url" target="_blank" rel="noopener noreferrer"
           [attr.aria-label]="link.ariaLabel"
           class="flex items-center justify-center rounded-full transition-all duration-300
                  text-[var(--color-dark-text-secondary)] hover:text-[var(--color-primary)]
                  hover:bg-[var(--color-primary-subtle)] hover:scale-110
                  hover:shadow-lg hover:shadow-[var(--color-primary)]/15"
           [class.w-11]="size() === 'lg'" [class.h-11]="size() === 'lg'"
           [class.w-9]="size() !== 'lg'" [class.h-9]="size() !== 'lg'"
           [innerHTML]="link.safeIcon">
        </a>
      }
    </div>
  `,
  styles: [`
    :host-context([data-theme="light"]) a {
      color: var(--color-light-text-secondary);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialLinksComponent {
  private sanitizer = inject(DomSanitizer);
  size = input<'sm' | 'lg'>('sm');

  trustedLinks: (SocialLink & { safeIcon: SafeHtml })[] = SOCIAL_LINKS.map(link => ({
    ...link,
    safeIcon: this.sanitizer.bypassSecurityTrustHtml(link.icon),
  }));
}
