import { Component, Input } from '@angular/core';
import { BulletPointComponent } from '../bullet-point/bullet-point.component';
import { Experience } from '../experience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [BulletPointComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  @Input() experience!: Experience;

}
