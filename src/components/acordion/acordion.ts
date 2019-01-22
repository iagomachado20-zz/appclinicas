import { Component, Input, ViewChild, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'acordion',
  templateUrl: 'acordion.html'
})
export class AcordionComponent {

  @ViewChild('expandWrapper', {read: ElementRef}) expandWrapper;
  @Input('expanded') expanded;
  @Input('expandHeight') expandHeight;

  constructor(public renderer: Renderer) {
  }

}
