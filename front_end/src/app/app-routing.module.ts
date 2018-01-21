import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { PatientOverviewComponent } from './patient-overview/patient-overview.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PushDataComponent } from './push-data/push-data.component';
import { DiagnosisDetailComponent } from './diagnosis-detail/diagnosis-detail.component';
import { PushPatientComponent } from './push-patient/push-patient.component';


const routes: Routes = [
  { path: "", redirectTo: '/dashboard', pathMatch: 'full' },
  { path: "dashboard",                   component: DashboardComponent },
  { path: "add",                         component: PushPatientComponent },
  { path: "patient/:id",                 component: PatientDetailsComponent },
  { path: "patient/:id/diagnosis/:d_id", component: DiagnosisDetailComponent },
  { path: "patient/:id/push",            component: PushDataComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
