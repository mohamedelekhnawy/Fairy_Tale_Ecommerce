import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './Components/products/products';
import { Register } from './auth/register/register';
import { SignInComponent } from './auth/sign-in/sign-in';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { Navbar } from './Components/navbar/navbar';
import { Footer } from './Components/footer/footer';
import { Cart } from './Components/cart/cart';
import { CheckOut } from './Components/check-out/check-out';
import { FavoritesComponent } from './Components/favorites/favorites';
import { FaqComponent } from "./Components/faq/faq";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, FavoritesComponent, FaqComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fairy-tale');
}
