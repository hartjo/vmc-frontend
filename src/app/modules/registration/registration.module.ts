import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { PatientComponent } from './components/patient/patient.component';
import { StoreModule } from '@ngrx/store';
import * as fromRegistration from './state/reducers/registration.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RegistrationEffects } from './state/effects/registration.effects';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';


@NgModule({
  declarations: [RegistrationComponent, DoctorComponent, PatientComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    PasswordStrengthMeterModule,
    StoreModule.forFeature(fromRegistration.registrationFeatureKey, fromRegistration.reducer),
    EffectsModule.forFeature([RegistrationEffects])
  ]
})
export class RegistrationModule { }
