import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDashboard from '../reducers/dashboard.reducer';

export interface State extends fromDashboard.State {
  auth: fromDashboard.State;
}

export const selectDashboardState = createFeatureSelector<fromDashboard.State>(
  fromDashboard.dashboardFeatureKey
);


export const listDoctorSuccess = createSelector(
  selectDashboardState,
  (state: fromDashboard.State) => state.listDoctor.success
);

export const listDoctorFailure = createSelector(
  selectDashboardState,
  (state: fromDashboard.State) => state.listDoctor.error
);

export const listPatientSuccess = createSelector(
  selectDashboardState,
  (state: fromDashboard.State) => state.listPatient.success
);

export const listPatientFailure = createSelector(
  selectDashboardState,
  (state: fromDashboard.State) => state.listPatient.error
);


export const updateScheduleSuccess = createSelector(
  selectDashboardState,
  (state: fromDashboard.State) => state.updateSchedule.success
);

export const updateScheduleFailure = createSelector(
  selectDashboardState,
  (state: fromDashboard.State) => state.updateSchedule.error
);

export const getScheduleSuccess = createSelector(
  selectDashboardState,
  (state: fromDashboard.State) => state.getSchedule.success
);

export const getScheduleFailure = createSelector(
  selectDashboardState,
  (state: fromDashboard.State) => state.getSchedule.error
);

export const getScheduleDoctorSuccess = createSelector(
  selectDashboardState,
  (state: fromDashboard.State) => state.getScheduleDoctor.success
);

export const getScheduleDoctorFailure = createSelector(
  selectDashboardState,
  (state: fromDashboard.State) => state.getScheduleDoctor.error
);

