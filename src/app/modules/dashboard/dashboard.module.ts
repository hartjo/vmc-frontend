import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { PatientComponent } from './components/patient/patient.component';
import { StoreModule } from '@ngrx/store';
import * as fromDashboard from './state/reducers/dashboard.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './state/effects/dashboard.effects';
import { ManageScheduleComponent } from './components/doctor/components/manage-schedule/manage-schedule.component';
import { SharedModule } from '@shared/shared/shared.module';
import { AppointmentComponent } from './components/patient/components/appointment/appointment.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [DashboardComponent, AdminComponent, DoctorComponent, PatientComponent, ManageScheduleComponent, AppointmentComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FullCalendarModule,
    StoreModule.forFeature(fromDashboard.dashboardFeatureKey, fromDashboard.reducer),
    EffectsModule.forFeature([DashboardEffects])
  ]
})
export class DashboardModule { }
