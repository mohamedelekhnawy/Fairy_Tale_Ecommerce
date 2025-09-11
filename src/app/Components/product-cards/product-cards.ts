import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ElmentScale } from '../../Directives/elment-scale';
import { TruncatePipe } from '../../Pipes/truncate-pipe';

interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  material:string;
  color:string;  
  description: string;
}

@Component({
  selector: 'app-product-cards',
  imports: [CommonModule,ElmentScale,TruncatePipe],
  templateUrl: './product-cards.html',
  styleUrl: './product-cards.css'
})
export class ProductCards {
  favoriteProducts: number[] = [];

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



  products: Product[] = [
  {
    id: 1,
    name: 'Black Crystal Bag',
    price: 120,
    images: [
      'assets/images/black-bag-s1-1.jpg',
      'assets/images/black-bag-s1-2.jpg',
      'assets/images/black-bag-s1-3.jpg',
      'assets/images/black-bag-s1-4.jpg',
      'assets/images/black-bag-s1-5.jpg'
    ],
    material: "Crystal",
    color: 'Black',
    description: 'Elegant handmade black crystal bag, perfect for evening outfits with a luxurious and bold style.'
  },
  {
    id: 2,
    name: 'Red Crystal Bag',
    price: 120,
    images: [
      'assets/images/red-bag-s1-1.jpg',
      'assets/images/red-bag-s1-2.jpg',
      'assets/images/red-bag-s1-3.jpg',
      'assets/images/red-bag-s1-4.jpg',
      'assets/images/red-bag-s1-5.jpg'
    ],
    material: "Crystal",
    color: 'Red',
    description: 'Handmade red crystal bag with a sparkling finish, ideal for parties and special celebrations.'
  },
  {
    id: 3,
    name: 'Blue Crystal Bag',
    price: 120,
    images: [
      'assets/images/blue-bag1.jpg',
      'assets/images/blue-bag2.jpg',
      'assets/images/blue-bag3.jpg',
      'assets/images/blue-bag4.jpg',
      'assets/images/blue-bag5.jpg'
    ],
    material: "Crystal",
    color: 'Blue',
    description: 'Stylish blue crystal bag, handmade with shimmering details. Great for evening looks and elegant occasions.'
  },
  {
    id: 4,
    name: 'Transparent Crystal Bag',
    price: 120,
    images: [
      'assets/images/blur-bag-s1-1.jpg',
      'assets/images/blur-bag-s1-2.jpg',
      'assets/images/blur-bag-s1-3.jpg',
      'assets/images/blur-bag-s1-4.jpg',
      'assets/images/blur-bag-s1-5.jpg'
    ],
    material: "Crystal",
    color: 'Transparent',
    description: 'Modern transparent crystal bag, chic and versatile. Perfect for evening events with a unique touch.'
  },
  {
    id: 5,
    name: 'Brown Pearl Bag',
    price: 120,
    images: [
      'assets/images/brown-bag-s1-1.jpg',
      'assets/images/brown-bag-s1-2.jpg',
      'assets/images/brown-bag-s1-3.jpg',
      'assets/images/brown-bag-s1-4.jpg',
      'assets/images/brown-bag-s1-5.jpg'
    ],
    material: "Pearl",
    color: 'Brown',
    description: 'Handmade brown pearl bag, timeless and classy. Ideal for formal events and elegant styling.'
  },
  {
    id: 6,
    name: 'Multi-color Pearl Bag',
    price: 120,
    images: [
      'assets/images/colored-bag-s1-1.jpg',
      'assets/images/colored-bag-s1-2.jpg',
      'assets/images/colored-bag-s1-3.jpg',
      'assets/images/colored-bag-s1-4.jpg',
      'assets/images/colored-bag-s1-5.jpg'
    ],
    material: "Pearl",
    color: 'Multi-color',
    description: 'Colorful pearl bag handmade with care, perfect for adding a playful and vibrant touch to your outfit.'
  },
  {
    id: 7,
    name: 'Multi-color Pearl Bag',
    price: 120,
    images: [
      'assets/images/colored-bag-s2-1.jpg',
      'assets/images/colored-bag-s2-2.jpg',
      'assets/images/colored-bag-s2-3.jpg',
      'assets/images/colored-bag-s2-4.jpg',
      'assets/images/colored-bag-s2-5.jpg'
    ],
    material: "Pearl",
    color: 'Multi-color',
    description: 'Unique handmade multi-color pearl bag, perfect for festive events and standout fashion looks.'
  },
  {
    id: 8,
    name: 'Wooden Pearl Bag',
    price: 120,
    images: [
      'assets/images/green-bag-s1-1.jpg',
      'assets/images/green-bag-s1-2.jpg',
      'assets/images/green-bag-s1-3.jpg'
    ],
    material: "Pearl",
    color: 'Wooden',
    description: 'Handmade wooden-style pearl bag, combining natural charm with delicate design. Great for casual chic looks.'
  },
  {
    id: 9,
    name: 'Silver Pearl Bag',
    price: 120,
    images: [
      'assets/images/selver-bag-s1-1.jpg',
      'assets/images/selver-bag-s1-2.jpg',
      'assets/images/selver-bag-s1-3.jpg',
      'assets/images/selver-bag-s1-4.jpg',
      'assets/images/selver-bag-s1-5.jpg'
    ],
    material: "Pearl",
    color: 'Silver',
    description: 'Shiny silver pearl bag, handmade with elegance. Perfect for evening parties and classy events.'
  },
  {
    id: 10,
    name: 'White Pearl Bag',
    price: 120,
    images: [
      'assets/images/white-bag-s1-1.jpg',
      'assets/images/white-bag-s1-2.jpg',
      'assets/images/white-bag-s1-3.jpg',
      'assets/images/white-bag-s1-4.jpg',
      'assets/images/white-bag-s1-5.jpg'
    ],
    material: "Pearl",
    color: 'White',
    description: 'Classic white pearl bag, handmade with timeless beauty. A must-have for weddings and special occasions.'
  },
  {
    id: 11,
    name: 'White Pearl Bag',
    price: 120,
    images: [
      'assets/images/white-bag-s2-1.jpg',
      'assets/images/white-bag-s2-2.jpg',
      'assets/images/white-bag-s2-3.jpg',
      'assets/images/white-bag-s2-4.jpg',
      'assets/images/white-bag-s2-5.jpg'
    ],
    material: "Pearl",
    color: 'White',
    description: 'Elegant handmade white pearl bag, delicate and chic. Perfect for formal looks and bridal outfits.'
  },
  {
    id: 12,
    name: 'White Pearl Bag',
    price: 120,
    images: [
      'assets/images/white-bag-s3-1.jpg',
      'assets/images/white-bag-s3-2.jpg',
      'assets/images/white-bag-s3-3.jpg',
      'assets/images/white-bag-s3-4.jpg',
      'assets/images/white-bag-s3-5.jpg'
    ],
    material: "Pearl",
    color: 'White',
    description: 'Handmade white pearl bag with a refined finish. A stylish choice for elegant evenings.'
  },
  {
    id: 13,
    name: 'White Pearl Bag',
    price: 120,
    images: [
      'assets/images/white-bag-s4-1.jpg',
      'assets/images/white-bag-s4-2.jpg',
      'assets/images/white-bag-s4-3.jpg',
      'assets/images/white-bag-s4-4.jpg',
      'assets/images/white-bag-s4-5.jpg'
    ],
    material: "Pearl",
    color: 'White',
    description: 'Delicate handmade white pearl bag, timeless and stylish. Perfect gift for special occasions.'
  },
  {
    id: 14,
    name: 'Transparent Bag with Print',
    price: 120,
    images: [
      'assets/images/withName-bag-s1-1.jpg',
      'assets/images/withName-bag-s1-2.jpg',
      'assets/images/withName-bag-s1-3.jpg',
      'assets/images/withName-bag-s1-4.jpg',
      'assets/images/withName-bag-s1-5.jpg'
    ],
    material: "Pearl",
    color: 'Transparent',
    description: 'Handmade transparent bag with printed details, modern and trendy. A chic accessory for standout looks.'
  },
    {  id: 15,
    name: 'Black Crystal Bag',
    price: 120,
    images: [
      'assets/images/black-bag-s2-1.jpg',
      'assets/images/black-bag-s2-2.jpg',
      'assets/images/black-bag-s2-3.jpg',
      'assets/images/black-bag-s2-4.jpg',
      'assets/images/black-bag-s2-5.jpg'
    ],
    material: "Crystal",
    color: 'Black',
    description: 'Elegant handmade black crystal bag, perfect for evening outfits with a luxurious and bold style.'
  }
];
}
