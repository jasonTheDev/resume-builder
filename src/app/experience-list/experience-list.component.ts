import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ExperienceComponent } from '../experience/experience.component';
import { Experience } from '../Experience.interface';
import { ExperienceService } from '../experience.service';

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
  experienceService: ExperienceService = inject(ExperienceService);
  filterControl = new FormControl('all');

  constructor() {
    this.experiences = this.experienceService.getAllExperiences();
    this.filteredExperiences = this.experiences;

    this.filterControl.valueChanges.subscribe(() => {
      this.filterExperiences();
    });
  }

  filterExperiences(): void {
    if (this.filterControl.value === 'all') {
      this.filteredExperiences = this.experiences;
    } else {
      this.filteredExperiences = this.experiences.filter(
        experience => experience.position === this.filterControl.value);
    }
  }
}
