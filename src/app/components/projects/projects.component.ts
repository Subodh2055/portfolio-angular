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
  template: `
    <section class="projects">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Featured Projects</h2>
        
        <div class="projects-grid">
          <div class="project-card" *ngFor="let project of projects; let i = index" 
               [attr.data-aos]="'fade-up'"
               [attr.data-aos-delay]="i * 200">
            <div class="project-image">
              <div class="image-placeholder" [class]="project.image"></div>
              <div class="project-overlay">
                <div class="project-links">
                  <a *ngIf="project.link" [href]="project.link" target="_blank" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                    <span>Live Demo</span>
                  </a>
                  <a *ngIf="project.github" [href]="project.github" target="_blank" class="project-link">
                    <i class="fab fa-github"></i>
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div class="project-content">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              
              <div class="project-features">
                <h4>Key Features:</h4>
                <ul>
                  <li *ngFor="let feature of project.features">{{ feature }}</li>
                </ul>
              </div>
              
              <div class="project-tech">
                <span *ngFor="let tech of project.technologies" class="tech-tag">{{ tech }}</span>
              </div>
              
              <div class="project-company">{{ project.company }}</div>
            </div>
          </div>
        </div>
        
        <div class="projects-cta" data-aos="fade-up">
          <h3>Interested in working together?</h3>
          <p>Let's discuss your next project and bring your ideas to life.</p>
          <a routerLink="/contact" class="btn btn-primary">Get In Touch</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects {
      padding: 120px 0 80px;
      background: white;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .project-card {
      background: white;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        
        .project-overlay {
          opacity: 1;
        }
      }
    }

    .project-image {
      position: relative;
      height: 200px;
      overflow: hidden;
      
      .image-placeholder {
        width: 100%;
        height: 100%;
        background: var(--gradient-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 3rem;
        
        &.lms {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          &::before {
            content: '🏦';
          }
        }
        
        &.blood {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          &::before {
            content: '🩸';
          }
        }
        
        &.valuator {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          &::before {
            content: '📱';
          }
        }
      }
      
      .project-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: all 0.3s ease;
        
        .project-links {
          display: flex;
          gap: 1rem;
          
          .project-link {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 10px 15px;
            background: white;
            color: var(--primary-color);
            text-decoration: none;
            border-radius: 25px;
            font-weight: 600;
            transition: all 0.3s ease;
            
            &:hover {
              transform: translateY(-2px);
              box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            }
            
            i {
              font-size: 1rem;
            }
          }
        }
      }
    }

    .project-content {
      padding: 2rem;
      
      h3 {
        font-size: 1.5rem;
        color: var(--secondary-color);
        margin-bottom: 1rem;
      }
      
      p {
        color: var(--text-color);
        line-height: 1.6;
        margin-bottom: 1.5rem;
      }
    }

    .project-features {
      margin-bottom: 1.5rem;
      
      h4 {
        font-size: 1.1rem;
        color: var(--secondary-color);
        margin-bottom: 0.75rem;
      }
      
      ul {
        list-style: none;
        padding: 0;
        
        li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-color);
          line-height: 1.5;
          
          &::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: var(--primary-color);
            font-weight: bold;
          }
        }
      }
    }

    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
      
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

    .project-company {
      font-size: 0.9rem;
      color: var(--text-light);
      font-style: italic;
    }

    .projects-cta {
      text-align: center;
      background: var(--gradient-primary);
      color: white;
      padding: 3rem;
      border-radius: 15px;
      
      h3 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      
      p {
        font-size: 1.1rem;
        margin-bottom: 2rem;
        opacity: 0.9;
      }
      
      .btn {
        background: white;
        color: var(--primary-color);
        padding: 15px 30px;
        border-radius: 25px;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
        
        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
      }
    }

    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
      
      .project-content {
        padding: 1.5rem;
      }
      
      .projects-cta {
        padding: 2rem;
        
        h3 {
          font-size: 1.5rem;
        }
      }
    }
  `]
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