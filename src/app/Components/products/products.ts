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
  standalone: true,
  imports: [SideBar, ProductCards, CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
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
    // 1) تحميل كل المنتجات من الـ Service
    this.allProducts = this.productService.getProducts();
    this.filteredProducts = [...this.allProducts];

    // 2) فلترة الكاتيجوري من الـ queryParams
    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        this.applyCategoryFilter(params['category']);
      }
    });
  }

  /** فلترة حسب كاتيجوري من الـ Route */
  applyCategoryFilter(category: string) {
    const cat = category.toLowerCase();
    this.filteredProducts = this.allProducts.filter(p => {
      if (cat === 'tote') return p.name.toLowerCase().includes('tote');
      if (cat === 'clutch') return p.name.toLowerCase().includes('clutch');
      if (cat === 'shoulder') return p.name.toLowerCase().includes('shoulder');
      if (cat === 'crystal') return p.material.toLowerCase() === 'crystal';
      if (cat === 'pearl') return p.material.toLowerCase() === 'pearl';
      return true;
    });
  }

  /** استقبال الفلاتر من الـ SideBar */
  onFiltersChanged(filters: ProductFilter) {
    this.currentFilters = filters;
    this.applyFilters();
  }

  /** تطبيق كل الفلاتر */
  applyFilters() {
    this.filteredProducts = this.allProducts.filter(product => {
      // السعر
      if (product.price < this.currentFilters.priceMin ||
          product.price > this.currentFilters.priceMax) return false;

      // اللون
      if (this.currentFilters.selectedColors.length &&
          !this.currentFilters.selectedColors.includes(product.color)) return false;

      // الخامة
      if (this.currentFilters.selectedMaterials.length &&
          !this.currentFilters.selectedMaterials.includes(product.material)) return false;

      // الستايل
      if (this.currentFilters.selectedStyles.length) {
        const matchesStyle = this.currentFilters.selectedStyles.some((style: string) => {
          switch (style) {
            case 'Tote Bags': return product.name.toLowerCase().includes('tote');
            case 'Crossbody': return product.name.toLowerCase().includes('crossbody');
            case 'Clutch':    return product.name.toLowerCase().includes('clutch');
            case 'Backpack':  return product.name.toLowerCase().includes('backpack');
            default: return true;
          }
        });
        if (!matchesStyle) return false;
      }

      return true;
    });
  }

  /** عدد المنتجات بعد الفلترة */
  get productCount(): number {
    return this.filteredProducts.length;
  }
}
