import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ErrMsg]'
})
export class ErrMsgDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>;
  private _color:string = 'red';
  private _msg:string = 'new Msg';

  @Input() set color(value: string){
    this._color = value;
    this.setColor();
  }

  @Input() set msg(value: string){
    this._msg = value;
    this.setMsg();
  }

  @Input() set valid(value: boolean){

    if(!value){
      this.htmlElement.nativeElement.classList.add('d-none');
      return;
    }

    this.htmlElement.nativeElement.classList.remove('d-none');

  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMsg()
  }

  setColor() {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMsg(){
    this.htmlElement.nativeElement.innerText = this._msg;
  }

}
