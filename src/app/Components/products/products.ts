import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SideBar } from '../side-bar/side-bar';
import { ProductCards } from '../product-cards/product-cards';
import { ElmentScale } from '../../Directives/elment-scale';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductFilter } from '../../models/product-filter';
import { ProductService } from '../../Service/product-service';

@Component({
  selector: 'app-products',
  imports: [SideBar, ProductCards, CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  currentFilters: ProductFilter = {
    priceMin: 50,
    priceMax: 5000,
    selectedColors: [],
    selectedMaterials: [],
    selectedStyles: []
  };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Get all products from service
    this.allProducts = this.productService.getProducts();
    this.filteredProducts = [...this.allProducts];

    // Check for category filter from route
    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        this.applyCategoryFilter(params['category']);
      }
    });
  }

  applyCategoryFilter(category: string) {
    switch(category.toLowerCase()) {
      case 'tote':
        this.filteredProducts = this.allProducts.filter(p => 
          p.name.toLowerCase().includes('tote'));
        break;
      case 'clutch':
        this.filteredProducts = this.allProducts.filter(p => 
          p.name.toLowerCase().includes('clutch'));
        break;
      case 'shoulder':
        this.filteredProducts = this.allProducts.filter(p => 
          p.name.toLowerCase().includes('shoulder'));
        break;
      case 'crystal':
        this.filteredProducts = this.allProducts.filter(p => 
          p.material.toLowerCase() === 'crystal');
        break;
      case 'pearl':
        this.filteredProducts = this.allProducts.filter(p => 
          p.material.toLowerCase() === 'pearl');
        break;
      default:
        this.filteredProducts = [...this.allProducts];
    }
  }

  onFiltersChanged(filters: ProductFilter) {
    this.currentFilters = filters;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredProducts = this.allProducts.filter(product => {
      // Price filter
      if (product.price < this.currentFilters.priceMin || 
          product.price > this.currentFilters.priceMax) {
        return false;
      }

      // Color filter
      if (this.currentFilters.selectedColors.length > 0 && 
          !this.currentFilters.selectedColors.includes(product.color)) {
        return false;
      }

      // Material filter
      if (this.currentFilters.selectedMaterials.length > 0 && 
          !this.currentFilters.selectedMaterials.includes(product.material)) {
        return false;
      }

      // Style filter
      if (this.currentFilters.selectedStyles.length > 0) {
        const productMatchesStyle = this.currentFilters.selectedStyles.some((style: string) => {
          switch(style) {
            case 'Tote Bags':
              return product.name.toLowerCase().includes('tote');
            case 'Crossbody':
              return product.name.toLowerCase().includes('crossbody');
            case 'Clutch':
              return product.name.toLowerCase().includes('clutch');
            case 'Backpack':
              return product.name.toLowerCase().includes('backpack');
            default:
              return true;
          }
        });
        if (!productMatchesStyle) {
          return false;
        }
      }

      return true;
    });
  }

  get productCount(): number {
    return this.filteredProducts.length;
  }
}