import { Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in';
import { Register } from './auth/register/register';
import { Products } from './Components/products/products';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { ProductDetails } from './Components/product-details/product-details';

export const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component:HomepageComponent },
  { path: 'Login', component: SignInComponent },
  { path: 'Register', component: Register },
  { path: 'Products', component: Products },
  { path: 'product/:id', component: ProductDetails }
];
