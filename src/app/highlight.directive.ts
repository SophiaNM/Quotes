import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.boxShadow='0 0 5px rgba(81, 203, 238, 1)';
    this.elem.nativeElement.style.background='rgba(81, 203, 238, 0.13)';
    this.elem.nativeElement.style.padding='5px';
   }

}
