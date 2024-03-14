import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { BulletPoint } from '../BulletPoint.interface';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TagsService } from '../tags.service';

@Component({
  selector: 'app-bullet-point',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './bullet-point.component.html',
  styleUrl: './bullet-point.component.css'
})
export class BulletPointComponent {

  tagsService: TagsService = inject(TagsService);
  tagControl = new FormControl('');

  @Input() bulletPoint!: BulletPoint;
  @Input() editable!: boolean;
  @Output() remove = new EventEmitter<BulletPoint>();

  saveBullet(description: string): void {
    if (!description) return;
    this.bulletPoint.description = description;
  }

  addTag(tag: string): void {
    if (!tag) return;
    this.bulletPoint.applicableTags.push(tag);
    this.tagsService.addFilterableTags([tag]);
    this.tagControl.setValue('');
  }

  removeTag(tag: string): void {
    this.bulletPoint.applicableTags = this.bulletPoint.applicableTags.filter(t => t !== tag);
    this.tagsService.removeFilterableTags([tag]);
  }
}
