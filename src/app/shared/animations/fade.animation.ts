import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);

export const fadeInLeftAnimation = trigger('fadeInLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-30px)' }),
    animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
]);

export const fadeInRightAnimation = trigger('fadeInRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(30px)' }),
    animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
]);
