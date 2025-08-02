import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="hero">
      <div class="container">
        <div class="hero-content" data-aos="fade-up">
          <div class="hero-text">
            <h1 class="hero-title">
              <span class="gradient-text">Building Innovative</span><br>
              <span class="gradient-text">Fintech Solutions</span>
            </h1>
            <p class="hero-subtitle">
              Full Stack Developer with 2+ years of experience in Angular, TypeScript, and Java Spring Boot.
              Passionate about creating scalable, user-friendly applications that drive business growth.
            </p>
            <div class="hero-buttons">
              <a routerLink="/projects" class="btn btn-primary">View My Work</a>
              <a routerLink="/contact" class="btn btn-secondary">Get In Touch</a>
            </div>
            <div class="hero-stats">
              <div class="stat-item">
                <span class="stat-number">2+</span>
                <span class="stat-label">Years Experience</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">10+</span>
                <span class="stat-label">Projects Completed</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">5+</span>
                <span class="stat-label">Technologies</span>
              </div>
            </div>
          </div>
          <div class="hero-image" data-aos="fade-left">
            <div class="profile-container">
              <div class="profile-image">
                <img src="assets/images/profile.jpg" alt="Subodh Bhandari" />
              </div>
              <div class="floating-card card-1">
                <i class="fab fa-angular"></i>
                <span>Angular</span>
              </div>
              <div class="floating-card card-2">
                <i class="fab fa-java"></i>
                <span>Java</span>
              </div>
              <div class="floating-card card-3">
                <i class="fab fa-js"></i>
                <span>TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <div class="features-grid">
          <div class="feature-card" data-aos="fade-up" data-aos-delay="100">
            <div class="feature-icon">
              <i class="fas fa-code"></i>
            </div>
            <h3>Full Stack Development</h3>
            <p>Expert in both frontend and backend development with modern technologies.</p>
          </div>
          <div class="feature-card" data-aos="fade-up" data-aos-delay="200">
            <div class="feature-icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3>Fintech Solutions</h3>
            <p>Specialized in building robust financial technology applications and systems.</p>
          </div>
          <div class="feature-card" data-aos="fade-up" data-aos-delay="300">
            <div class="feature-icon">
              <i class="fas fa-mobile-alt"></i>
            </div>
            <h3>Responsive Design</h3>
            <p>Creating beautiful, responsive applications that work on all devices.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 120px 0 80px;
      position: relative;
      overflow: hidden;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
        opacity: 0.3;
      }
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      position: relative;
      z-index: 2;
    }

    .hero-text {
      .hero-title {
        font-size: 3.5rem;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 1.5rem;
        
        .gradient-text {
          background: linear-gradient(45deg, #fff, #f0f0f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      }
      
      .hero-subtitle {
        font-size: 1.2rem;
        line-height: 1.6;
        margin-bottom: 2rem;
        opacity: 0.9;
      }
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      margin-bottom: 3rem;
      
      .btn {
        padding: 15px 30px;
        border-radius: 50px;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.3s ease;
        
        &.btn-primary {
          background: white;
          color: var(--primary-color);
          
          &:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          }
        }
        
        &.btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
          
          &:hover {
            background: white;
            color: var(--primary-color);
            transform: translateY(-3px);
          }
        }
      }
    }

    .hero-stats {
      display: flex;
      gap: 2rem;
      
      .stat-item {
        text-align: center;
        
        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: white;
        }
        
        .stat-label {
          font-size: 0.9rem;
          opacity: 0.8;
        }
      }
    }

    .hero-image {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .profile-container {
      position: relative;
      
      .profile-image {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        overflow: hidden;
        border: 5px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      
      .floating-card {
        position: absolute;
        background: white;
        color: var(--primary-color);
        padding: 10px 15px;
        border-radius: 25px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 600;
        animation: float 3s ease-in-out infinite;
        
        i {
          font-size: 1.2rem;
        }
        
        &.card-1 {
          top: 20px;
          right: -20px;
          animation-delay: 0s;
        }
        
        &.card-2 {
          bottom: 40px;
          left: -30px;
          animation-delay: 1s;
        }
        
        &.card-3 {
          top: 50%;
          right: -40px;
          animation-delay: 2s;
        }
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    .features {
      padding: 80px 0;
      background: white;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .feature-card {
      text-align: center;
      padding: 2rem;
      border-radius: 15px;
      background: white;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
      }
      
      .feature-icon {
        width: 80px;
        height: 80px;
        background: var(--gradient-primary);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.5rem;
        
        i {
          font-size: 2rem;
          color: white;
        }
      }
      
      h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: var(--secondary-color);
      }
      
      p {
        color: var(--text-light);
        line-height: 1.6;
      }
    }

    @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
      }
      
      .hero-title {
        font-size: 2.5rem !important;
      }
      
      .hero-buttons {
        flex-direction: column;
        align-items: center;
      }
      
      .hero-stats {
        justify-content: center;
      }
      
      .profile-container .profile-image {
        width: 250px;
        height: 250px;
      }
      
      .floating-card {
        display: none;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    // Additional initialization if needed
  }
} 