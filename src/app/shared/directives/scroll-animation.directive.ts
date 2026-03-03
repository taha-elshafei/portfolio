import { Directive, ElementRef, inject, afterNextRender, input } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
})
export class ScrollAnimationDirective {
  private el = inject(ElementRef);
  animationClass = input<string>('scroll-hidden');

  constructor() {
    afterNextRender(() => {
      const element = this.el.nativeElement;
      element.classList.add(this.animationClass());

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const cls = this.animationClass();
            if (cls.includes('left') || cls.includes('right')) {
              element.classList.add('scroll-visible-x');
            } else {
              element.classList.add('scroll-visible');
            }
            observer.unobserve(element);
          }
        },
        { threshold: 0.1 },
      );
      observer.observe(element);
    });
  }
}
