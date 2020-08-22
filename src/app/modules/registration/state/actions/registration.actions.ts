import { createAction, props } from '@ngrx/store';

export const doctorSpecialtiesList = createAction(
  '[Registration] Specialties List'
);

export const doctorSpecialtiesListClear = createAction(
  '[Registration] Specialties List Clear'
);

export const doctorSpecialtiesListSuccess = createAction(
  '[Registration] Specialties List Success',
  props<{ data: any }>()
);

export const doctorSpecialtiesListFailure = createAction(
  '[Registration] Specialties List Failure',
  props<{ error: any }>()
);

export const saveDoctor = createAction(
  '[Registration] Save Doctor',
  props<{ params: any }>()
);

export const saveDoctorClear = createAction(
  '[Registration] Save Doctor Clear'
);

export const saveDoctorSuccess = createAction(
  '[Registration] Save Doctor Success',
  props<{ data: any }>()
);

export const saveDoctorFailure = createAction(
  '[Registration] Save Doctor Failure',
  props<{ error: any }>()
);

export const savePatient = createAction(
  '[Registration] Save Patient',
  props<{ params: any }>()
);

export const savePatientClear = createAction(
  '[Registration] Save Patient Clear'
);

export const savePatientSuccess = createAction(
  '[Registration] Save Patient Success',
  props<{ data: any }>()
);

export const savePatientFailure = createAction(
  '[Registration] Save Patient Failure',
  props<{ error: any }>()
);
