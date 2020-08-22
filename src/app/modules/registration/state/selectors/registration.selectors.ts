import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRegistration from '../reducers/registration.reducer';

export interface State extends fromRegistration.State {
  auth: fromRegistration.State;
}

export const selectRegistrationState = createFeatureSelector<fromRegistration.State>(
  fromRegistration.registrationFeatureKey
);

export const specialtiesListSuccess = createSelector(
  selectRegistrationState,
  (state: fromRegistration.State) => state.specialtiesList.success
);

export const specialtiesListFailure = createSelector(
  selectRegistrationState,
  (state: fromRegistration.State) => state.specialtiesList.error
);

export const saveDoctorSuccess = createSelector(
  selectRegistrationState,
  (state: fromRegistration.State) => state.saveDoctor.success
);

export const saveDoctorFailure = createSelector(
  selectRegistrationState,
  (state: fromRegistration.State) => state.saveDoctor.error
);

export const savePatientSuccess = createSelector(
  selectRegistrationState,
  (state: fromRegistration.State) => state.savePatient.success
);

export const savePatientFailure = createSelector(
  selectRegistrationState,
  (state: fromRegistration.State) => state.savePatient.error
);

