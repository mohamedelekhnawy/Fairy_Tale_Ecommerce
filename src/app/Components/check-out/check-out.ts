import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../Service/cart-service';

@Component({
  selector: 'app-check-out',
  standalone: true,
  templateUrl: './check-out.html',
  styleUrls: ['./check-out.css'],
  imports: [CommonModule, FormsModule, CurrencyPipe]
})
export class CheckOut implements OnInit {
  billingDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  };

  states = [
    { code: 'CA', name: 'California' },
    { code: 'NY', name: 'New York' },
    { code: 'TX', name: 'Texas' },
    { code: 'FL', name: 'Florida' }
  ];

  selectedPayment: string = 'credit';

  orderItems: any[] = [];
  subtotal: number = 0;
  tax: number = 0;
  shipping: number = 0;
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.orderItems = this.cartService.getItems();
    this.calculateTotals();
  }

  calculateTotals(): void {
    this.subtotal = this.orderItems.reduce(
      (sum, item) => sum + (item.price * item.qty),
      0
    );
    this.tax = +(this.subtotal * 0.08).toFixed(2); // 8% tax
    this.shipping = this.subtotal > 0 ? 10 : 0; // flat shipping = 10$
    this.total = this.subtotal + this.tax + this.shipping;
  }

  selectPayment(method: string): void {
    this.selectedPayment = method;
  }

  placeOrder(): void {
    if (this.orderItems.length === 0) {
      alert('Your cart is empty. Please add items first.');
      return;
    }

    console.log('Order placed:', {
      billingDetails: this.billingDetails,
      payment: this.selectedPayment,
      items: this.orderItems,
      total: this.total
    });

    alert('✅ Order placed successfully!');

    // بعد إتمام الطلب امسح الكارت
    this.cartService.clearCart();
    this.orderItems = [];
    this.calculateTotals();
    
    // Navigate back to home page after successful order
    this.router.navigate(['/Home']);
  }

  backToCart(): void {
    this.router.navigate(['/Cart']);
  }
}
