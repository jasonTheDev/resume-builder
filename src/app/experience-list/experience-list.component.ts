import { Component } from '@angular/core';
import { ExperienceComponent } from '../experience/experience.component';
import { Experience } from '../experience';

@Component({
  selector: 'app-experience-list',
  standalone: true,
  imports: [ExperienceComponent],
  templateUrl: './experience-list.component.html',
  styleUrl: './experience-list.component.css'
})
export class ExperienceListComponent {

  experience: Experience = {
    position: "Wildfire Fighter",
    description: "Worked with an awesome team"
  }
}
