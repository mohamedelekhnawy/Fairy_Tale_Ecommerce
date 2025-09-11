import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appElmentScale]'
})
export class ElmentScale {

  constructor(private el:ElementRef) {
    this.el.nativeElement.style.transition = 'all 0.2s ease-in-out';
  }
  @HostListener('mouseenter') onmousEente(){
    this.el.nativeElement.style.transform = 'scale(1.05)';
    this.el.nativeElement.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.transform = 'scale(1)';
    this.el.nativeElement.style.boxShadow = '0 4px 10px rgba(0,0,0,0.05)';
  }
}
