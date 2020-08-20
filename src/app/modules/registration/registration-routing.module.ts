import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { PatientComponent } from './components/patient/patient.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
    children: [
      { path: '', redirectTo: 'doctor', pathMatch: 'full' },
      { path: 'doctor', component: DoctorComponent },
      { path: 'patient', component: PatientComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
