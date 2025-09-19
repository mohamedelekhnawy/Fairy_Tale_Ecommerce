import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrls: ['./faq.css']
})
export class FaqComponent {
  faqs: FaqItem[] = [
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 3-5 business days within the US. International shipping takes 7-14 days.',
      open: false
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for unused items in original condition. Custom or personalized items are non-refundable.',
      open: false
    },
    {
      question: 'How do I care for my handmade bag?',
      answer: 'Clean with a soft, damp cloth and mild soap. Avoid harsh chemicals and excessive water.',
      open: false
    },
    {
      question: 'Can I customize my bag?',
      answer: 'Yes! We offer personalization options including monogramming, color customization, and size adjustments.',
      open: false
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, Apple Pay, and Google Pay.',
      open: false
    },
    {
      question: 'Do you offer a warranty?',
      answer: 'All our bags come with a 1-year warranty against manufacturing defects.',
      open: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
