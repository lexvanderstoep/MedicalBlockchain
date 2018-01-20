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
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit {
  getForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.getForm = new FormGroup({
      key: new FormControl()
    });
  }

  onSubmit() {
    // rewrite this function
    if (this.getForm.valid) {
       console.log("Form Submitted!", this.getForm.value);
       this.getForm.reset(); // reset the form
     }
  }

}
