import { Component, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslationService } from '../../core/services/translation.service';
import { SeoService } from '../../core/services/seo.service';
import { ProjectService } from '../../core/services/project.service';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, ScrollAnimationDirective],
  template: `
    @if (project(); as p) {
      <!-- ============ HERO ============ -->
      <section class="relative min-h-[70vh] flex items-end overflow-hidden">
        <!-- Background glow -->
        <div class="absolute inset-0">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full
                      bg-[var(--color-primary)]/20 blur-[120px]"></div>
          <div class="absolute bottom-0 inset-x-0 h-1/2
                      bg-gradient-to-t from-[var(--color-dark-bg)] to-transparent"></div>
        </div>

        <div class="relative max-w-6xl mx-auto px-4 sm:px-6 w-full pb-16 pt-28">
          <!-- Back -->
          <a routerLink="/" fragment="projects"
             class="inline-flex items-center gap-2 text-sm text-[var(--color-dark-text-secondary)]
                    hover:text-[var(--color-primary)] transition-colors duration-300 mb-10 no-underline group/back">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="rtl:rotate-180 group-hover/back:-translate-x-1 transition-transform">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            {{ ts.t('project_detail.back_to_projects') }}
          </a>

          <div class="grid lg:grid-cols-5 gap-8 items-end">
            <!-- Left: Title & Info -->
            <div class="lg:col-span-3">
              <!-- Badges -->
              <div class="flex flex-wrap gap-3 mb-5">
                @if (p.role) {
                  <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium
                               bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                    </svg>
                    {{ ts.t(p.role) }}
                  </span>
                }
                @if (p.duration) {
                  <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium
                               bg-[var(--color-dark-card)] text-[var(--color-dark-text-secondary)] border border-[var(--color-dark-border)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {{ ts.t(p.duration) }}
                  </span>
                }
              </div>

              <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-[var(--color-dark-text)]"
                  [style.viewTransitionName]="'project-title-' + p.slug">
                {{ ts.t(p.title) }}
              </h1>

              <p class="text-lg text-[var(--color-dark-text-secondary)] leading-relaxed max-w-2xl">
                {{ ts.t(p.description) }}
              </p>

              <!-- CTA buttons -->
              <div class="flex flex-wrap gap-3 mt-8">
                @if (p.liveUrl) {
                  <a [href]="p.liveUrl" target="_blank" rel="noopener noreferrer"
                     class="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl
                            bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]
                            transition-all duration-300 no-underline shadow-lg shadow-[var(--color-primary)]/25
                            hover:shadow-xl hover:shadow-[var(--color-primary)]/30 hover:-translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    {{ ts.t('projects.live_demo') }}
                  </a>
                }
                @if (p.githubUrl) {
                  <a [href]="p.githubUrl" target="_blank" rel="noopener noreferrer"
                     class="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl
                            border border-[var(--color-dark-border)] hover:border-[var(--color-primary)]
                            hover:text-[var(--color-primary)] transition-all duration-300 no-underline
                            text-[var(--color-dark-text)] hover:-translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                      <path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                    {{ ts.t('projects.github') }}
                  </a>
                }
              </div>
            </div>

            <!-- Right: Tech stack card -->
            <div class="lg:col-span-2">
              <div class="rounded-2xl border border-[var(--color-dark-border)] bg-[var(--color-dark-card)]/80
                          backdrop-blur-sm p-6">
                <h3 class="text-sm font-semibold uppercase tracking-wider text-[var(--color-dark-text-secondary)] mb-4">
                  {{ ts.t('project_detail.technologies') }}
                </h3>
                <div class="flex flex-wrap gap-2">
                  @for (tech of p.technologies; track tech) {
                    <span class="px-3 py-1.5 text-sm font-medium rounded-lg
                                 bg-[var(--color-primary-subtle)] text-[var(--color-primary)]
                                 border border-[var(--color-primary)]/20">
                      {{ tech }}
                    </span>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ============ VIDEO DEMO ============ -->
      @if (p.video) {
        <section class="py-16 md:py-24">
          <div class="max-w-5xl mx-auto px-4 sm:px-6">
            <div appScrollAnimation class="text-center mb-10">
              <h2 class="text-2xl md:text-3xl font-bold text-[var(--color-dark-text)] mb-2">
                {{ ts.t('project_detail.video_demo') }}
              </h2>
              <div class="w-16 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
            </div>
            @if (p.video.type === 'youtube') {
              <div appScrollAnimation
                   class="relative w-full aspect-video rounded-2xl overflow-hidden
                          border border-[var(--color-dark-border)] shadow-2xl shadow-black/20
                          ring-1 ring-white/5">
                <iframe [src]="youtubeUrl()"
                        class="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen loading="lazy">
                </iframe>
              </div>
            } @else {
              <video appScrollAnimation controls preload="metadata" [poster]="p.video.poster"
                     class="w-full rounded-2xl border border-[var(--color-dark-border)] shadow-2xl">
                <source [src]="p.video.url" type="video/mp4" />
              </video>
            }
          </div>
        </section>
      }

      <!-- ============ ABOUT & FEATURES ============ -->
      <section class="py-16 md:py-24 bg-[var(--color-dark-bg-secondary)]">
        <div class="max-w-5xl mx-auto px-4 sm:px-6">
          <div class="grid lg:grid-cols-2 gap-12">
            <!-- Description -->
            @if (p.longDescription) {
              <div appScrollAnimation>
                <h2 class="text-2xl md:text-3xl font-bold text-[var(--color-dark-text)] mb-6">
                  {{ ts.t('project_detail.about_project') }}
                </h2>
                <p class="text-base leading-relaxed text-[var(--color-dark-text-secondary)]">
                  {{ ts.t(p.longDescription) }}
                </p>
              </div>
            }

            <!-- Features -->
            @if (p.features && p.features.length > 0) {
              <div appScrollAnimation>
                <h2 class="text-2xl md:text-3xl font-bold text-[var(--color-dark-text)] mb-6">
                  {{ ts.t('project_detail.key_features') }}
                </h2>
                <ul class="space-y-4">
                  @for (feature of p.features; track feature) {
                    <li class="flex items-start gap-3 p-4 rounded-xl
                               bg-[var(--color-dark-card)] border border-[var(--color-dark-border)]
                               transition-all duration-300 hover:border-[var(--color-primary)]/30">
                      <div class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full
                                  bg-[var(--color-primary)]/10 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                             class="text-[var(--color-primary)]">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                      <span class="text-[var(--color-dark-text-secondary)]">{{ ts.t(feature) }}</span>
                    </li>
                  }
                </ul>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- ============ GALLERY ============ -->
      @if (p.gallery && p.gallery.length > 0) {
        <section class="py-16 md:py-24">
          <div class="max-w-6xl mx-auto px-4 sm:px-6">
            <div appScrollAnimation class="text-center mb-10">
              <h2 class="text-2xl md:text-3xl font-bold text-[var(--color-dark-text)] mb-2">
                {{ ts.t('project_detail.gallery') }}
              </h2>
              <div class="w-16 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
            </div>
            <div appScrollAnimation class="grid grid-cols-1 md:grid-cols-2 gap-4">
              @for (img of p.gallery; track img.src; let i = $index) {
                <button (click)="openLightbox(i)"
                        class="rounded-2xl overflow-hidden border border-[var(--color-dark-border)]
                               hover:border-[var(--color-primary)]/50 transition-all duration-300
                               cursor-pointer bg-transparent p-0 group
                               hover:shadow-xl hover:shadow-[var(--color-primary)]/5">
                  <img [src]="img.src" [alt]="ts.t(img.alt)"
                       class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                </button>
              }
            </div>
          </div>
        </section>
      }

      <!-- Lightbox Overlay -->
      @if (lightboxOpen()) {
        <div class="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
             (click)="closeLightbox()">
          <button (click)="closeLightbox()"
                  class="absolute top-6 right-6 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20
                         text-white transition-colors cursor-pointer border-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>
          <button (click)="prevImage($event)"
                  class="absolute left-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20
                         text-white transition-colors cursor-pointer border-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <img [src]="currentGalleryImage()?.src" [alt]="ts.t(currentGalleryImage()?.alt ?? '')"
               class="max-w-full max-h-[85vh] object-contain rounded-lg"
               (click)="$event.stopPropagation()" />
          <button (click)="nextImage($event)"
                  class="absolute right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20
                         text-white transition-colors cursor-pointer border-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      }

      <!-- ============ BOTTOM CTA ============ -->
      <section class="py-16 md:py-24 bg-[var(--color-dark-bg-secondary)]">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div appScrollAnimation
               class="rounded-3xl border border-[var(--color-dark-border)] bg-[var(--color-dark-card)]
                      p-10 md:p-14 relative overflow-hidden">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px]
                        bg-[var(--color-primary)]/10 blur-[80px] rounded-full"></div>
            <div class="relative">
              <h2 class="text-2xl md:text-3xl font-bold text-[var(--color-dark-text)] mb-4">
                {{ ts.t('project_detail.interested') }}
              </h2>
              <p class="text-[var(--color-dark-text-secondary)] mb-8 max-w-lg mx-auto">
                {{ ts.t('project_detail.interested_desc') }}
              </p>
              <div class="flex flex-wrap gap-4 justify-center">
                <a routerLink="/" fragment="contact"
                   class="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-xl
                          bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]
                          transition-all duration-300 no-underline shadow-lg shadow-[var(--color-primary)]/25
                          hover:shadow-xl hover:-translate-y-0.5">
                  {{ ts.t('hero.get_in_touch') }}
                </a>
                <a routerLink="/" fragment="projects"
                   class="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-xl
                          border border-[var(--color-dark-border)] hover:border-[var(--color-primary)]
                          text-[var(--color-dark-text)] hover:text-[var(--color-primary)]
                          transition-all duration-300 no-underline hover:-translate-y-0.5">
                  {{ ts.t('project_detail.view_all_projects') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    } @else {
      <!-- Project not found -->
      <section class="min-h-screen flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-6xl font-bold text-[var(--color-primary)] mb-4">404</h1>
          <p class="text-xl text-[var(--color-dark-text-secondary)] mb-8">{{ ts.t('notfound.heading') }}</p>
          <a routerLink="/"
             class="px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white
                    hover:bg-[var(--color-primary-hover)] transition-colors duration-300 no-underline">
            {{ ts.t('notfound.back_home') }}
          </a>
        </div>
      </section>
    }
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailComponent {
  private route = inject(ActivatedRoute);
  private sanitizer = inject(DomSanitizer);
  private projectService = inject(ProjectService);
  private seoService = inject(SeoService);
  ts = inject(TranslationService);

  project = computed(() => {
    const slug = this.route.snapshot.paramMap.get('slug');
    return slug ? this.projectService.getBySlug(slug) : undefined;
  });

  youtubeUrl = computed(() => {
    const p = this.project();
    if (p?.video?.type === 'youtube') {
      return this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${p.video.url}`
      );
    }
    return null;
  });

  lightboxOpen = signal(false);
  lightboxIndex = signal(0);

  currentGalleryImage = computed(() => {
    const p = this.project();
    if (p?.gallery) {
      return p.gallery[this.lightboxIndex()];
    }
    return undefined;
  });

  constructor() {
    const p = this.project();
    if (p) {
      this.seoService.updateMeta(this.ts.t(p.title), this.ts.t(p.description));
    }
  }

  openLightbox(index: number): void {
    this.lightboxIndex.set(index);
    this.lightboxOpen.set(true);
  }

  closeLightbox(): void {
    this.lightboxOpen.set(false);
  }

  prevImage(e: Event): void {
    e.stopPropagation();
    const gallery = this.project()?.gallery;
    if (gallery) {
      this.lightboxIndex.update(i => (i - 1 + gallery.length) % gallery.length);
    }
  }

  nextImage(e: Event): void {
    e.stopPropagation();
    const gallery = this.project()?.gallery;
    if (gallery) {
      this.lightboxIndex.update(i => (i + 1) % gallery.length);
    }
  }
}
