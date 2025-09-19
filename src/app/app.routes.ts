import { Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in';
import { Register } from './auth/register/register';
import { Products } from './Components/products/products';
import { Cart } from './Components/cart/cart';
import { CheckOut } from './Components/check-out/check-out';
import { AboutComponent } from './Components/about/about';
import { ContactComponent } from './Components/contact/contact';
import { ProductDetails } from './Components/product-details/product-details';
import { Home } from './Components/home/home';

export const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component:Home },
  { path: 'Login', component: SignInComponent },
  { path: 'Register', component: Register },
  { path: 'Products', component: Products },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Cart', component: Cart },
  { path: 'CheckOut', component: CheckOut },
  { path: 'product/:id', component: ProductDetails }
];
