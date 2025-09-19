import { Product } from './../../models/product';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ElmentScale } from '../../Directives/elment-scale';
import { TruncatePipe } from '../../Pipes/truncate-pipe';
import { CartService } from '../../Service/cart-service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../Service/product-service';
import { Button1Style } from '../../Directives/button1-style';

@Component({
  selector: 'app-product-cards',
  imports: [CommonModule, ElmentScale, TruncatePipe, FormsModule, Button1Style],
  templateUrl: './product-cards.html',
  styleUrl: './product-cards.css'
})
export class ProductCards {
  
  @Input() products: Product[] = [];

  favoriteProducts: number[] = [];

  constructor(private cartService: CartService, public router: Router, private productService: ProductService) { 
  }

  ngOnInit() {
    // If no products are passed as input, get all products
    if (!this.products || this.products.length === 0) {
      this.products = this.productService.getProducts();
    }
  }

  isFavorite(productId: number): boolean {
    return this.favoriteProducts.includes(productId);
  }

  toggleFavorite(productId: number): void {
    if (this.isFavorite(productId)) {
      this.favoriteProducts = this.favoriteProducts.filter(id => id !== productId);
    } else {
      this.favoriteProducts.push(productId);
    }
  }

  goToDetails(id: number) {
    this.router.navigate(['/product', id]);
  }

  addToCart(product: Product) {
    const item = {
      ...product,
      image: product.images[0],
      qty: 1
    };
    this.cartService.addItem(item);
  }

}
