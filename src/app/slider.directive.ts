import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSlider]'
})
export class SliderDirective {

  constructor(el: ElementRef) { }

}
