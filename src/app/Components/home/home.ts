import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ElmentScale } from '../../Directives/elment-scale';
import { Button1Style } from '../../Directives/button1-style';
import { Button2Style } from '../../Directives/button2-style';
import { CartService } from '../../Service/cart-service';
import { ProductService } from '../../Service/product-service';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule, ElmentScale, Button1Style, Button2Style],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  // Sample products for homepage
  bestSellers = [
    {
      id: 8,
      name: 'Wooden Pearl Bag',
      price: 120,
      images: ['assets/images/4.jpg'],
      material: 'Leather',
      color: 'Brown',
      description: 'Elegant handmade tote bag, perfect for daily use with timeless style.'
    },
    {
      id: 102,
      name: 'Classic Handbag',
      price: 120,
      images: ['assets/images/5.jpg'],
      material: 'Crystal',
      color: 'Black',
      description: 'Classic handmade handbag with sophisticated design for special occasions.'
    },
    {
      id: 103,
      name: 'Modern Crossbody',
      price: 120,
      images: ['assets/images/9.jpg'],
      material: 'Pearl',
      color: 'Multi-color',
      description: 'Modern crossbody bag with contemporary style for everyday elegance.'
    },
    {
      id: 104,
      name: 'Red Crystal Bag',
      price: 120,
      images: ['assets/images/7.jpg'],
      material: 'Fabric',
      color: 'Green',
      description: 'Urban backpack combining functionality with handcrafted beauty.'
    }
  ];

  constructor(
    private cartService: CartService,
    private router: Router,
    private productService: ProductService
  ) { }

  addToCart(product: any) {
    const item = {
      ...product,
      image: product.images[0],
      qty: 1
    };
    this.cartService.addItem(item);

    // Optional: Show success message
    alert(`${product.name} added to cart!`);
  }

  // Navigate to product details
  navigateToProductDetails(productId: number) {
    this.router.navigate(['/product', productId]);
  }

  // Navigate to category products
  navigateToCategory(category: string) {
    this.router.navigate(['/products'], { queryParams: { category: category } });
  }
}