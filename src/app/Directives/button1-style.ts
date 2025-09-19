import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButton1Style]'
})
export class Button1Style {

    constructor(private el: ElementRef, private renderer: Renderer2) {
   
    this.renderer.setStyle(this.el.nativeElement, 'transition', '0.3s ease-in-out');
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#9b4d63');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
  }


  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#7d3c50'); 
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.02)');
  }


  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#9b4d63'); 
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
  }


}
