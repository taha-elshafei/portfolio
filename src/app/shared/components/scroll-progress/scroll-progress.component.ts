import { Component, signal, ChangeDetectionStrategy, afterNextRender } from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  template: `
    <div class="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent">
      <div class="h-full rounded-e-full transition-none
                  bg-gradient-to-r from-[var(--color-primary)] to-[#a855f7]"
           [style.width.%]="progress()">
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollProgressComponent {
  progress = signal(0);

  constructor() {
    afterNextRender(() => {
      window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        this.progress.set(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      }, { passive: true });
    });
  }
}
