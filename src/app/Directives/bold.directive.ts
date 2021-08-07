import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[MyBold]'
})
export class BoldDirective {

  constructor(private element : ElementRef , private render : Renderer2) {
    // element.nativeElement.style.color = "blue";
    render.setStyle(element.nativeElement,"color","blue");
   }

}
