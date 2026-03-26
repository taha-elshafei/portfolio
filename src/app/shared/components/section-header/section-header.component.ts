import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-section-header',
  template: `
    <div class="text-center mb-16">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        <span class="gradient-text">{{ titleHighlight() }}</span>
        {{ titleRest() }}
      </h2>
      @if (subtitle()) {
        <p class="text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2"
           [class]="themeTextSecondary">
          {{ subtitle() }}
        </p>
      }
      <div class="w-20 h-1 mx-auto mt-6 rounded-full"
           style="background: linear-gradient(90deg, #06b6d4, #14b8a6, #a855f7);"></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeaderComponent {
  titleHighlight = input<string>('');
  titleRest = input<string>('');
  subtitle = input<string>('');

  readonly themeTextSecondary = 'text-[var(--color-dark-text-secondary)]';
}
