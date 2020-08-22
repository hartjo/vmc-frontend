import { Action, createReducer, on } from '@ngrx/store';
import * as AppActions from '../actions/app.actions';
import produce from 'immer';


export const appFeatureKey = 'app';

export interface AppRootState {
  credentials: {
    token: string;
    employeeDetails: any;
  };
}

export const initialState: AppRootState = {
  credentials: {
    token: null,
    employeeDetails: null
  }
};

const appReducer = createReducer(
  initialState,

  on(AppActions.addCredentialsSuccess, (state, action) => {
    return produce((draft, draftAction) => {
      draft.credentials.token = draftAction.data.token;
      draft.credentials.employeeDetails =  draftAction.data.employeeDetails;
    })(state, action);
  }),
  on(AppActions.Logout, (state, action) => {
    return produce((draft, draftAction) => {
      draft.credentials.token = 'aes';
      draft.credentials.employeeDetails =  '';
    })(state, action);
  }),

);

export function reducer(state: AppRootState | undefined, action: Action) {
  return appReducer(state, action);
}
