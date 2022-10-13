import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight = ''
  @Input() colore = ''

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.color = "black"
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = this.appHighlight
    this.element.nativeElement.style.color = this.colore
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'transparent'
    this.element.nativeElement.style.color = "black"
  }

}
