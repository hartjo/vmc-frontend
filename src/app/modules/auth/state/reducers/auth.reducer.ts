import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import produce from 'immer';

export const authFeatureKey = 'auth';

export interface State {
  login: {
    loading: boolean;
    success: {
      token: any;
      user: any;
    };
    error: any;
  };
}

export const initialState: State = {
  login: {
    loading: false,
    success: null,
    error: null
  }
};


export const reducer = createReducer(
  initialState,

  on(AuthActions.login, state => {
    return produce((draft) => {
      draft.login.loader = true;
      draft.login.success = null;
      draft.login.error = null;
    })(state);
  }),
  on(AuthActions.loginSuccess, (state, action) => {
    return produce((draft) => {
      draft.login.loader = true;
      draft.login.success = action.data;
      draft.login.error = null;
    })(state);
  }),
  on(AuthActions.loginFailure, (state, action) => {
    return produce((draft) => {
      draft.login.loader = true;
      draft.login.success = null;
      draft.login.error = action.error;
    })(state);
  }),

);

