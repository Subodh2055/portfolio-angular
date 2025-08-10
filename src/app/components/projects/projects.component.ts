import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  company: string;
  image: string;
  link?: string;
  github?: string;
  features: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',

})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Loan Management System (LMS)',
      description: 'Developed a fully automated Loan Management System for banking and microfinance institutions using Angular and Java Spring Boot.',
      technologies: ['Angular', 'TypeScript', 'Java Spring Boot', 'REST APIs'],
      company: 'SB Solutions Pvt. Ltd.',
      image: 'lms',
      features: [
        'Complete loan lifecycle management',
        'Automated approval workflows',
        'Real-time reporting and analytics',
        'Multi-role user management',
        'Secure payment processing'
      ]
    },
    {
      title: 'Online Blood Management System',
      description: 'Designed and developed a comprehensive web application to streamline blood donation and management processes.',
      technologies: ['PHP', 'HTML/CSS', 'JavaScript'],
      company: 'College Project',
      image: 'blood',
      features: [
        'Blood donor registration',
        'Inventory management',
        'Request and matching system',
        'Donor notifications',
        'Emergency blood requests'
      ]
    },
    {
      title: 'Valuator App',
      description: 'Complementary Android application built with Java in Android Studio for the Online Blood Management System.',
      technologies: ['Java', 'Android Studio'],
      company: 'College Project',
      image: 'valuator',
      features: [
        'Mobile blood donation tracking',
        'QR code scanning',
        'Real-time updates',
        'Offline functionality',
        'Push notifications'
      ]
    }
  ];
} 