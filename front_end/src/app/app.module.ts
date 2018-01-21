import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
// import { GetDataComponent } from './get-data/get-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PushDataComponent } from './push-data/push-data.component';

import { PatientDataService } from './patient-data.service';
import { PushPatientComponent } from './push-patient/push-patient.component';
import { DiagnosisDetailComponent } from './diagnosis-detail/diagnosis-detail.component';
// import { PatientOverviewComponent } from './patient-overview/patient-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PatientDetailsComponent,
    PushDataComponent,
    PushPatientComponent,
    DiagnosisDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [PatientDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
