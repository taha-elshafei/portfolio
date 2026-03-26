import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { Skill } from '../../../core/models/skill.model';

@Component({
  selector: 'app-skill-badge',
  template: `
    <div class="flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-300
                glass hover:border-[var(--color-primary)]/30
                hover:shadow-lg hover:shadow-[var(--color-primary)]/10
                hover:-translate-y-1 group">
      <div class="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <span class="text-3xl font-bold gradient-text">{{ getInitial() }}</span>
      </div>
      <span class="text-sm font-medium text-center">{{ skill().name }}</span>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    :host-context([data-theme="light"]) .glass {
      background: rgba(255, 255, 255, 0.6);
      border-color: rgba(6, 182, 212, 0.15);
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
