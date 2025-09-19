import { Component, EventEmitter, Output } from '@angular/core';
import { ProductFilter } from '../../models/product-filter';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './side-bar.html',
  styleUrls: ['./side-bar.css']
})
export class SideBar {

  filters: ProductFilter = {
    priceMin: 50,
    priceMax: 5000,
    selectedColors: [],
    selectedMaterials: [],
    selectedStyles: []
  };

  availableColors = [
    { name: 'Black', value: 'Black', color: '#000' },
    { name: 'Red', value: 'Red', color: '#dc3545' },
    { name: 'Blue', value: 'Blue', color: '#0d6efd' },
    { name: 'Brown', value: 'Brown', color: '#a0522d' },
    { name: 'White', value: 'White', color: '#fff' },
    { name: 'Multi-color', value: 'Multi-color', color: 'linear-gradient(45deg, #ff0000, #00ff00, #0000ff)' },
    { name: 'Silver', value: 'Silver', color: '#c0c0c0' },
    { name: 'Transparent', value: 'Transparent', color: 'rgba(255,255,255,0.3)' }
  ];

  availableMaterials = ['Crystal', 'Pearl', 'Leather', 'Fabric'];
  availableStyles = ['Tote Bags', 'Crossbody', 'Clutch', 'Backpack'];

  @Output() filtersChanged = new EventEmitter<ProductFilter>();

  ngOnInit() {
    // Emit initial filter state
    this.applyFilters();
  }

  onPriceChange(value: number) {
    this.filters.priceMax = value;
    this.applyFilters();
  }

  onColorChange(color: string, checked: boolean) {
    if (checked) {
      if (!this.filters.selectedColors.includes(color)) {
        this.filters.selectedColors.push(color);
      }
    } else {
      this.filters.selectedColors = this.filters.selectedColors.filter(c => c !== color);
    }
    this.applyFilters();
  }

  onMaterialChange(material: string, checked: boolean) {
    if (checked) {
      if (!this.filters.selectedMaterials.includes(material)) {
        this.filters.selectedMaterials.push(material);
      }
    } else {
      this.filters.selectedMaterials = this.filters.selectedMaterials.filter(m => m !== material);
    }
    this.applyFilters();
  }

  onStyleChange(style: string, checked: boolean) {
    if (checked) {
      if (!this.filters.selectedStyles.includes(style)) {
        this.filters.selectedStyles.push(style);
      }
    } else {
      this.filters.selectedStyles = this.filters.selectedStyles.filter(s => s !== style);
    }
    this.applyFilters();
  }

  isColorSelected(color: string): boolean {
    return this.filters.selectedColors.includes(color);
  }

  isMaterialSelected(material: string): boolean {
    return this.filters.selectedMaterials.includes(material);
  }

  isStyleSelected(style: string): boolean {
    return this.filters.selectedStyles.includes(style);
  }

  applyFilters() {
    this.filtersChanged.emit(this.filters);
  }

  clearFilters() {
    this.filters = {
      priceMin: 50,
      priceMax: 5000,
      selectedColors: [],
      selectedMaterials: [],
      selectedStyles: []
    };
    this.filtersChanged.emit(this.filters);
  }
}