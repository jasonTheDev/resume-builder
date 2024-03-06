import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExperienceListComponent } from './experience-list/experience-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExperienceListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'experience-filter';
}

