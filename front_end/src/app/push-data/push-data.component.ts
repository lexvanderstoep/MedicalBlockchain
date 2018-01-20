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
       window.alert(this.pushFile());
       this.pushForm.reset(); // reset the form
     }
  }
  
  pushFile()
  {
    let fileUrl = "http://159.65.18.33:5000/push";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", fileUrl, false ); // false for synchronous request
    xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlHttp.send("data=" + encodeURI(this.pushForm.value.key));
    return xmlHttp.responseText;
    }

}
