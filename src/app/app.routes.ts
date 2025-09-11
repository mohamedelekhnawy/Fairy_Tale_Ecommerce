import { Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in';
import { Register } from './auth/register/register';
import { Products } from './Components/products/products';

export const routes: Routes = [
  
  { path: 'Login', component: SignInComponent },
  { path: 'Register', component: Register },
  { path: 'Products', component: Products },
];
