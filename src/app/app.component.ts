import { Component } from '@angular/core';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomepageComponent } from './Components/homepage/homepage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, HomepageComponent],
  template: `
    <app-navbar></app-navbar>
    <app-homepage></app-homepage>
    <app-footer></app-footer>
  `
})
export class AppComponent {}
