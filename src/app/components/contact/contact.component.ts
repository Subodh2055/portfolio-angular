import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.maxLength(100)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.markFormGroupTouched();
      this.notificationService.showError('Please fill in all required fields correctly.', 'Validation Error');
      return;
    }

    this.isSubmitting = true;
    const formData = this.contactForm.value;

    // Additional email validation
    if (!this.emailService.validateEmail(formData.email)) {
      this.notificationService.showError('Please enter a valid email address.', 'Invalid Email');
      this.isSubmitting = false;
      return;
    }

    // Check if EmailJS is available
    if (!this.emailService.isEmailJSAvailable()) {
      this.notificationService.showWarning('Email service not available. Please contact me directly via email.', 'Service Unavailable');
      this.isSubmitting = false;
      return;
    }

    // Send email using the service
    this.emailService.sendEmail(formData).subscribe({
      next: (response) => {
        this.notificationService.showSuccess('Thank you! Your message has been sent successfully.', 'Success!');
        this.resetForm();
      },
      error: (error) => {
        console.error('Email sending error:', error);
        this.notificationService.showError(error.message || 'Failed to send email. Please try again or contact me directly.', 'Error');
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }

  private resetForm() {
    this.contactForm.reset();
    this.contactForm.markAsUntouched();
  }

  private markFormGroupTouched() {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }

  // Helper methods for template
  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) {
        return `${this.getFieldLabel(fieldName)} is required`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['minlength']) {
        const requiredLength = field.errors['minlength'].requiredLength;
        return `${this.getFieldLabel(fieldName)} must be at least ${requiredLength} characters`;
      }
      if (field.errors['maxlength']) {
        const requiredLength = field.errors['maxlength'].requiredLength;
        return `${this.getFieldLabel(fieldName)} must not exceed ${requiredLength} characters`;
      }
    }
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message'
    };
    return labels[fieldName] || fieldName;
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field?.invalid && field.touched);
  }

  isFieldValid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field?.valid && field.touched);
  }
} 