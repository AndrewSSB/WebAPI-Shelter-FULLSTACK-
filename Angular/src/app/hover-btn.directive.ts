import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverBtn]'
})
export class HoverBtnDirective {

  constructor(
    public el: ElementRef,
  ) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('#345B63');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
