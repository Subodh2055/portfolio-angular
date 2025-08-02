import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, AfterViewInit {
  frontendSkills: Skill[] = [
    { name: 'Angular 2+', level: 90, category: 'frontend', icon: 'fab fa-angular' },
    { name: 'TypeScript', level: 85, category: 'frontend', icon: 'fab fa-js' },
    { name: 'JavaScript', level: 80, category: 'frontend', icon: 'fab fa-js' },
    { name: 'HTML/CSS', level: 75, category: 'frontend', icon: 'fab fa-html5' },
    { name: 'Bootstrap', level: 70, category: 'frontend', icon: 'fab fa-bootstrap' }
  ];

  backendSkills: Skill[] = [
    { name: 'Java Spring Boot', level: 80, category: 'backend', icon: 'fab fa-java' },
    { name: 'REST APIs', level: 70, category: 'backend', icon: 'fas fa-server' },
    { name: 'MS SQL', level: 65, category: 'backend', icon: 'fas fa-database' }
  ];

  toolsSkills: Skill[] = [
    { name: 'Git', level: 80, category: 'tools', icon: 'fab fa-git-alt' },
    { name: 'Postman', level: 75, category: 'tools', icon: 'fas fa-paper-plane' },
    { name: 'JIRA', level: 70, category: 'tools', icon: 'fab fa-jira' }
  ];

  interests = [
    { name: 'TED Talks', icon: 'fas fa-play-circle' },
    { name: 'Learning', icon: 'fas fa-graduation-cap' },
    { name: 'Nepal Stock Market', icon: 'fas fa-chart-line' },
    { name: 'Hiking', icon: 'fas fa-mountain' },
    { name: 'Futsal', icon: 'fas fa-futbol' },
    { name: 'Cricket', icon: 'fas fa-cricket' }
  ];

  languages = [
    { name: 'Nepali', level: 'native' },
    { name: 'English', level: 'fluent' },
    { name: 'Hindi', level: 'fluent' }
  ];

  ngOnInit() {
    // Initialize component
  }

  ngAfterViewInit() {
    // Trigger skill bar animations when component is loaded
    setTimeout(() => {
      this.animateSkillBars();
    }, 500);
  }

  private animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach((bar, index) => {
      setTimeout(() => {
        bar.classList.add('animate');
      }, index * 200);
    });
  }
} 