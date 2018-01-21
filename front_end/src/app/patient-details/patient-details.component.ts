import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PatientDataService } from '../patient-data.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {
  patientId: any;
  patientDetails: any = [];
  patientDiagnosisNo: any = '';
  patientDiagnosis: any = [];

  constructor(private patientData: PatientDataService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit():void {
    this.getPatientId();
    this.getPatientDetails(this.patientId);
  }

  getPatientId(): any {
    this.patientId = this.route.snapshot.paramMap.get('id');
  }

  getPatientDetails(id): void {
    this.patientData.getJSON().subscribe(data => {
      this.patientDetails = data.entry[1].resource;
      this.patientDiagnosisNo = data.entry[3].resource.diagnosis.length;

      for(let i = 0; i < this.patientDiagnosisNo; i++) {
        this.patientDiagnosis.push({
          name: data.entry[i+4].resource.code.text,
          date: data.entry[i+4].resource.assertedDate
        });
      }

     });
  }

}
