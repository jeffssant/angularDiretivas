import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ErrMsg]'
})
export class ErrMsgDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red';
  @Input() msg: string = 'Required';

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setColor()
    this.setMsg();
  }

  setColor() {
    this.htmlElement.nativeElement.style.color = this.color;
  }

  setMsg(){
    this.htmlElement.nativeElement.innerText = this.msg;
  }

}
