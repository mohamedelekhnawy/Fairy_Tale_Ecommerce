import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductService } from '../../Service/product-service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.html',
  styleUrls: ['./favorites.css']
})
export class FavoritesComponent {
  favorites: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // هجيب IDs المخزنة في localStorage
    const storedFavs = localStorage.getItem('favorites');
    if (storedFavs) {
      const favIds: number[] = JSON.parse(storedFavs);
      // أجيب تفاصيل البرودكتس من ProductService
      this.favorites = this.productService
        .getProducts()
        .filter(p => favIds.includes(p.id));
    }
  }

  remove(productId: number): void {
    // شيل البرودكت من المصفوفة
    this.favorites = this.favorites.filter(p => p.id !== productId);

    // حدث الـ localStorage
    const storedFavs = localStorage.getItem('favorites');
    if (storedFavs) {
      let favIds: number[] = JSON.parse(storedFavs);
      favIds = favIds.filter(id => id !== productId);
      localStorage.setItem('favorites', JSON.stringify(favIds));
    }
  }
}
