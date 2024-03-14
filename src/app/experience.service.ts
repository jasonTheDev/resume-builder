import { Injectable } from '@angular/core';
import { Experience } from './Experience.interface';

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
          applicableTags: ["teamwork", "problem solving", "lksjdf", "lkhlkwe", "lksdflksadf", "lskadflkhsdfls", "lsakd;flkhsadf", "lkasdflshdfla", "lsakdfhlskahdf"]
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
    },
    {
      position: "Empty Position",
      bulletPoints: [] 
    },
  ]

  getAllExperiences(): Experience[] {
    return this.experiences;
  }
}
