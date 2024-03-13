import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ExperienceComponent } from '../experience/experience.component';
import { Experience } from '../Experience.interface';
import { ExperienceService } from '../experience.service';
import { BulletPoint } from '../BulletPoint.interface';

@Component({
  selector: 'app-experience-list',
  standalone: true,
  imports: [ExperienceComponent, ReactiveFormsModule],
  templateUrl: './experience-list.component.html',
  styleUrl: './experience-list.component.css'
})
export class ExperienceListComponent {
  experiences: Experience[] = [];
  filteredExperiences: Experience[] = [];
  uniqueTags: string[] = [];
  experienceService: ExperienceService = inject(ExperienceService);
  filterControl = new FormControl('all');
  experienceControl = new FormControl('');

  constructor() {
    this.experiences = this.experienceService.getAllExperiences();
    this.filteredExperiences = this.experiences;
    this.uniqueTags = this.getUniqueTags();
    this.filterControl.valueChanges.subscribe(() => {
      this.filterExperiences();
    });
  }

  filterExperiences(): void {
    if (this.filterControl.value === 'all') {
      this.filteredExperiences = this.experiences;
    } else {
      const deepCopy = this.experiences.map(exp => ({...exp}));
      let exp: Experience[] = [];
      for (let experience of deepCopy) {
        let bullets: BulletPoint[] = [];
        for (let bullet of experience.bulletPoints) {
          if (bullet.applicableTags.includes(this.filterControl.value ?? 'all')) {
            bullets.push(bullet);
          }
        }
        experience.bulletPoints = bullets;
        exp.push(experience);
      }
      this.filteredExperiences = exp.filter(experience => experience.bulletPoints.length > 0);
    }
  }

  addExperience(positionTitle:string): void {
    const experience: Experience = {
      position: positionTitle,
      bulletPoints: []
    }
    this.experiences.push(experience);
    this.experienceControl.setValue('');
  }

  getUniqueTags(): string[] {
    let tags: string[] = [];
    for (const experience of this.experiences) {
      for (const bullet of experience.bulletPoints) {
        tags.push(...bullet.applicableTags);
      }
    }
    // remove duplicate tags
    return [...new Set(tags)];
  }
}
