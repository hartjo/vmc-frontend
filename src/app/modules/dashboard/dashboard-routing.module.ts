import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { AdminComponent } from './components/admin/admin.component';
import { PatientComponent } from './components/patient/patient.component';
import { RouterGuardService } from '@shared/services/router-guard.service';
import { ManageScheduleComponent } from './components/doctor/components/manage-schedule/manage-schedule.component';
import { AppointmentComponent } from './components/patient/components/appointment/appointment.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'admin', component: AdminComponent },
      { path: 'doctors', component: DoctorComponent },
      { path: 'manage-schedule', component: ManageScheduleComponent },
      { path: 'patients', component: PatientComponent },
      { path: 'appointment', component: AppointmentComponent }
    ],
    canActivate: [RouterGuardService],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
