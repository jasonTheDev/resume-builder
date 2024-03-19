import { Injectable } from '@angular/core';
import { Experience } from './Experience.interface';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  experiences: Experience[] = [
    {
      position: "Junior Full Stack Developer Co-op",
      bulletPoints: [
        {
          description: "Implemented new features from Agile meetings using a Ruby on Rails backend and a React frontend, ensuring quality through RSpec unit tests, code reviews, and UI testing, deploying to a storefront with 1+ million users.",
          applicableTags: ["Agile", "Back-end", "Front-end", "Testing"]
        },
        {
          description: "Identified an opportunity to improve codebase quality by leveraging the ORM's ability to store subclasses polymorphically, eliminating over 150 lines of redundant code.",
          applicableTags: ["Refactoring", "Initiative"]
        },
        {
          description: "Partnered with other co-op students to learn new skills and help one another when stuck. Communicated with each other via Slack and coordinated code via Git and GitHub.",
          applicableTags: ["Teamwork", "Git"]
        },
        {
          description: "Adapted to the company's stack by enthusiastically learning Ruby on Rails-going from zero experience to shipping new features in a couple of weeks.",
          applicableTags: ["Learning", "Enthusiasm"]
        },
      ] 
    },
    {
      position: "Research Assistant - Software Developer",
      bulletPoints: [
        {
          description: "Developed a Python-based repository, published on GitHub, for conducting analytics on large social networks to investigate the affects of different recommendation algorithms on minority groups.",
          applicableTags: ["Python"]
        },
        {
          description: "Collaborated with team members using Git and Trello for iterative feature development involving data collection, processing, and visualization, using Python tools like NumPy, Matplotlib and Conda.",
          applicableTags: ["Git", "Python", "Teamwork"]
        },
        {
          description: "Refactored the codebase to improve maintainability, and created comprehensive documentation to ensure the system's clarity for continued use by University of Victoria researchers.",
          applicableTags: ["Refactoring"]
        },
        {
          description: "Investigated and integrated graph algorithm libraries like NetworkX and Leidenalg, significantly accelerating the pace of development while enhancing the system's reliability.",
          applicableTags: ["Problem solving", "Learning"]
        },
      ] 
    },
    {
      position: "Teaching Assistant - Computer Science",
      bulletPoints: [
        {
          description: "Communicated technical concepts to lab sections of 25+ first year students to effectively teach programming and web development fundamentals like Python, unit testing, CSS, HTML, JavaScript, RESTful API's and jQuery.",
          applicableTags: ["Communication", "Front-end", "Python"]
        },
        {
          description: "Empathized with frustrated students, to better coach them through the debugging process during in-class Python coding exercises.",
          applicableTags: ["Python"]
        },
      ] 
    },
    {
      position: "Wildfire Fighter",
      bulletPoints: [
        {
          description: "Worked co-operatively within large, diverse teams, encompassing personnel from various organizations and work groups, including landowners, contractors, RCMP, and municipal fire departments.",
          applicableTags: ["Teamwork"]
        },
        {
          description: "Made critical decisions by systematically analyzing available information, prioritizing objectives, problem solving, and directing onsite resources to effectively lead the extinguishment of 12 fires.",
          applicableTags: ["Problem solving"]
        },
        {
          description: "Championed organizational culture by designing crew T-shirts, planning fitness competitions, sporting events, board game nights, get-togethers, and camping trips to bolster crew morale.",
          applicableTags: ["Enthusiasm", "Teamwork"]
        },
        {
          description: "Worked 15 hour days continuously over 14 day periods throughout busy fire seasons to contribute to the extinguishment of large scale project fires including the Elephant Hill fire of 2017.",
          applicableTags: ["Hard work"]
        },
      ] 
    },
    {
      position: "Technical Support Volunteer",
      bulletPoints: [
        {
          description: "Collaborated with a cross functional team to improve the functionality of the organization's Wix website.",
          applicableTags: ["Teamwork"]
        },
        {
          description: "Took initiative to increase the PageSpeed Insight's score of the landing page by 20 points.",
          applicableTags: ["Initiative"]
        },
      ]
    },
  ]

  getAllExperiences(): Experience[] {
    return this.experiences;
  }
}
