import { Component, inject, signal, computed, ChangeDetectionStrategy, afterNextRender } from '@angular/core';
import { TranslationService } from '../../../core/services/translation.service';
import { PERSONAL_INFO } from '../../../core/data/portfolio.data';

interface Particle {
  id: number;
  x: number;
  size: number;
  speed: number;
  delay: number;
  opacity: number;
  color: string;
}

@Component({
  selector: 'app-welcome-splash',
  template: `
    @if (visible()) {
      <div class="splash" [class.splash-exit]="phase() === 3" (mousemove)="onMouseMove($event)">

        <!-- Custom Cursor -->
        <div class="custom-cursor"
             [style.left.px]="cursorX()"
             [style.top.px]="cursorY()">
        </div>

        <!-- Grid Background -->
        <div class="grid-bg"
             [style.transform]="'perspective(500px) rotateX(' + mouseY() * 2 + 'deg) rotateY(' + mouseX() * 2 + 'deg)'">
        </div>

        <!-- Particles -->
        @for (p of particles; track p.id) {
          <div class="particle"
               [style.left.%]="p.x"
               [style.width.px]="p.size" [style.height.px]="p.size"
               [style.background]="p.color"
               [style.animation-duration.s]="p.speed"
               [style.animation-delay.s]="p.delay"
               [style.opacity]="p.opacity"
               [style.filter]="p.size > 2 ? 'blur(1px)' : 'none'">
          </div>
        }

        <!-- Scanline -->
        <div class="scanline"></div>

        <!-- Glow Orbs -->
        <div class="glow-orb glow-1"
             [style.transform]="'translate(' + mouseX() * 20 + 'px,' + mouseY() * 20 + 'px)'"></div>
        <div class="glow-orb glow-2"
             [style.transform]="'translate(' + mouseX() * -15 + 'px,' + mouseY() * -15 + 'px)'"></div>

        <!-- Content -->
        <div class="content">

          <!-- Phase 0: Loading -->
          @if (phase() === 0) {
            <div class="loading">
              <div class="terminal-text">{{ ts.t('splash.loading') }}</div>
              <div class="progress-track">
                <div class="progress-fill" [style.width.%]="progressClamped()"></div>
              </div>
              <div class="progress-pct">{{ progressClamped() }}%</div>
            </div>
          }

          <!-- Phase 1+: Reveal -->
          @if (phase() >= 1) {
            <div class="reveal">

              <!-- Welcome line -->
              <div class="welcome-line slide-up">
                <span class="line-deco"></span>
                <span class="welcome-text">{{ ts.t('splash.welcome') }}</span>
                <span class="line-deco"></span>
              </div>

              <!-- Name glitch -->
              <h1 class="name" [class.glow]="phase() >= 1">
                {{ glitchText() }}
                @if (phase() < 2) {
                  <span class="cursor" [style.opacity]="cursorOn() ? 1 : 0">_</span>
                }
              </h1>

              <!-- Title -->
              @if (phase() >= 2) {
                <div class="title-row slide-up">
                  <span class="bracket">&lt; </span>
                  <span class="title-grad">{{ ts.t('personal.title') }}</span>
                  <span class="bracket"> /&gt;</span>
                </div>

                <!-- Enter button -->
                <div class="enter-wrap slide-up-d1">
                  <button class="enter-btn" (click)="handleEnter()">
                    {{ ts.t('splash.enter') }}
                    <span class="arrow">&#8594;</span>
                  </button>
                </div>
              }
            </div>
          }
        </div>

        <!-- Corners -->
        <div class="corner tl"></div>
        <div class="corner tr"></div>
        <div class="corner bl"></div>
        <div class="corner br"></div>

        <!-- Bottom status -->
        @if (phase() >= 2) {
          <div class="status slide-up-d2">
            <span class="dot"></span>
            {{ ts.t('splash.status') }}
          </div>
        }
      </div>
    }
  `,
  styles: [`
    /* ===== Keyframes ===== */
    @keyframes particleFloat {
      0%   { transform: translateY(100vh) rotate(0deg); opacity: 0; }
      10%  { opacity: 1; }
      90%  { opacity: 1; }
      100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
    }
    @keyframes scanline {
      0%   { top: -10%; }
      100% { top: 110%; }
    }
    @keyframes glowPulse {
      0%, 100% { text-shadow: 0 0 10px rgba(59,130,246,0.5), 0 0 20px rgba(59,130,246,0.3); }
      50%      { text-shadow: 0 0 20px rgba(59,130,246,0.8), 0 0 40px rgba(59,130,246,0.5), 0 0 60px rgba(59,130,246,0.3); }
    }
    @keyframes progressGlow {
      0%   { box-shadow: 0 0 5px rgba(59,130,246,0.5); }
      50%  { box-shadow: 0 0 20px rgba(59,130,246,0.8), 0 0 40px rgba(59,130,246,0.3); }
      100% { box-shadow: 0 0 5px rgba(59,130,246,0.5); }
    }
    @keyframes floatSlow {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      33%      { transform: translateY(-15px) rotate(1deg); }
      66%      { transform: translateY(5px) rotate(-1deg); }
    }
    @keyframes slideUp {
      from { transform: translateY(30px); opacity: 0; }
      to   { transform: translateY(0); opacity: 1; }
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50%      { transform: scale(1.3); }
    }

    /* ===== Custom Cursor ===== */
    .custom-cursor {
      position: fixed;
      width: 20px; height: 20px;
      border: 2px solid #3b82f6;
      border-radius: 50%;
      pointer-events: none;
      z-index: 99999;
      transform: translate(-50%, -50%);
      transition: all 0.15s ease-out;
      mix-blend-mode: difference;
    }

    /* ===== Container ===== */
    .splash {
      position: fixed; inset: 0; z-index: 9999;
      overflow: hidden;
      background: #0a0f1c;
      font-family: 'Fira Code', 'Consolas', monospace;
      transition: none;
      cursor: none;
    }
    .splash-exit {
      transition: opacity 0.8s ease, transform 0.8s ease;
      opacity: 0;
      transform: scale(1.1);
    }

    /* ===== Grid ===== */
    .grid-bg {
      position: absolute; inset: 0;
      background-image:
        linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px);
      background-size: 60px 60px;
      transition: transform 0.3s ease-out;
    }

    /* ===== Particles ===== */
    .particle {
      position: absolute; bottom: -5%;
      border-radius: 50%;
      animation: particleFloat linear infinite;
    }

    /* ===== Scanline ===== */
    .scanline {
      position: absolute; left: 0; right: 0; height: 2px;
      background: linear-gradient(90deg, transparent, rgba(59,130,246,0.15), transparent);
      animation: scanline 4s linear infinite;
      z-index: 10;
    }

    /* ===== Glow Orbs ===== */
    .glow-orb {
      position: absolute; border-radius: 50%; filter: blur(40px);
      transition: transform 0.5s ease-out;
    }
    .glow-1 {
      top: 20%; left: 15%; width: 300px; height: 300px;
      background: radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%);
    }
    .glow-2 {
      bottom: 20%; right: 15%; width: 250px; height: 250px;
      background: radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%);
    }

    /* ===== Content ===== */
    .content {
      position: relative; z-index: 20;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      height: 100%; padding: 2rem;
    }

    /* ===== Loading Phase ===== */
    .loading { text-align: center; }
    .terminal-text {
      font-size: 0.75rem; color: rgba(59,130,246,0.6);
      margin-bottom: 30px; letter-spacing: 3px;
    }
    .progress-track {
      width: 320px; max-width: 80vw; height: 3px;
      background: rgba(255,255,255,0.05);
      border-radius: 10px; overflow: hidden; margin: 0 auto;
    }
    .progress-fill {
      height: 100%; border-radius: 10px;
      background: linear-gradient(90deg, #3b82f6, #a855f7);
      transition: width 0.1s ease;
      animation: progressGlow 2s ease infinite;
    }
    .progress-pct {
      font-size: 0.7rem; color: rgba(59,130,246,0.4);
      margin-top: 15px; font-variant-numeric: tabular-nums;
    }

    /* ===== Reveal ===== */
    .reveal {
      text-align: center; max-width: 700px;
      animation: floatSlow 6s ease-in-out infinite;
    }

    /* ===== Welcome Line ===== */
    .welcome-line {
      display: flex; align-items: center; justify-content: center;
      gap: 12px; margin-bottom: 25px;
    }
    .line-deco {
      display: block; width: 40px; height: 1px;
      background: linear-gradient(90deg, transparent, #3b82f6);
    }
    .line-deco:last-child {
      background: linear-gradient(90deg, #3b82f6, transparent);
    }
    .welcome-text {
      font-size: 0.65rem; color: #3b82f6;
      letter-spacing: 6px; text-transform: uppercase; opacity: 0.7;
    }

    /* ===== Name ===== */
    .name {
      font-family: 'Inter', sans-serif;
      font-size: clamp(2.5rem, 7vw, 5rem);
      font-weight: 900; color: #fff;
      letter-spacing: -2px; line-height: 1.1;
      margin-bottom: 8px;
    }
    .name.glow { animation: glowPulse 3s ease-in-out infinite; }
    .cursor { color: #3b82f6; font-weight: 300; }

    /* ===== Title ===== */
    .title-row { margin-bottom: 35px; }
    .bracket {
      font-size: clamp(0.85rem, 2vw, 1.1rem);
      font-weight: 300; color: rgba(255,255,255,0.5); letter-spacing: 4px;
    }
    .title-grad {
      font-family: 'Inter', sans-serif;
      font-size: clamp(0.85rem, 2vw, 1.1rem);
      font-weight: 400; letter-spacing: 4px; text-transform: uppercase;
      background: linear-gradient(135deg, #3b82f6, #a855f7);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* ===== Enter Button ===== */
    .enter-wrap { margin-top: 10px; }
    .enter-btn {
      font-family: 'Fira Code', monospace;
      font-size: 0.85rem; color: #3b82f6;
      background: transparent;
      border: 1px solid rgba(59,130,246,0.4);
      padding: 14px 45px; border-radius: 0;
      cursor: pointer; letter-spacing: 4px;
      text-transform: uppercase;
      transition: all 0.3s ease;
    }
    .enter-btn:hover {
      background: rgba(59,130,246,0.15);
      border-color: #3b82f6;
      transform: translateY(-2px);
      box-shadow: 0 10px 40px rgba(59,130,246,0.2);
    }
    .arrow { margin-inline-start: 8px; opacity: 0.6; }

    /* ===== Corners ===== */
    .corner {
      position: absolute; width: 30px; height: 30px;
    }
    .tl { top: 25px; left: 25px; border-left: 1px solid rgba(59,130,246,0.3); border-top: 1px solid rgba(59,130,246,0.3); }
    .tr { top: 25px; right: 25px; border-right: 1px solid rgba(59,130,246,0.3); border-top: 1px solid rgba(59,130,246,0.3); }
    .bl { bottom: 25px; left: 25px; border-left: 1px solid rgba(59,130,246,0.3); border-bottom: 1px solid rgba(59,130,246,0.3); }
    .br { bottom: 25px; right: 25px; border-right: 1px solid rgba(59,130,246,0.3); border-bottom: 1px solid rgba(59,130,246,0.3); }

    /* ===== Status ===== */
    .status {
      position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
      font-size: 0.65rem; color: rgba(59,130,246,0.25);
      letter-spacing: 2px; display: flex; align-items: center; gap: 8px;
      z-index: 30;
    }
    .dot {
      width: 6px; height: 6px; border-radius: 50%;
      background: #3b82f6; display: inline-block;
      animation: pulse 2s ease infinite;
    }

    /* ===== Slide Animations ===== */
    .slide-up          { animation: slideUp 0.6s ease-out; }
    .slide-up-d1       { animation: slideUp 0.6s ease-out 0.2s both; }
    .slide-up-d2       { animation: slideUp 0.6s ease-out 0.4s both; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeSplashComponent {
  ts = inject(TranslationService);

  visible = signal(true);
  phase = signal(0);
  progress = signal(0);
  glitchText = signal('');
  cursorOn = signal(true);
  mouseX = signal(0);
  mouseY = signal(0);
  cursorX = signal(0);
  cursorY = signal(0);

  progressClamped = computed(() => Math.min(Math.floor(this.progress()), 100));

  particles: Particle[] = [];

  private fullName = PERSONAL_INFO.name;

  constructor() {
    // Generate particles
    const colors = ['#3b82f6', '#a855f7', '#60a5fa'];
    this.particles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.1,
      color: colors[i % 3],
    }));

    afterNextRender(() => {
      if (sessionStorage.getItem('splash-shown')) {
        this.visible.set(false);
        return;
      }
      document.body.style.overflow = 'hidden';
      this.startLoading();
      this.startCursorBlink();
    });
  }

  onMouseMove(e: MouseEvent) {
    this.mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
    this.mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
    this.cursorX.set(e.clientX);
    this.cursorY.set(e.clientY);
  }

  handleEnter() {
    this.phase.set(3);
    sessionStorage.setItem('splash-shown', '1');
    setTimeout(() => {
      this.visible.set(false);
      document.body.style.overflow = '';
    }, 800);
  }

  private startLoading() {
    const interval = setInterval(() => {
      this.progress.update(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => this.startGlitch(), 300);
          return 100;
        }
        return p + Math.random() * 3 + 1;
      });
    }, 40);
  }

  private startGlitch() {
    this.phase.set(1);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!<>{}[]';
    const name = this.fullName;
    let iteration = 0;

    const interval = setInterval(() => {
      this.glitchText.set(
        name.split('').map((char, index) => {
          if (index < iteration) return char;
          if (char === ' ') return ' ';
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('')
      );
      iteration += 1 / 3;
      if (iteration >= name.length + 1) {
        clearInterval(interval);
        this.glitchText.set(name);
        setTimeout(() => this.phase.set(2), 400);
      }
    }, 30);
  }

  private startCursorBlink() {
    setInterval(() => this.cursorOn.update(v => !v), 530);
  }
}
