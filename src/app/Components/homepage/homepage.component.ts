import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  heroHover: boolean = false;

  toteHover: boolean = false;
  clutchHover: boolean = false;
  shoulderHover: boolean = false;

  productHover: { [key: number]: boolean } = {};

  craftsmanshipHover: boolean = false;

  customerHover: { [key: number]: boolean } = {};

  discoverHover: boolean = false;
}
