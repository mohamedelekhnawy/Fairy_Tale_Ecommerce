import { Product } from './../../models/product';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ElmentScale } from '../../Directives/elment-scale';
import { TruncatePipe } from '../../Pipes/truncate-pipe';
import { CartService } from '../../Service/cart-service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../Service/product-service';
import { Button1Style } from '../../Directives/button1-style';

@Component({
  selector: 'app-product-cards',
  standalone: true,
  imports: [
    CommonModule,
    ElmentScale,
    TruncatePipe,
    FormsModule,
    Button1Style
  ],
  templateUrl: './product-cards.html',
  styleUrls: ['./product-cards.css']
})
export class ProductCards {

  products: Product[] = [];

  // favorite local array (هنجيبها من localStorage)
  favoriteProducts: number[] = [];

  constructor(
    private cartService: CartService,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();

    // تحميل الفيفورت من localStorage لو موجود
    const storedFavs = localStorage.getItem('favorites');
    if (storedFavs) {
      this.favoriteProducts = JSON.parse(storedFavs);
    }
  }

  // Navigate to product details
  goToDetails(id: number) {
    this.router.navigate(['/product', id]);
  }

  // Add to Cart
  addToCart(product: Product) {
    const item = {
      ...product,
      image: product.images[0],
      qty: 1
    };
    this.cartService.addItem(item);
  }

  // Favorite Handling
  isFavorite(productId: number): boolean {
    return this.favoriteProducts.includes(productId);
  }

  toggleFavorite(productId: number): void {
    if (this.isFavorite(productId)) {
      this.favoriteProducts = this.favoriteProducts.filter(id => id !== productId);
    } else {
      this.favoriteProducts.push(productId);
    }

    // تحديث البيانات في localStorage
    localStorage.setItem('favorites', JSON.stringify(this.favoriteProducts));
  }

  // الانتقال لصفحة Favorites
  goToFavorites(): void {
    this.router.navigate(['/favorites']);
  }
}
