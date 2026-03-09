import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Mohamed Mohr | Full Stack .NET + Angular Developer',
  },
  {
    path: 'projects/:slug',
    loadComponent: () => import('./features/project-detail/project-detail.component').then(m => m.ProjectDetailComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: '404 - Page Not Found',
  },
];
