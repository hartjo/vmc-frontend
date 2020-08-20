import { createAction, props } from '@ngrx/store';

export const addCredentials = createAction(
  '[App] Load Apps'
);

export const addCredentialsSuccess = createAction(
  '[App] Load Apps Success',
  props<{ data: any }>()
);

export const addCredentialsFailure = createAction(
  '[App] Load Apps Failure',
);

export const Logout = createAction(
  '[Logout] Logout',
);
