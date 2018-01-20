import { Component, OnInit } from '@angular/core';
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-push-data',
  templateUrl: './push-data.component.html',
  styleUrls: ['./push-data.component.scss']
})
export class PushDataComponent implements OnInit {
  pushForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.pushForm = new FormGroup({
      key: new FormControl()
    });
  }

  onSubmit() {
    // rewrite this function
    if (this.pushForm.valid) {
       console.log("Form Submitted!", this.pushForm.value);
       this.pushForm.reset(); // reset the form
     }
  }

}
