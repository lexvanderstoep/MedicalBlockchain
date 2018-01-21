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
  selector: 'app-patient-overview',
  templateUrl: './patient-overview.component.html',
  styleUrls: ['./patient-overview.component.scss']
})
export class PatientOverviewComponent implements OnInit {
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
       window.alert(this.getFile());
       this.getForm.reset(); // reset the form
     }
  }

  getFile()
  {
    let fileUrl = "http://159.65.18.33:5000/get/" + this.getForm.value.key;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", fileUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
    }

}
