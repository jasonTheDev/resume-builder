import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Experience } from './Experience.interface';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  private tagsUpdatedSource = new Subject<void>();
  tagsUpdated$ = this.tagsUpdatedSource.asObservable();

  // use an Array instead of a Set to track duplicate tags
  filterableTags: string[] = [];

  setFilterableTags(tags: string[]): void {
    this.filterableTags = tags;
  }

  getUniqueFilterableTags(): string[] {
    return [...new Set(this.filterableTags)];
  }

  removeFilterableTags(tagsToRemove: string[]) {
    tagsToRemove.forEach(tag => {
      const index = this.filterableTags.indexOf(tag);
      if (index > -1) {
        this.filterableTags.splice(index, 1);
      }
    });
    this.tagsUpdatedSource.next();
  }

  extractTags(experiences: Experience[]): string[] {
    let tags: string[] = [];
    for (const experience of experiences) {
      for (const bullet of experience.bulletPoints) {
        tags.push(...bullet.applicableTags);
      }
    }
    return tags;
  }

  addFilterableTags(tags: string[]): void {
    this.filterableTags.push(...tags);
    this.tagsUpdatedSource.next();
  }
}
