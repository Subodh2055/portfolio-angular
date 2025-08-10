import { Injectable } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

declare var emailjs: any;

export interface EmailData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly SERVICE_ID = 'service_wvczn3l';
  private readonly TEMPLATE_ID = 'template_7tf5rwn';
  private readonly PUBLIC_KEY = 'P7vsLl1LMUjGwlFCD';

  constructor() {
    this.initEmailJS();
  }

  private initEmailJS(): void {
    if (typeof emailjs !== 'undefined') {
      emailjs.init(this.PUBLIC_KEY);
    }
  }

  sendEmail(emailData: EmailData): Observable<any> {
    if (typeof emailjs === 'undefined') {
      return throwError(() => new Error('EmailJS is not available'));
    }

    const templateParams = {
      to_email: 'subodhbhandari4@gmail.com',
      from_name: emailData.name,
      from_email: emailData.email,
      subject: emailData.subject || 'Portfolio Contact Form',
      message: emailData.message,
      // Simple logo URL - you can update this later
      logo_url: 'https://via.placeholder.com/200x60/667eea/ffffff?text=SB+Portfolio'
    };

    return from(emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, templateParams)).pipe(
      map((response: any) => {
        console.log('Email sent successfully:', response);
        return response;
      }),
      catchError((error: any) => {
        console.error('Email sending failed:', error);
        return throwError(() => new Error(this.getErrorMessage(error)));
      })
    );
  }

  private getErrorMessage(error: any): string {
    if (error.status === 0) {
      return 'Network error. Please check your internet connection.';
    } else if (error.status === 400) {
      return 'Invalid email data. Please check your input.';
    } else if (error.status === 429) {
      return 'Too many requests. Please try again later.';
    } else if (error.status >= 500) {
      return 'Server error. Please try again later.';
    } else {
      return 'Failed to send email. Please try again.';
    }
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  isEmailJSAvailable(): boolean {
    return typeof emailjs !== 'undefined';
  }
}
