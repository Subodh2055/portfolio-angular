import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  icon: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Software Developer',
      company: 'SB Solutions Pvt. Ltd.',
      period: 'March 2022 - Present',
      description: [
        'Full Stack Developer focusing on fintech, working on front-end development to deliver high-quality, industry-standard applications.',
        'Developed a fully automated Loan Management System (LMS) using Angular for front-end and Java Spring Boot Framework for back-end.',
        'Implemented Various front-end components using TypeScript, HTML, CSS, and Bootstrap.',
        'Consumed RESTful APIs using Angular to integrate with back-end services developed in Java Spring Boot.',
        'Utilized RxJS to manage asynchronous data streams and state management.'
      ],
      technologies: ['Angular', 'TypeScript', 'Java Spring Boot', 'REST APIs', 'RxJS', 'Git'],
      icon: 'fas fa-code'
    },
    {
      title: 'Software Developer (Work Shop)',
      company: 'Academia International College Innovation',
      period: 'Jan 2021 – Nov 2021',
      description: [
        'Gained experience in front-end development using the Angular framework and back-end development with Java Spring Boot.',
        'Integrated MS SQL database with back-end services for efficient data storage and retrieval.',
        'Utilized Postman for API testing and debugging and JIRA for project management.',
        'Enhanced application performance by optimizing code and database queries.'
      ],
      technologies: ['Angular', 'Java', 'MS SQL', 'Postman', 'JIRA'],
      icon: 'fas fa-laptop-code'
    }
  ];
} 