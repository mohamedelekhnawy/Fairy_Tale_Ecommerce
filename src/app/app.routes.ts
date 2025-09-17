import { Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in';
import { Register } from './auth/register/register';
import { Products } from './Components/products/products';
import { HomepageComponent } from './Components/homepage/homepage.component';

export const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component:HomepageComponent },
  { path: 'Login', component: SignInComponent },
  { path: 'Register', component: Register },
  { path: 'Products', component: Products },
];
