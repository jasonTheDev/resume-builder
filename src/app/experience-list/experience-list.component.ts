import { Component } from '@angular/core';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-experience-list',
  standalone: true,
  imports: [ExperienceComponent],
  templateUrl: './experience-list.component.html',
  styleUrl: './experience-list.component.css'
})
export class ExperienceListComponent {

}
