import { Component, OnInit } from '@angular/core';

import { PatientDataService } from '../patient-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  patients = [];
  ids = [111111111, 111111121, 111111122, 111111123, 111111124, 111111125, 111111126, 111111127];

  constructor(private patientData: PatientDataService) { }

  ngOnInit(): void {
    this.getPatientIds();
  }

  getPatientIds() {
    for(let i = 0; i < this.ids.length; i++){
      this.patientData.getPatient(this.ids[i]).then(data => {
        this.patients.push({
        id: this.ids[i],
        surname: data.entry[1].resource.name["0"].family.slice(0, -3),
        firstname: data.entry[1].resource.name["0"].given["0"].slice(0, -3)
      });
    });
    }
  }

}
