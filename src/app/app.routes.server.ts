import { RenderMode, ServerRoute } from '@angular/ssr';
import { PROJECTS } from './core/data/portfolio.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'projects/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return PROJECTS.map(p => ({ slug: p.slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
