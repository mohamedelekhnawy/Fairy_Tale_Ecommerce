import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    // Crystal Bags
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
      id: 15,
      name: 'Black Crystal Bag (Style 2)',
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
    },
    
    // Pearl Bags
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
      name: 'Multi-color Pearl Bag (Style 1)',
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
      name: 'Multi-color Pearl Bag (Style 2)',
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
      price: 250,
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
      name: 'White Pearl Bag (Style 1)',
      price: 305,
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
      name: 'White Pearl Bag (Style 2)',
      price: 600,
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
      name: 'White Pearl Bag (Style 3)',
      price: 400,
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
      name: 'White Pearl Bag (Style 4)',
      price: 180,
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
      price: 150,
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
    
    // Additional Bags (from Home component)
    {
      id: 101,
      name: 'Elegant Tote Bag',
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
      name: 'Urban Backpack',
      price: 120,
      images: ['assets/images/7.jpg'],
      material: 'Fabric',
      color: 'Green',
      description: 'Urban backpack combining functionality with handcrafted beauty.'
    }
  ];

  // Add the missing favorites property
  private favorites: Product[] = [];

  constructor() { }

  // Get all products
  getProducts(): Product[] {
    return this.products;
  }

  // Get product by ID
  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  // Get products by material
  getProductsByMaterial(material: string): Product[] {
    return this.products.filter(p => p.material.toLowerCase() === material.toLowerCase());
  }

  // Get products by color
  getProductsByColor(color: string): Product[] {
    return this.products.filter(p => p.color.toLowerCase() === color.toLowerCase());
  }

  // Get products by price range
  getProductsByPriceRange(minPrice: number, maxPrice: number): Product[] {
    return this.products.filter(p => p.price >= minPrice && p.price <= maxPrice);
  }

  // Search products by name
  searchProducts(searchTerm: string): Product[] {
    return this.products.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // Get featured/best seller products
  getFeaturedProducts(count: number = 4): Product[] {
    return this.products.slice(0, count);
  }

  // Get random products (for recommendations)
  getRandomProducts(count: number = 4, excludeId?: number): Product[] {
    let availableProducts = this.products;
    if (excludeId) {
      availableProducts = this.products.filter(p => p.id !== excludeId);
    }
    
    const shuffled = [...availableProducts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  // Get related products by material
  getRelatedProducts(productId: number, count: number = 4): Product[] {
    const currentProduct = this.getProductById(productId);
    if (!currentProduct) return [];
    
    return this.products
      .filter(p => p.material === currentProduct.material && p.id !== productId)
      .slice(0, count);
  }

  // Get all unique materials
  getUniqueMaterials(): string[] {
    return [...new Set(this.products.map(p => p.material))];
  }

  // Get all unique colors
  getUniqueColors(): string[] {
    return [...new Set(this.products.map(p => p.color))];
  }

  // Get product count
  getProductCount(): number {
    return this.products.length;
  }

  // Favorite management methods (moved inside the class)
  toggleFavorite(product: Product): void {
    const index = this.favorites.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    } else {
      this.favorites.push(product);
    }
  }

  isFavorite(id: number): boolean {
    return this.favorites.some(p => p.id === id);
  }

  getFavorites(): Product[] {
    return this.favorites;
  }
}