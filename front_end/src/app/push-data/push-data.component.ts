import { Component, OnInit } from '@angular/core';
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PatientDataService } from '../patient-data.service';

@Component({
  selector: 'app-push-data',
  templateUrl: './push-data.component.html',
  styleUrls: ['./push-data.component.scss']
})
export class PushDataComponent implements OnInit {
  pushForm: FormGroup;
  patientId;

  constructor(private route: ActivatedRoute, private location: Location, private patientData: PatientDataService) { }

  ngOnInit() {
    this.getPatientId();
    this.pushForm = new FormGroup({
      diagnosis: new FormControl(),
      note: new FormControl()
    });
  }

  getPatientId(): any {
    this.patientId = this.route.snapshot.paramMap.get('id');
  }

  onSubmit() {
    this.patientData.postData(this.pushForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
