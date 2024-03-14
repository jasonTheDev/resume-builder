import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ExperienceComponent } from '../experience/experience.component';
import { Experience } from '../Experience.interface';
import { ExperienceService } from '../experience.service';
import { BulletPoint } from '../BulletPoint.interface';
import { TagsService } from '../tags.service';

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
  tagsService: TagsService = inject(TagsService);
  tagSubscription: Subscription;

  filterControl = new FormControl('all');
  experienceControl = new FormControl('');

  constructor() {
    this.experiences = this.experienceService.getAllExperiences();
    this.filteredExperiences = this.experiences;
    this.tagsService.setFilterableTags(this.tagsService.extractTags(this.experiences));
    this.uniqueTags = this.tagsService.getUniqueFilterableTags();

    this.filterControl.valueChanges.subscribe(() => {
      this.filterExperiences();
    });

    this.tagSubscription = this.tagsService.tagsUpdated$.subscribe(() => {
      this.uniqueTags = this.tagsService.getUniqueFilterableTags();
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
    if (!positionTitle) { return; }
    const experience: Experience = {
      position: positionTitle,
      bulletPoints: []
    }
    this.experiences.push(experience);
    this.experienceControl.setValue('');
  }

  removeExperience(experience: Experience): void {
    console.log("made it to method");
    this.experiences = this.experiences.filter(e => e.position !== experience.position);
    this.tagsService.removeFilterableTags(this.tagsService.extractTags([experience]));
    this.uniqueTags = this.tagsService.getUniqueFilterableTags();
    this.filterExperiences();
  }


}
