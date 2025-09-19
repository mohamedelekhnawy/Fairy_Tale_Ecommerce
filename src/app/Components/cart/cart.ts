import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../Service/cart-service';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.html',
  imports: [CommonModule, CurrencyPipe], // هنا ضفنا الـ CurrencyPipe
  styleUrls: ['./cart.css']
})
export class Cart implements OnInit {
  items: any[] = [];
  subtotal = 0;
  tax = 0;
  total = 0;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.calculateTotals();
  }

  calculateTotals() {
    this.subtotal = this.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
    this.tax = +(this.subtotal * 0.08).toFixed(2); // 8% tax
    this.total = this.subtotal + this.tax; // shipping free
  }

  increase(item: any) {
    item.qty++;
    this.cartService.updateItemQuantity(item, item.qty);
    this.calculateTotals();
  }

  decrease(item: any) {
    if (item.qty > 1) {
      item.qty--;
      this.cartService.updateItemQuantity(item, item.qty);
      this.calculateTotals();
    }
  }

  removeItem(item: any) {
    this.cartService.removeItem(item);
    this.items = this.cartService.getItems(); // تحديث الليستة
    this.calculateTotals();
  }

  getTotalItems(): number {
    return this.items.reduce((total, item) => total + item.qty, 0);
  }

  goToCheckout(): void {
    if (this.items.length === 0) {
      alert('Your cart is empty. Please add items before checkout.');
      return;
    }
    this.router.navigate(['/CheckOut']);
  }
}
