import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface ProductFilter {
  priceMin: number;
  priceMax: number;
  selectedColors: string[];
  selectedMaterials: string[];
  selectedStyles: string[];
}

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

  @Output() filtersChanged = new EventEmitter<ProductFilter>();

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
