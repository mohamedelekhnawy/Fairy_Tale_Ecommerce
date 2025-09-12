import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './Components/products/products';
import { Register } from './auth/register/register';
import { SignInComponent } from './auth/sign-in/sign-in';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Products , Register , SignInComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fairy-tale');
}
