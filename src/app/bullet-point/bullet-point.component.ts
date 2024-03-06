import { Component, Input } from '@angular/core';
import { BulletPoint } from '../BulletPoint.interface';

@Component({
  selector: 'app-bullet-point',
  standalone: true,
  imports: [],
  templateUrl: './bullet-point.component.html',
  styleUrl: './bullet-point.component.css'
})
export class BulletPointComponent {

    @Input() bulletPoint!: BulletPoint;
}
