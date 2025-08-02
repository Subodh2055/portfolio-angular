import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    main {
      min-height: calc(100vh - 200px);
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'Subodh Bhandari - Portfolio';

  ngOnInit() {
    // Initialize AOS (Animate On Scroll)
    if (typeof window !== 'undefined') {
      const AOS = (window as any).AOS;
      if (AOS) {
        AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          once: true
        });
      }
    }
  }
} 