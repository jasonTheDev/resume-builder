import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { BulletPointComponent } from '../bullet-point/bullet-point.component';
import { Experience } from '../Experience.interface';
import { BulletPoint } from '../BulletPoint.interface';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TagsService } from '../tags.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [BulletPointComponent, ReactiveFormsModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  editable: boolean = false;
  bulletControl = new FormControl('');
  tagsService: TagsService = inject(TagsService);

  @Input() experience!: Experience;
  @Output() removeExperience = new EventEmitter<Experience>();

  remove(bullet: BulletPoint) {
    this.experience.bulletPoints = this.experience.bulletPoints.filter(b => b !== bullet);
    this.tagsService.removeFilterableTags(bullet.applicableTags);
  }

  addBullet(description: string): void {
    const bullet: BulletPoint = {
      description: description,
      applicableTags: []
    }
    this.experience.bulletPoints.push(bullet);
    this.bulletControl.setValue('');
  }

  negateEditable(): void {
    this.editable = !this.editable;
    console.log(`Editable is ${this.editable}`)
  }
}
