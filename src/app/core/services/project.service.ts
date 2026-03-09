import { Injectable } from '@angular/core';
import { PROJECTS } from '../data/portfolio.data';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  getAll(): Project[] {
    return PROJECTS;
  }

  getBySlug(slug: string): Project | undefined {
    return PROJECTS.find(p => p.slug === slug);
  }

  getSlugs(): string[] {
    return PROJECTS.map(p => p.slug);
  }
}
