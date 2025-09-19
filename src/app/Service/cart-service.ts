import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartCount = new BehaviorSubject<number>(0);

  cartCount$ = this.cartCount.asObservable();

  constructor() {
    // أول ما الخدمة تشتغل، اقرأ من localStorage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cartItems = JSON.parse(storedCart);
      this.cartCount.next(this.cartItems.length);
    }
  }

  getItems() {
    return this.cartItems;
  }

  addItem(item: any) {
    const existingItem = this.cartItems.find(i => i.id === item.id);

    if (existingItem) {
      existingItem.qty += item.qty || 1; // زوّد الكمية
    } else {
      // لو أول مرة يضاف، نحطله qty = 1 لو مش متعرف
      this.cartItems.push({ ...item, qty: item.qty || 1 });
    }

    this.updateCart();
  }


  clearCart() {
    this.cartItems = [];
    this.updateCart();
  }
  removeItem(item: any) {
    this.cartItems = this.cartItems.filter(i => i !== item);
    this.updateCart();
  }

  updateItemQuantity(item: any, qty: number) {
    const found = this.cartItems.find(i => i === item);
    if (found) {
      found.qty = qty;
      this.updateCart();
    }
  }


  private updateCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.cartCount.next(this.cartItems.length);
  }
}
