import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent {

  miform: FormGroup = this.fb.group({
    name: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ValidErrors(input: string): boolean{
    return this.miform.get(input)?.invalid || false;
  }
}
