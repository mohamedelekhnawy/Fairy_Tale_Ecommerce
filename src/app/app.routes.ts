import { Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in';
import { Register } from './auth/register/register';

export const routes: Routes = [
  { path: 'login', component: SignInComponent },
  { path: 'register', component: Register },
];
