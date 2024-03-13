import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BulletPoint } from '../BulletPoint.interface';

@Component({
  selector: 'app-bullet-point',
  standalone: true,
  imports: [],
  templateUrl: './bullet-point.component.html',
  styleUrl: './bullet-point.component.css'
})
export class BulletPointComponent {

  editable: boolean = false;

  @Input() bulletPoint!: BulletPoint;
  @Output() remove = new EventEmitter<BulletPoint>();

  saveBullet(description: string): void {
    if (!description) return;
    this.editable = false;
    this.bulletPoint.description = description;
  }

  addTag(tag: string): void {
    if (!tag) return;
    this.bulletPoint.applicableTags.push(tag);
  }
}
