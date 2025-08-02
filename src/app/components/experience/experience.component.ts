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
  template: `
    <section class="experience">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Professional Experience</h2>
        
        <div class="timeline">
          <div class="timeline-item" *ngFor="let exp of experiences; let i = index" 
               [attr.data-aos]="i % 2 === 0 ? 'fade-right' : 'fade-left'"
               [attr.data-aos-delay]="i * 100">
            <div class="timeline-marker">
              <div class="marker-icon">
                <i [class]="exp.icon"></i>
              </div>
            </div>
            <div class="timeline-content">
              <div class="timeline-header">
                <h3>{{ exp.title }}</h3>
                <h4>{{ exp.company }}</h4>
                <span class="period">{{ exp.period }}</span>
              </div>
              <ul class="timeline-description">
                <li *ngFor="let item of exp.description">{{ item }}</li>
              </ul>
              <div class="technologies">
                <span *ngFor="let tech of exp.technologies" class="tech-tag">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience {
      padding: 120px 0 80px;
      background: white;
    }

    .timeline {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
      
      &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 2px;
        background: var(--gradient-primary);
        transform: translateX(-50%);
      }
    }

    .timeline-item {
      position: relative;
      margin-bottom: 3rem;
      display: flex;
      align-items: center;
      
      &:nth-child(odd) {
        flex-direction: row;
        
        .timeline-content {
          margin-left: 2rem;
          text-align: left;
        }
      }
      
      &:nth-child(even) {
        flex-direction: row-reverse;
        
        .timeline-content {
          margin-right: 2rem;
          text-align: right;
        }
      }
    }

    .timeline-marker {
      position: relative;
      z-index: 2;
      
      .marker-icon {
        width: 60px;
        height: 60px;
        background: var(--gradient-primary);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        border: 4px solid white;
        
        i {
          font-size: 1.5rem;
          color: white;
        }
      }
    }

    .timeline-content {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      flex: 1;
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        width: 0;
        height: 0;
        border-style: solid;
        transform: translateY(-50%);
      }
    }

    .timeline-item:nth-child(odd) .timeline-content::before {
      left: -10px;
      border-width: 10px 10px 10px 0;
      border-color: transparent white transparent transparent;
    }

    .timeline-item:nth-child(even) .timeline-content::before {
      right: -10px;
      border-width: 10px 0 10px 10px;
      border-color: transparent transparent transparent white;
    }

    .timeline-header {
      margin-bottom: 1.5rem;
      
      h3 {
        font-size: 1.5rem;
        color: var(--secondary-color);
        margin-bottom: 0.5rem;
      }
      
      h4 {
        font-size: 1.2rem;
        color: var(--primary-color);
        margin-bottom: 0.5rem;
        font-weight: 600;
      }
      
      .period {
        display: inline-block;
        background: var(--gradient-secondary);
        color: white;
        padding: 5px 15px;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
      }
    }

    .timeline-description {
      margin-bottom: 1.5rem;
      
      li {
        margin-bottom: 0.75rem;
        line-height: 1.6;
        color: var(--text-color);
        position: relative;
        padding-left: 1.5rem;
        
        &::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--primary-color);
          font-weight: bold;
        }
      }
    }

    .technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      
      .tech-tag {
        background: var(--gradient-accent);
        color: white;
        padding: 5px 12px;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 600;
        transition: all 0.3s ease;
        
        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
      }
    }

    @media (max-width: 768px) {
      .timeline::before {
        left: 30px;
      }
      
      .timeline-item {
        flex-direction: row !important;
        
        .timeline-content {
          margin-left: 2rem !important;
          margin-right: 0 !important;
          text-align: left !important;
        }
      }
      
      .timeline-item:nth-child(even) .timeline-content::before {
        left: -10px;
        right: auto;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
      }
    }
  `]
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