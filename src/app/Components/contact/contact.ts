import { Component } from '@angular/core';
import { FaqComponent } from '../faq/faq';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Button1Style } from '../../Directives/button1-style';
import { Button2Style } from '../../Directives/button2-style';
import { ElmentScale } from '../../Directives/elment-scale';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, Button1Style, Button2Style, ElmentScale,FaqComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor() { }

  onSubmit() {
    if (this.contactForm.name && this.contactForm.email && this.contactForm.message) {
      // Handle form submission here
      console.log('Contact form submitted:', this.contactForm);
      alert('Thank you for your message! We will get back to you soon.');
      this.resetForm();
    } else {
      alert('Please fill in all required fields.');
    }
  }

  resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
