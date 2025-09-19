import { Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in';
import { Register } from './auth/register/register';
import { Products } from './Components/products/products';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { ProductDetails } from './Components/product-details/product-details';
import { ContactComponent } from './Components/contact/contact';
import { AboutComponent } from './Components/about/about';
import { Cart } from './Components/cart/cart';
import { CheckOut } from './Components/check-out/check-out';

export const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component:HomepageComponent },
  { path: 'Login', component: SignInComponent },
  { path: 'Register', component: Register },
  { path: 'Products', component: Products },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Cart', component: Cart },
  { path: 'CheckOut', component: CheckOut },
  { path: 'product/:id', component: ProductDetails }
];
