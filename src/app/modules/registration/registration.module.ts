import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { PatientComponent } from './components/patient/patient.component';


@NgModule({
  declarations: [RegistrationComponent, DoctorComponent, PatientComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }
