import { Injectable } from '@angular/core';

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  showSuccess(message: string, title: string = 'Success!') {
    this.showNotification(message, title, 'success');
  }

  showError(message: string, title: string = 'Error') {
    this.showNotification(message, title, 'error');
  }

  showWarning(message: string, title: string = 'Warning') {
    this.showNotification(message, title, 'warning');
  }

  showInfo(message: string, title: string = 'Info') {
    this.showNotification(message, title, 'info');
  }

  private showNotification(message: string, title: string, type: NotificationType) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `custom-toast custom-toast-${type}`;
    
    const icon = this.getIconForType(type);
    const color = this.getColorForType(type);
    
    notification.innerHTML = `
      <div class="toast-header">
        <i class="${icon}"></i>
        <span class="toast-title">${title}</span>
        <button class="toast-close" onclick="this.parentElement.parentElement.remove()">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="toast-body">
        ${message}
      </div>
      <div class="toast-progress"></div>
    `;

    // Add styles
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
      border-left: 4px solid ${color};
      margin-bottom: 10px;
      overflow: hidden;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      z-index: 10000;
      min-width: 300px;
      max-width: 400px;
      animation: slideInRight 0.3s ease-out;
    `;

    // Add header styles
    const header = notification.querySelector('.toast-header') as HTMLElement;
    if (header) {
      header.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 16px;
        border-bottom: 1px solid #f0f0f0;
        background: #fafafa;
      `;
    }

    // Add title styles
    const titleElement = notification.querySelector('.toast-title') as HTMLElement;
    if (titleElement) {
      titleElement.style.cssText = `
        font-weight: 600;
        font-size: 1rem;
        color: #2c3e50;
        margin-left: 8px;
        flex: 1;
      `;
    }

    // Add close button styles
    const closeButton = notification.querySelector('.toast-close') as HTMLElement;
    if (closeButton) {
      closeButton.style.cssText = `
        background: none;
        border: none;
        color: #7f8c8d;
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0.7;
        transition: opacity 0.3s ease;
        padding: 4px;
        border-radius: 4px;
      `;
      
      closeButton.addEventListener('mouseenter', () => {
        closeButton.style.opacity = '1';
        closeButton.style.color = '#e74c3c';
      });
      
      closeButton.addEventListener('mouseleave', () => {
        closeButton.style.opacity = '0.7';
        closeButton.style.color = '#7f8c8d';
      });
    }

    // Add body styles
    const body = notification.querySelector('.toast-body') as HTMLElement;
    if (body) {
      body.style.cssText = `
        padding: 12px 16px;
        font-size: 0.9rem;
        color: #333;
        line-height: 1.4;
      `;
    }

    // Add progress bar styles
    const progress = notification.querySelector('.toast-progress') as HTMLElement;
    if (progress) {
      progress.style.cssText = `
        height: 3px;
        background: ${color};
        width: 100%;
        animation: progress 5s linear;
      `;
    }

    // Add to container
    let container = document.querySelector('.toast-container') as HTMLElement;
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      container.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
      `;
      document.body.appendChild(container);
    }

    container.appendChild(notification);

    // Add animations
    this.addAnimations();

    // Auto remove after 5 seconds
    setTimeout(() => {
      if (notification.parentElement) {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
          if (notification.parentElement) {
            notification.parentElement.removeChild(notification);
          }
        }, 300);
      }
    }, 5000);
  }

  private getIconForType(type: NotificationType): string {
    const icons = {
      success: 'fas fa-check-circle',
      error: 'fas fa-exclamation-circle',
      warning: 'fas fa-exclamation-triangle',
      info: 'fas fa-info-circle'
    };
    return icons[type];
  }

  private getColorForType(type: NotificationType): string {
    const colors = {
      success: '#00b09b',
      error: '#ff5f6d',
      warning: '#ffc107',
      info: '#17a2b8'
    };
    return colors[type];
  }

  private addAnimations() {
    if (!document.querySelector('#toast-animations')) {
      const style = document.createElement('style');
      style.id = 'toast-animations';
      style.textContent = `
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideOutRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        
        @keyframes progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }
}
