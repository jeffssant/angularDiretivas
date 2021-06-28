import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ErrMsg]'
})
export class ErrMsgDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red';

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setColor()
  }

  setColor() {
    this.htmlElement.nativeElement.style.color = this.color;
  }

}
