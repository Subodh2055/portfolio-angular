import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

declare var emailjs: any;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  submitted = false;
  isSubmitting = false;

  ngOnInit() {
    // Initialize EmailJS
    if (typeof emailjs !== 'undefined') {
      emailjs.init('P7vsLl1LMUjGwlFCD');
    }
  }

  onSubmit() {
    this.submitted = true;
    
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      return;
    }
    
    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(this.formData.email)) {
      return;
    }
    
    this.isSubmitting = true;
    
    // Prepare email data
    const emailData = {
      to_email: 'subodhbhandari4&#64;gmail.com',
      from_name: this.formData.name,
      from_email: this.formData.email,
      subject: this.formData.subject || 'Portfolio Contact Form',
      message: this.formData.message
    };
    
    // Send email using EmailJS
    if (typeof emailjs !== 'undefined') {
      emailjs.send('service_wvczn3l', 'template_7tf5rwn', emailData)
        .then((response: any) => {
          this.showNotification('Email sent successfully!', 'success');
          this.resetForm();
        })
        .catch((error: any) => {
          this.showNotification('Failed to send email. Please try again.', 'error');
          console.error('EmailJS Error:', error);
        })
        .finally(() => {
          this.isSubmitting = false;
        });
    } else {
      // Fallback for when EmailJS is not available
      this.showNotification('Email service not available. Please contact directly.', 'error');
      this.isSubmitting = false;
    }
  }

  private resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    this.submitted = false;
  }

  private showNotification(message: string, type: 'success' | 'error') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 15px 20px;
      border-radius: 8px;
      color: white;
      font-weight: 600;
      z-index: 10000;
      animation: slideIn 0.3s ease-out;
      ${type === 'success' 
        ? 'background: linear-gradient(135deg, #00b09b, #96c93d);' 
        : 'background: linear-gradient(135deg, #ff5f6d, #ffc371);'
      }
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease-out';
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }
} 