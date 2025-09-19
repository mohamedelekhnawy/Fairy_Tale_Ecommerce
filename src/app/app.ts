import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Register } from './auth/register/register';
import { Navbar } from './Components/navbar/navbar';
import { Footer } from './Components/footer/footer';
import { Cart } from './Components/cart/cart';
import { CheckOut } from './Components/check-out/check-out';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fairy-tale');
}
