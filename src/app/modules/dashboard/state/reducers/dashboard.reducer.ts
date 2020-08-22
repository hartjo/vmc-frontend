import { Action, createReducer, on } from '@ngrx/store';
import * as DashboardActions from '../actions/dashboard.actions';
import produce from 'immer';

export const dashboardFeatureKey = 'dashboard';

export interface State {
  listDoctor: {
    loader: boolean;
    success: any;
    error: any;
  };
  listPatient: {
    loader: boolean;
    success: any;
    error: any;
  };
  updateSchedule: {
    loader: boolean;
    success: any;
    error: any;
  };
  getSchedule: {
    loader: boolean;
    success: any;
    error: any;
  };
  getScheduleDoctor: {
    loader: boolean;
    success: any;
    error: any;
  };
}

export const initialState: State = {
  listDoctor: {
    loader: false,
    success: null,
    error: null
  },
  listPatient: {
    loader: false,
    success: null,
    error: null
  },
  updateSchedule: {
    loader: false,
    success: null,
    error: null
  },
  getSchedule: {
    loader: false,
    success: null,
    error: null
  },
  getScheduleDoctor: {
    loader: false,
    success: null,
    error: null
  },
};


export const reducer = createReducer(
  initialState,

  on(DashboardActions.listDoctor, state => {
    return produce((draft) => {
      draft.listDoctor.loader = true;
      draft.listDoctor.success = null;
      draft.listDoctor.error = null;
    })(state);
  }),
  on(DashboardActions.listDoctorSuccess, (state, action) => {
    return produce((draft) => {
      draft.listDoctor.loader = true;
      draft.listDoctor.success = action.data;
      draft.listDoctor.error = null;
    })(state);
  }),
  on(DashboardActions.listDoctorFailure, (state, action) => {
    return produce((draft) => {
      draft.listDoctor.loader = true;
      draft.listDoctor.success = action.error;
      draft.listDoctor.error = null;
    })(state);
  }),


  on(DashboardActions.listPatient, state => {
    return produce((draft) => {
      draft.listPatient.loader = true;
      draft.listPatient.success = null;
      draft.listPatient.error = null;
    })(state);
  }),
  on(DashboardActions.listPatientSuccess, (state, action) => {
    return produce((draft) => {
      draft.listPatient.loader = false;
      draft.listPatient.success = action.data;
      draft.listPatient.error = null;
    })(state);
  }),
  on(DashboardActions.listPatientFailure, (state, action) => {
    return produce((draft) => {
      draft.listPatient.loader = false;
      draft.listPatient.success = action.error;
      draft.listPatient.error = null;
    })(state);
  }),



  on(DashboardActions.updateSchedule, state => {
    return produce((draft) => {
      draft.updateSchedule.loader = true;
      draft.updateSchedule.success = null;
      draft.updateSchedule.error = null;
    })(state);
  }),
  on(DashboardActions.updateScheduleClear, state => {
    return produce((draft) => {
      draft.updateSchedule.loader = false;
      draft.updateSchedule.success = null;
      draft.updateSchedule.error = null;
    })(state);
  }),
  on(DashboardActions.updateScheduleSuccess, (state, action) => {
    return produce((draft) => {
      draft.updateSchedule.loader = false;
      draft.updateSchedule.success = action.data;
      draft.updateSchedule.error = null;
    })(state);
  }),
  on(DashboardActions.updateScheduleFailure, (state, action) => {
    return produce((draft) => {
      draft.updateSchedule.loader = false;
      draft.updateSchedule.success = action.error;
      draft.updateSchedule.error = null;
    })(state);
  }),


  on(DashboardActions.getSchedule, state => {
    return produce((draft) => {
      draft.getSchedule.loader = true;
      draft.getSchedule.success = null;
      draft.getSchedule.error = null;
    })(state);
  }),
  on(DashboardActions.getScheduleSuccess, (state, action) => {
    return produce((draft) => {
      draft.getSchedule.loader = false;
      draft.getSchedule.success = action.data;
      draft.getSchedule.error = null;
    })(state);
  }),
  on(DashboardActions.getScheduleFailure, (state, action) => {
    return produce((draft) => {
      draft.getSchedule.loader = false;
      draft.getSchedule.success = action.error;
      draft.getSchedule.error = null;
    })(state);
  }),


  on(DashboardActions.getScheduleDoctor, state => {
    return produce((draft) => {
      draft.getScheduleDoctor.loader = true;
      draft.getScheduleDoctor.success = null;
      draft.getScheduleDoctor.error = null;
    })(state);
  }),
  on(DashboardActions.getScheduleDoctorClear, state => {
    return produce((draft) => {
      draft.getScheduleDoctor.loader = false;
      draft.getScheduleDoctor.success = null;
      draft.getScheduleDoctor.error = null;
    })(state);
  }),
  on(DashboardActions.getScheduleDoctorSuccess, (state, action) => {
    return produce((draft) => {
      draft.getScheduleDoctor.loader = false;
      draft.getScheduleDoctor.success = action.data;
      draft.getScheduleDoctor.error = null;
    })(state);
  }),
  on(DashboardActions.getScheduleDoctorFailure, (state, action) => {
    return produce((draft) => {
      draft.getScheduleDoctor.loader = false;
      draft.getScheduleDoctor.success = action.error;
      draft.getScheduleDoctor.error = null;
    })(state);
  }),


);

