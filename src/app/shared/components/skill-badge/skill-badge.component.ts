import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { Skill } from '../../../core/models/skill.model';

@Component({
  selector: 'app-skill-badge',
  template: `
    <div class="flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300
                bg-[var(--color-dark-card)] border-[var(--color-dark-border)]
                hover:border-[var(--color-primary)] hover:shadow-lg hover:shadow-[var(--color-primary-subtle)]
                hover:-translate-y-1 group"
         [class.bg-[var(--color-light-card)]]="false">
      <div class="w-12 h-12 flex items-center justify-center text-[var(--color-primary)] transition-transform duration-300 group-hover:scale-110">
        <span class="text-3xl font-bold">{{ getInitial() }}</span>
      </div>
      <span class="text-sm font-medium text-center">{{ skill().name }}</span>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    :host-context([data-theme="light"]) div {
      background-color: var(--color-light-card);
      border-color: var(--color-light-border);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillBadgeComponent {
  skill = input.required<Skill>();

  getInitial(): string {
    const name = this.skill().name;
    if (name === 'C#') return 'C#';
    if (name === 'HTML5') return '<>';
    if (name === 'CSS3/SCSS') return '{}';
    return name.charAt(0).toUpperCase();
  }
}
