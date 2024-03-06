import { Component } from '@angular/core';
import { ExperienceComponent } from '../experience/experience.component';
import { Experience } from '../Experience.interface';
import { BulletPoint } from '../BulletPoint.interface';

@Component({
  selector: 'app-experience-list',
  standalone: true,
  imports: [ExperienceComponent],
  templateUrl: './experience-list.component.html',
  styleUrl: './experience-list.component.css'
})
export class ExperienceListComponent {

  experiences: Experience[] = [
    {
      position: "Wildfire Fighter",
      bulletPoints: [
        {
          description: "Worked with an awesome team"
        },
      ] 
    },
    {
      position: "Teaching Assistant",
      bulletPoints: [
        {
          description: "Communicated technical topics to students"
        }
      ]
    }
  ]
}
