import { Component, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { SocialLinksComponent } from '../../../../shared/components/social-links/social-links.component';
import { ScrollAnimationDirective } from '../../../../shared/directives/scroll-animation.directive';
import { PERSONAL_INFO } from '../../../../core/data/portfolio.data';
import { TranslationService } from '../../../../core/services/translation.service';

type ProjectType = 'landing' | 'webapp' | 'ecommerce' | 'dashboard';
type BudgetTier = 1 | 2 | 3 | 4 | 'custom';
type TimeTier = 1 | 2 | 3 | 4;

interface PackageResult {
  features: string[];
  techs: string[];
  price: string;
  timeline: string;
}

const FEATURES_MAP: Record<ProjectType, string[][]> = {
  landing: [
    ['Responsive Design', 'SEO Optimization', 'Contact Form'],
    ['Animations & Transitions', 'Analytics Integration', 'Speed Optimization'],
    ['Multi-language Support', 'CMS Integration', 'A/B Testing'],
    ['Custom Illustrations', 'Advanced SEO', '3 Months Support'],
  ],
  webapp: [
    ['User Authentication', 'CRUD Operations', 'Responsive UI'],
    ['Role-Based Access', 'REST API', 'File Upload'],
    ['Real-Time Features', 'Payment Integration', 'Email Notifications'],
    ['CI/CD Pipeline', 'Load Testing', '6 Months Support'],
  ],
  ecommerce: [
    ['Product Catalog', 'Shopping Cart', 'User Accounts'],
    ['Payment Gateway', 'Order Management', 'Inventory System'],
    ['Multi-Currency', 'Shipping Integration', 'Reviews & Ratings'],
    ['Analytics Dashboard', 'Marketing Tools', '6 Months Support'],
  ],
  dashboard: [
    ['Data Tables', 'Charts & Graphs', 'User Management'],
    ['Export (PDF/Excel)', 'Filters & Search', 'Role Permissions'],
    ['Real-Time Updates', 'Custom Reports', 'API Integration'],
    ['Audit Logs', 'Multi-Tenant', '6 Months Support'],
  ],
};

const TECHS_MAP: Record<ProjectType, string[]> = {
  landing: ['Angular', 'Tailwind CSS', 'TypeScript', 'SSR'],
  webapp: ['Angular', '.NET', 'SQL Server', 'TypeScript', 'Tailwind CSS'],
  ecommerce: ['Angular', '.NET', 'SQL Server', 'Stripe', 'TypeScript'],
  dashboard: ['Angular', '.NET', 'SQL Server', 'SignalR', 'Chart.js'],
};

const BUDGET_LABELS: Record<ProjectType, string[]> = {
  landing: ['$200 - $500', '$500 - $1,000', '$1,000 - $2,500', '$2,500+'],
  webapp: ['$800 - $2,000', '$2,000 - $5,000', '$5,000 - $10,000', '$10,000+'],
  ecommerce: ['$1,500 - $3,500', '$3,500 - $7,000', '$7,000 - $15,000', '$15,000+'],
  dashboard: ['$1,000 - $2,500', '$2,500 - $5,000', '$5,000 - $10,000', '$10,000+'],
};

const PRICE_MAP: Record<ProjectType, string[]> = {
  landing: ['$200 - $500', '$500 - $1,000', '$1,000 - $2,500', '$2,500 - $5,000+'],
  webapp: ['$800 - $2,000', '$2,000 - $5,000', '$5,000 - $10,000', '$10,000 - $20,000+'],
  ecommerce: ['$1,500 - $3,500', '$3,500 - $7,000', '$7,000 - $15,000', '$15,000 - $30,000+'],
  dashboard: ['$1,000 - $2,500', '$2,500 - $5,000', '$5,000 - $10,000', '$10,000 - $20,000+'],
};

const TIMELINE_MAP: Record<ProjectType, string[]> = {
  landing: ['1-2 Weeks', '2-4 Weeks', '1-2 Months', '2-3 Months'],
  webapp: ['2-4 Weeks', '1-2 Months', '2-3 Months', '3-5 Months'],
  ecommerce: ['3-5 Weeks', '1.5-3 Months', '3-5 Months', '5-8 Months'],
  dashboard: ['2-4 Weeks', '1-2 Months', '2-4 Months', '4-6 Months'],
};

const PROJECT_TYPE_NAMES: Record<ProjectType, string> = {
  landing: 'Landing Page',
  webapp: 'Web Application',
  ecommerce: 'E-Commerce',
  dashboard: 'Dashboard',
};

@Component({
  selector: 'app-contact',
  imports: [SectionHeaderComponent, SocialLinksComponent, ScrollAnimationDirective],
  template: `
    <section id="contact" class="py-20 md:py-28">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <app-section-header
          [titleHighlight]="ts.t('contact.title_highlight')"
          [titleRest]="ts.t('contact.title_rest')"
          [subtitle]="ts.t('contact.subtitle')"
        />

        <!-- Quote Calculator -->
        <div appScrollAnimation class="max-w-3xl mx-auto mb-16">
          <div class="calc-card rounded-2xl border p-6 sm:p-8
                      bg-[var(--color-dark-card)] border-[var(--color-dark-border)]">

            <!-- Calculator Header -->
            <h3 class="text-xl sm:text-2xl font-bold text-center mb-2">
              {{ ts.t('calc.title') }}
            </h3>

            <!-- Steps Indicator -->
            <div class="flex items-center justify-center gap-2 mb-8">
              @for (s of [1,2,3,4]; track s) {
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300"
                       [class]="s <= step() ? 'bg-[var(--color-primary)] text-white' : 'bg-[var(--color-dark-border)] text-[var(--color-dark-text-secondary)]'">
                    {{ s }}
                  </div>
                  @if (s < 4) {
                    <div class="w-8 sm:w-12 h-0.5 transition-all duration-300"
                         [class]="s < step() ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-dark-border)]'">
                    </div>
                  }
                </div>
              }
            </div>

            <!-- Step 1: Project Type -->
            @if (step() === 1) {
              <p class="text-center text-[var(--color-dark-text-secondary)] mb-6 text-sm font-medium">
                {{ ts.t('calc.step1') }}
              </p>
              <div class="grid grid-cols-2 gap-3 sm:gap-4">
                @for (type of projectTypes; track type.key) {
                  <button (click)="selectType(type.key)"
                          class="calc-option group p-4 sm:p-5 rounded-xl border text-center transition-all duration-300 cursor-pointer
                                 bg-transparent border-[var(--color-dark-border)]
                                 hover:border-[var(--color-primary)] hover:shadow-lg"
                          [class.selected]="projectType() === type.key">
                    <div class="text-2xl sm:text-3xl mb-2">{{ type.icon }}</div>
                    <div class="text-sm font-semibold">{{ ts.t(type.labelKey) }}</div>
                  </button>
                }
              </div>
            }

            <!-- Step 2: Budget -->
            @if (step() === 2) {
              <p class="text-center text-[var(--color-dark-text-secondary)] mb-6 text-sm font-medium">
                {{ ts.t('calc.step2') }}
              </p>
              <div class="flex flex-wrap justify-center gap-3">
                @for (b of budgetOptions(); track b.tier) {
                  <button (click)="selectBudget(b.tier)"
                          class="calc-pill px-5 py-3 rounded-full border text-sm font-medium transition-all duration-300 cursor-pointer
                                 bg-transparent border-[var(--color-dark-border)]
                                 hover:border-[var(--color-primary)]"
                          [class.selected]="budget() === b.tier">
                    {{ b.label }}
                  </button>
                }
                <!-- Custom Budget Pill -->
                <button (click)="selectBudget('custom')"
                        class="calc-pill px-5 py-3 rounded-full border text-sm font-medium transition-all duration-300 cursor-pointer
                               bg-transparent border-[var(--color-dark-border)]
                               hover:border-[var(--color-primary)]"
                        [class.selected]="budget() === 'custom'">
                  {{ ts.t('calc.custom_budget') }}
                </button>
              </div>

              <!-- Custom Budget Fields -->
              @if (budget() === 'custom') {
                <div class="mt-6 space-y-4">
                  <input type="text"
                         [placeholder]="ts.t('calc.custom_budget_input')"
                         [value]="customBudget()"
                         (input)="customBudget.set(toInputValue($event))"
                         class="calc-input w-full px-4 py-3 rounded-xl border text-sm
                                bg-transparent border-[var(--color-dark-border)]
                                focus:border-[var(--color-primary)] focus:outline-none transition-colors" />
                  <textarea
                         [placeholder]="ts.t('calc.custom_desc_placeholder')"
                         [value]="customDesc()"
                         (input)="customDesc.set(toInputValue($event))"
                         rows="4"
                         class="calc-input w-full px-4 py-3 rounded-xl border text-sm resize-none
                                bg-transparent border-[var(--color-dark-border)]
                                focus:border-[var(--color-primary)] focus:outline-none transition-colors">
                  </textarea>
                </div>
              }
            }

            <!-- Step 3: Timeline -->
            @if (step() === 3) {
              <p class="text-center text-[var(--color-dark-text-secondary)] mb-6 text-sm font-medium">
                {{ ts.t('calc.step3') }}
              </p>
              <div class="flex flex-wrap justify-center gap-3">
                @for (t of timeOptions; track t.tier) {
                  <button (click)="selectTime(t.tier)"
                          class="calc-pill px-5 py-3 rounded-full border text-sm font-medium transition-all duration-300 cursor-pointer
                                 bg-transparent border-[var(--color-dark-border)]
                                 hover:border-[var(--color-primary)]"
                          [class.selected]="timeline() === t.tier">
                    {{ ts.t(t.labelKey) }}
                  </button>
                }
              </div>
            }

            <!-- Step 4: Results -->
            @if (step() === 4) {
              <div class="space-y-6">
                @if (budget() !== 'custom') {
                  <!-- Features -->
                  <div>
                    <h4 class="text-sm font-bold uppercase tracking-wider text-[var(--color-primary)] mb-3">
                      {{ ts.t('calc.features') }}
                    </h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      @for (f of result().features; track f) {
                        <div class="flex items-center gap-2 text-sm">
                          <svg class="w-4 h-4 text-green-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          {{ f }}
                        </div>
                      }
                    </div>
                  </div>

                  <!-- Techs -->
                  <div>
                    <h4 class="text-sm font-bold uppercase tracking-wider text-[var(--color-primary)] mb-3">
                      {{ ts.t('calc.techs') }}
                    </h4>
                    <div class="flex flex-wrap gap-2">
                      @for (t of result().techs; track t) {
                        <span class="px-3 py-1 rounded-full text-xs font-medium
                                     bg-[var(--color-primary-subtle)] text-[var(--color-primary)]">
                          {{ t }}
                        </span>
                      }
                    </div>
                  </div>

                  <!-- Price & Timeline -->
                  <div class="grid grid-cols-2 gap-4">
                    <div class="p-4 rounded-xl bg-[var(--color-primary-subtle)] text-center">
                      <div class="text-xs text-[var(--color-dark-text-secondary)] mb-1">{{ ts.t('calc.estimate') }}</div>
                      <div class="text-lg font-bold text-[var(--color-primary)]">{{ result().price }}</div>
                    </div>
                    <div class="p-4 rounded-xl bg-[var(--color-primary-subtle)] text-center">
                      <div class="text-xs text-[var(--color-dark-text-secondary)] mb-1">{{ ts.t('calc.timeline_label') }}</div>
                      <div class="text-lg font-bold text-[var(--color-primary)]">{{ result().timeline }}</div>
                    </div>
                  </div>
                } @else {
                  <!-- Custom Quote Summary -->
                  <div class="text-center space-y-3">
                    <div class="text-4xl">💬</div>
                    <p class="text-[var(--color-dark-text-secondary)] text-sm">
                      {{ ts.t('calc.custom_desc') }}
                    </p>
                    <div class="inline-block px-4 py-2 rounded-lg bg-[var(--color-primary-subtle)] text-[var(--color-primary)] font-bold">
                      {{ customBudget() || '—' }}
                    </div>
                  </div>
                }
              </div>
            }

            <!-- Navigation Buttons -->
            <div class="flex justify-between items-center mt-8">
              @if (step() > 1) {
                <button (click)="prevStep()"
                        class="px-5 py-2 rounded-lg text-sm font-medium transition-colors duration-300 cursor-pointer
                               bg-transparent border border-[var(--color-dark-border)] text-inherit
                               hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]">
                  {{ ts.t('calc.back') }}
                </button>
              } @else {
                <div></div>
              }

              @if (step() < 4) {
                <button (click)="nextStep()"
                        class="px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 cursor-pointer
                               border-none text-white"
                        [class]="canAdvance() ? 'bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]' : 'bg-gray-600 opacity-50 cursor-not-allowed'"
                        [disabled]="!canAdvance()">
                  {{ ts.t('calc.next') }}
                </button>
              } @else {
                <div class="flex gap-3">
                  <button (click)="reset()"
                          class="px-5 py-2 rounded-lg text-sm font-medium transition-colors duration-300 cursor-pointer
                                 bg-transparent border border-[var(--color-dark-border)] text-inherit
                                 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]">
                    {{ ts.t('calc.reset') }}
                  </button>
                  <a [href]="whatsappUrl()" target="_blank" rel="noopener noreferrer"
                     class="inline-flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 no-underline
                            bg-[#25D366] hover:bg-[#1ebe57] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    {{ ts.t('calc.send_whatsapp') }}
                  </a>
                </div>
              }
            </div>
          </div>
        </div>

        <!-- Contact Info Cards Grid -->
        <div id="contact-cards" appScrollAnimation class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <!-- Email Card -->
          <a href="mailto:{{ personalInfo.email }}"
             class="contact-card group block p-6 rounded-2xl border text-center transition-all duration-300
                    bg-[var(--color-dark-card)] border-[var(--color-dark-border)]
                    hover:border-[var(--color-primary)] hover:shadow-lg hover:-translate-y-1
                    no-underline">
            <div class="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center
                        bg-[var(--color-primary-subtle)] text-[var(--color-primary)]
                        group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <h3 class="text-base font-bold mb-1 group-hover:text-[var(--color-primary)] transition-colors">
              {{ ts.t('contact.email') }}
            </h3>
            <p class="text-sm text-[var(--color-dark-text-secondary)]">
              {{ personalInfo.email }}
            </p>
          </a>

          <!-- Phone Card -->
          <a href="tel:{{ personalInfo.phone }}"
             class="contact-card group block p-6 rounded-2xl border text-center transition-all duration-300
                    bg-[var(--color-dark-card)] border-[var(--color-dark-border)]
                    hover:border-[var(--color-primary)] hover:shadow-lg hover:-translate-y-1
                    no-underline">
            <div class="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center
                        bg-[var(--color-primary-subtle)] text-[var(--color-primary)]
                        group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3 class="text-base font-bold mb-1 group-hover:text-[var(--color-primary)] transition-colors">
              {{ ts.t('contact.phone') }}
            </h3>
            <p class="text-sm text-[var(--color-dark-text-secondary)]">
              {{ personalInfo.phone }}
            </p>
          </a>

          <!-- Location Card -->
          <div class="contact-card group block p-6 rounded-2xl border text-center transition-all duration-300
                      bg-[var(--color-dark-card)] border-[var(--color-dark-border)]
                      hover:border-[var(--color-primary)] hover:shadow-lg hover:-translate-y-1">
            <div class="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center
                        bg-[var(--color-primary-subtle)] text-[var(--color-primary)]
                        group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3 class="text-base font-bold mb-1 group-hover:text-[var(--color-primary)] transition-colors">
              {{ ts.t('contact.location') }}
            </h3>
            <p class="text-sm text-[var(--color-dark-text-secondary)]">
              {{ ts.t('personal.location') }}
            </p>
          </div>
        </div>

        <!-- Social Links & CTA -->
        <div appScrollAnimation class="max-w-2xl mx-auto text-center space-y-8">
          <!-- Social Media -->
          <div>
            <p class="text-[var(--color-dark-text-secondary)] mb-5 text-sm font-medium uppercase tracking-wider">
              {{ ts.t('contact.follow_me') }}
            </p>
            <div class="flex justify-center">
              <app-social-links size="lg" />
            </div>
          </div>

          <!-- Download CV -->
          <div>
            <a [href]="personalInfo.cvUrl" download="Mohamed-Moharam-CV.pdf" target="_blank" rel="noopener noreferrer"
               class="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold rounded-xl
                      border-2 border-[var(--color-primary)] text-[var(--color-primary)]
                      hover:bg-[var(--color-primary)] hover:text-white
                      transition-all duration-300 no-underline">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              {{ ts.t('contact.download_cv') }}
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host-context([data-theme="light"]) .contact-card,
    :host-context([data-theme="light"]) .calc-card {
      background-color: var(--color-light-card);
      border-color: var(--color-light-border);
    }
    :host-context([data-theme="light"]) .text-\\[var\\(--color-dark-text-secondary\\)\\] {
      color: var(--color-light-text-secondary);
    }
    :host-context([data-theme="light"]) .calc-option,
    :host-context([data-theme="light"]) .calc-pill,
    :host-context([data-theme="light"]) .calc-input {
      border-color: var(--color-light-border);
      color: var(--color-light-text);
    }
    :host-context([data-theme="light"]) .calc-option:hover,
    :host-context([data-theme="light"]) .calc-pill:hover {
      border-color: var(--color-primary);
    }
    :host-context([data-theme="light"]) .calc-input:focus {
      border-color: var(--color-primary);
    }
    .calc-option.selected,
    .calc-pill.selected {
      border-color: var(--color-primary) !important;
      background-color: var(--color-primary-subtle);
      color: var(--color-primary);
    }
    :host-context([data-theme="light"]) .bg-\\[var\\(--color-dark-border\\)\\] {
      background-color: var(--color-light-border);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  ts = inject(TranslationService);
  personalInfo = PERSONAL_INFO;

  step = signal(1);
  projectType = signal<ProjectType | null>(null);
  budget = signal<BudgetTier | null>(null);
  timeline = signal<TimeTier | null>(null);
  customBudget = signal('');
  customDesc = signal('');

  projectTypes: { key: ProjectType; icon: string; labelKey: string }[] = [
    { key: 'landing', icon: '🌐', labelKey: 'calc.type_landing' },
    { key: 'webapp', icon: '⚙️', labelKey: 'calc.type_webapp' },
    { key: 'ecommerce', icon: '🛒', labelKey: 'calc.type_ecommerce' },
    { key: 'dashboard', icon: '📊', labelKey: 'calc.type_dashboard' },
  ];

  budgetOptions = computed(() => {
    const type = this.projectType() ?? 'landing';
    const labels = BUDGET_LABELS[type];
    return labels.map((label, i) => ({ tier: (i + 1) as BudgetTier, label }));
  });

  timeOptions: { tier: TimeTier; labelKey: string }[] = [
    { tier: 1, labelKey: 'calc.time1' },
    { tier: 2, labelKey: 'calc.time2' },
    { tier: 3, labelKey: 'calc.time3' },
    { tier: 4, labelKey: 'calc.time4' },
  ];

  canAdvance = computed(() => {
    const s = this.step();
    if (s === 1) return this.projectType() !== null;
    if (s === 2) {
      const b = this.budget();
      if (b === 'custom') return this.customBudget().trim().length > 0 && this.customDesc().trim().length > 0;
      return b !== null;
    }
    if (s === 3) return this.timeline() !== null;
    return false;
  });

  result = computed<PackageResult>(() => {
    const type = this.projectType() ?? 'landing';
    const b = this.budget();
    const budgetIdx = (typeof b === 'number' ? b : 1) - 1;
    const allFeatures = FEATURES_MAP[type];
    const features: string[] = [];
    for (let i = 0; i <= budgetIdx; i++) {
      features.push(...allFeatures[i]);
    }
    return {
      features,
      techs: TECHS_MAP[type],
      price: PRICE_MAP[type][budgetIdx],
      timeline: TIMELINE_MAP[type][budgetIdx],
    };
  });

  whatsappUrl = computed(() => {
    const phone = this.personalInfo.whatsapp?.replace('+', '') || this.personalInfo.phone.replace('+', '');
    const type = this.projectType();
    const typeName = type ? PROJECT_TYPE_NAMES[type] : '';
    const b = this.budget();
    const timeIdx = (this.timeline() ?? 1) - 1;
    const timeLabel = TIMELINE_MAP[type ?? 'landing'][timeIdx];

    let msg = '';
    if (b === 'custom') {
      msg = `Hi Mohamed! I'm interested in a project:\n\n`
          + `📌 Project Type: ${typeName}\n`
          + `💰 Budget: ${this.customBudget()}\n`
          + `⏰ Timeline: ${timeLabel}\n\n`
          + `📝 Description:\n${this.customDesc()}`;
    } else {
      const budgetIdx = (typeof b === 'number' ? b : 1) - 1;
      const budgetLabel = BUDGET_LABELS[type ?? 'landing'][budgetIdx];
      const r = this.result();
      msg = `Hi Mohamed! I'm interested in a project:\n\n`
          + `📌 Project Type: ${typeName}\n`
          + `💰 Budget: ${budgetLabel}\n`
          + `⏰ Timeline: ${timeLabel}\n`
          + `💵 Estimated Price: ${r.price}\n\n`
          + `✅ Features:\n${r.features.map(f => `• ${f}`).join('\n')}`;
    }

    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  });

  toInputValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  selectType(type: ProjectType) {
    if (this.projectType() !== type) {
      this.budget.set(null);
      this.customBudget.set('');
      this.customDesc.set('');
    }
    this.projectType.set(type);
  }

  selectBudget(tier: BudgetTier) {
    this.budget.set(tier);
  }

  selectTime(tier: TimeTier) {
    this.timeline.set(tier);
  }

  nextStep() {
    if (this.canAdvance()) {
      this.step.update(s => Math.min(s + 1, 4));
    }
  }

  prevStep() {
    this.step.update(s => Math.max(s - 1, 1));
  }

  reset() {
    this.step.set(1);
    this.projectType.set(null);
    this.budget.set(null);
    this.timeline.set(null);
    this.customBudget.set('');
    this.customDesc.set('');
  }
}
