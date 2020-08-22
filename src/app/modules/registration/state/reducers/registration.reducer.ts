import { Action, createReducer, on } from '@ngrx/store';
import * as RegistrationActions from '../actions/registration.actions';
import produce from 'immer';

export const registrationFeatureKey = 'registration';

export interface State {
  specialtiesList: {
    loader: boolean;
    success: any;
    error: any;
  };
  saveDoctor: {
    loader: boolean;
    success: any;
    error: any;
  };
  savePatient: {
    loader: boolean;
    success: any;
    error: any;
  };
}

export const initialState: State = {
  specialtiesList: {
    loader: false,
    success: null,
    error:  null
  },
  saveDoctor: {
    loader: false,
    success: null,
    error:  null
  },
  savePatient: {
    loader: false,
    success: null,
    error:  null
  }
};


export const reducer = createReducer(
  initialState,

  on(RegistrationActions.doctorSpecialtiesList, state => {
    return produce((draft) => {
      draft.specialtiesList.loader = true;
      draft.specialtiesList.success = null;
      draft.specialtiesList.error = null;
    })(state);
  }),
  on(RegistrationActions.doctorSpecialtiesListClear, state => {
    return produce((draft) => {
      draft.specialtiesList.loader = false;
      draft.specialtiesList.success = null;
      draft.specialtiesList.error = null;
    })(state);
  }),
  on(RegistrationActions.doctorSpecialtiesListSuccess, (state, action) => {
    return produce((draft) => {
      draft.specialtiesList.loader = false;
      draft.specialtiesList.success = action.data;
      draft.specialtiesList.error = null;
    })(state);
  }),
  on(RegistrationActions.doctorSpecialtiesListFailure, (state, action) => {
    return produce((draft) => {
      draft.specialtiesList.loader = false;
      draft.specialtiesList.success = null;
      draft.specialtiesList.error = action.error;
    })(state);
  }),


  on(RegistrationActions.saveDoctor, state => {
    return produce((draft) => {
      draft.saveDoctor.loader = true;
      draft.saveDoctor.success = null;
      draft.saveDoctor.error = null;
    })(state);
  }),
  on(RegistrationActions.saveDoctorClear, state => {
    return produce((draft) => {
      draft.saveDoctor.loader = false;
      draft.saveDoctor.success = null;
      draft.saveDoctor.error = null;
    })(state);
  }),
  on(RegistrationActions.saveDoctorSuccess, (state, action) => {
    return produce((draft) => {
      draft.saveDoctor.loader = false;
      draft.saveDoctor.success = action.data;
      draft.saveDoctor.error = null;
    })(state);
  }),
  on(RegistrationActions.saveDoctorFailure, (state, action) => {
    return produce((draft) => {
      draft.saveDoctor.loader = false;
      draft.saveDoctor.success = null;
      draft.saveDoctor.error = action.error;
    })(state);
  }),


  on(RegistrationActions.savePatient, state => {
    return produce((draft) => {
      draft.savePatient.loader = true;
      draft.savePatient.success = null;
      draft.savePatient.error = null;
    })(state);
  }),
  on(RegistrationActions.savePatientClear, state => {
    return produce((draft) => {
      draft.savePatient.loader = false;
      draft.savePatient.success = null;
      draft.savePatient.error = null;
    })(state);
  }),
  on(RegistrationActions.savePatientSuccess, (state, action) => {
    return produce((draft) => {
      draft.savePatient.loader = false;
      draft.savePatient.success = action.data;
      draft.savePatient.error = null;
    })(state);
  }),
  on(RegistrationActions.savePatientFailure, (state, action) => {
    return produce((draft) => {
      draft.savePatient.loader = false;
      draft.savePatient.success = null;
      draft.savePatient.error = action.error;
    })(state);
  }),

);

