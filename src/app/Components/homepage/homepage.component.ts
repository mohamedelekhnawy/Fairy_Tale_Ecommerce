import { Component } from '@angular/core';
import { ElmentScale } from '../../Directives/elment-scale';
import { Button1Style } from '../../Directives/button1-style';
import { Button2Style } from '../../Directives/button2-style';

@Component({
  selector: 'app-homepage',
  imports: [ElmentScale,Button1Style,Button2Style],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
