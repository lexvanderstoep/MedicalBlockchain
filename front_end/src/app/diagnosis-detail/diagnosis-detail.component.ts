import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PatientDataService } from '../patient-data.service';


@Component({
  selector: 'app-diagnosis-detail',
  templateUrl: './diagnosis-detail.component.html',
  styleUrls: ['./diagnosis-detail.component.scss']
})
export class DiagnosisDetailComponent implements OnInit {
  patientId;
  diagnosisId;
  diagnosis;
  diagnosisData;

  constructor(private patientData: PatientDataService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getPatientId();
    this.getDiagnosisId();
    this.getData();
  }

  getPatientId(): any {
    this.patientId = this.route.snapshot.paramMap.get('id');
  }

  getDiagnosisId(): any {
    this.diagnosisId = this.route.snapshot.paramMap.get('d_id');
  }

  getData() {
    this.patientData.getJSON().then(data => {
      let id = parseInt(this.diagnosisId) + 4;
      this.diagnosis = data.entry[id].resource.code.text;
    });
  }

}
