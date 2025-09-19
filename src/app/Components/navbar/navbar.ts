import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../Service/cart-service';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar implements OnInit {
  cartCount: number = 0;
  favoritesCount: number = 0;
  isOnFavoritesPage: boolean = false;

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Subscribe to cart count changes
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });

    // Track current route to check if we're on favorites page
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isOnFavoritesPage = event.url === '/Favorites' || event.url === '/favorites';
    });

    // Load and track favorites count from localStorage
    this.loadFavoritesCount();
    
    // Listen for localStorage changes (when favorites are updated)
    window.addEventListener('storage', (e) => {
      if (e.key === 'favorites') {
        this.loadFavoritesCount();
      }
    });

    // Check for favorites updates every few seconds (alternative approach)
    setInterval(() => {
      this.loadFavoritesCount();
    }, 1000);
  }

  private loadFavoritesCount(): void {
    try {
      const storedFavs = localStorage.getItem('favorites');
      if (storedFavs) {
        const favorites = JSON.parse(storedFavs);
        this.favoritesCount = favorites.length;
      } else {
        this.favoritesCount = 0;
      }
    } catch (error) {
      console.error('Error loading favorites count:', error);
      this.favoritesCount = 0;
    }
  }

  // Method to navigate to favorites
  goToFavorites(): void {
    this.router.navigate(['/Favorites']);
  }

  // Getter to determine if heart should be colored
  get shouldColorHeart(): boolean {
    return this.isOnFavoritesPage || this.favoritesCount > 0;
  }
}