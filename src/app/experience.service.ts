import { Injectable } from '@angular/core';
import { Experience } from './Experience.interface';
import { BulletPoint } from './BulletPoint.interface';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  experiences: Experience[] = [
    {
      position: "Wildfire Fighter",
      bulletPoints: [
        {
          description: "Worked with an awesome team",
          applicableTags: ["teamwork"]
        },
        {
          description: "Camped in the forest",
          applicableTags: ["camping"]
        },
      ] 
    },
    {
      position: "Teaching Assistant",
      bulletPoints: [
        {
          description: "Communicated technical topics to students",
          applicableTags: ["communication"]
        },
        {
          description: "Taught technical topics to students",
          applicableTags: ["teaching"]
        },
      ]
    }
  ]

  getAllExperiences(): Experience[] {
    return this.experiences;
  }
}
