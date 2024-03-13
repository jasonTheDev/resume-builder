import { Component, Input } from '@angular/core';
import { BulletPointComponent } from '../bullet-point/bullet-point.component';
import { Experience } from '../Experience.interface';
import { BulletPoint } from '../BulletPoint.interface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [BulletPointComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  editable: boolean = false;
  experienceControl = new FormControl('');

  @Input() experience!: Experience;

  remove(bullet: BulletPoint) {
    this.experience.bulletPoints = this.experience.bulletPoints.filter(b => b !== bullet);
  }

  addBullet(description: string): void {
    const bullet: BulletPoint = {
      description: description,
      applicableTags: []
    }
    this.experience.bulletPoints.push(bullet);
  }

  negateEditable(): void {
    this.editable = !this.editable;
    console.log(`Editable is ${this.editable}`)
  }
}
