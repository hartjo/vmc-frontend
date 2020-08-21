import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducer';

export interface State extends fromAuth.State {
  auth: fromAuth.State;
}

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey
);

export const loginSuccess = createSelector(
  selectAuthState,
  (state: fromAuth.State) => state.login.success
);

export const loginFailure = createSelector(
  selectAuthState,
  (state: fromAuth.State) => state.login.error
);
