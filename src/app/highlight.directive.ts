import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef) {
    console.log("ssss")
    el.nativeElement.style.backgroundColor = 'red';
  }

}
