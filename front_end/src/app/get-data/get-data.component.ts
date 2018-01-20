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
       window.alert(this.getFile());
       this.getForm.reset(); // reset the form
     }
  }
  
  getFile()
  {
    let fileUrl = "http://" + location.hostname + ":5000/get/" + this.getForm.value.key;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", fileUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
    }

}
