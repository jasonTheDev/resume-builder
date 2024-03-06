import { Component, inject } from '@angular/core';
import { ExperienceComponent } from '../experience/experience.component';
import { Experience } from '../Experience.interface';
import { BulletPoint } from '../BulletPoint.interface';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-experience-list',
  standalone: true,
  imports: [ExperienceComponent],
  templateUrl: './experience-list.component.html',
  styleUrl: './experience-list.component.css'
})
export class ExperienceListComponent {
  experiences: Experience[] = []
  experienceService: ExperienceService = inject(ExperienceService);
  constructor() {
    this.experiences = this.experienceService.getAllExperiences();
  }
}
