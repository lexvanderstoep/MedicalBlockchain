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
  selector: 'app-push-patient',
  templateUrl: './push-patient.component.html',
  styleUrls: ['./push-patient.component.scss']
})
export class PushPatientComponent implements OnInit {
  pushForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.pushForm = new FormGroup({
      first_name: new FormControl(),
      last_name: new FormControl(),
      dob: new FormControl(),
      address: new FormControl(),
    });
  }

}
