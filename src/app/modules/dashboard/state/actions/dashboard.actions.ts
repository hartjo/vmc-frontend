import { createAction, props } from '@ngrx/store';

export const listDoctor = createAction(
  '[Dashboard] List Doctor',
  props<{ params: any }>()
);

export const listDoctorSuccess = createAction(
  '[Dashboard] List Doctor Success',
  props<{ data: any }>()
);

export const listDoctorFailure = createAction(
  '[Dashboard] List Doctor Failure',
  props<{ error: any }>()
);

export const listPatient = createAction(
  '[Dashboard] List Patient',
  props<{ params: any }>()
);

export const listPatientSuccess = createAction(
  '[Dashboard] List Patient Success',
  props<{ data: any }>()
);

export const listPatientFailure = createAction(
  '[Dashboard] List Patient Failure',
  props<{ error: any }>()
);


export const updateSchedule = createAction(
  '[Dashboard] Update Schedule',
  props<{ params: any }>()
);

export const updateScheduleClear = createAction(
  '[Dashboard] Update Schedule'
);

export const updateScheduleSuccess = createAction(
  '[Dashboard] Update Schedule Success',
  props<{ data: any }>()
);

export const updateScheduleFailure = createAction(
  '[Dashboard] Update Schedule Failure',
  props<{ error: any }>()
);

export const getSchedule = createAction(
  '[Dashboard] Get Schedule'
);

export const getScheduleSuccess = createAction(
  '[Dashboard] Get Schedule Success',
  props<{ data: any }>()
);

export const getScheduleFailure = createAction(
  '[Dashboard] Get Schedule Failure',
  props<{ error: any }>()
);

export const getScheduleDoctor = createAction(
  '[Dashboard] Get Schedule Doctor',
  props<{ params: any }>()
);

export const getScheduleDoctorClear = createAction(
  '[Dashboard] Get Schedule Doctor Clear'
);

export const getScheduleDoctorSuccess = createAction(
  '[Dashboard] Get Schedule Doctor Success',
  props<{ data: any }>()
);

export const getScheduleDoctorFailure = createAction(
  '[Dashboard] Get Schedule Doctor Failure',
  props<{ error: any }>()
);

