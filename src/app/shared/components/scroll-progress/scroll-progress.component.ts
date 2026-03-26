import { Component, signal, ChangeDetectionStrategy, afterNextRender } from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  template: `
    <div class="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent">
      <div class="h-full rounded-e-full transition-none"
           style="background: linear-gradient(90deg, #06b6d4, #14b8a6, #a855f7);"
           [style.width.%]="progress()"
           [style.box-shadow]="progress() > 0 ? '0 0 10px rgba(6, 182, 212, 0.5), 0 0 20px rgba(6, 182, 212, 0.2)' : 'none'">
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
