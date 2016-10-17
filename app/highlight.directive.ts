import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({ selector: '[highlight]' })
// highlight the thing in lightgrey
export class HighlightDirective {
  constructor(renderer: Renderer, el: ElementRef) {
    renderer.setElementStyle(
      el.nativeElement, 'backgroundColor', 'lightgrey');
    renderer.setElementStyle(
      el.nativeElement, 'text-align', 'center');
    console.log(`* AppRoot highlight called for ${el.nativeElement.tagName}`);
  }
}
