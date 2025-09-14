import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './Components/products/products';
import { Register } from './auth/register/register';
import { SignInComponent } from './auth/sign-in/sign-in';
import { HomepageComponent } from './Components/homepage/homepage.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Products , Register , SignInComponent, HomepageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fairy-tale');
}
