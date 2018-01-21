import { Component, OnInit } from '@angular/core';

import { PatientDataService } from '../patient-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  patients = [];

  constructor(private patientData: PatientDataService) { }

  ngOnInit(): void {
    this.getPatientId();
  }

  getPatientId() {
    this.patientData.getJSON().subscribe(data => {
      console.log(data.entry[1].resource.identifier["0"].value);
      this.patients.push({
        id: data.entry[1].resource.identifier["0"].value,
        surname: data.entry[1].resource.name["0"].family.slice(0, -3),
        firstname: data.entry[1].resource.name["0"].given["0"].slice(0, -3)
      });
    });
  }

}
