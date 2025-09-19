import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButton2Style]'
})
export class Button2Style {

  private defaultColor: string = '#e07a8b';  
  private hoverColor: string = '#c65f72';     

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.setStyle(this.defaultColor);
  }

  private setStyle(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
    this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.el.nativeElement, 'transition', '0.3s ease-in-out');
    this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setStyle(this.hoverColor);
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.05)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setStyle(this.defaultColor);
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
  }

}
