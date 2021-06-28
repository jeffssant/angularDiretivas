import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrMsgDirective } from './directives/err-msg.directive';
import { CustomDirective } from './directives/custom.directive';



@NgModule({
  declarations: [
    ErrMsgDirective,
    CustomDirective
  ],
  exports: [
    ErrMsgDirective,
    CustomDirective
  ]
})
export class SharedModule { }
