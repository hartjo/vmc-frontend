import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login] Login',
  props<{ params: any }>()
);

export const loginClear = createAction(
  '[Login] Login Clear'
);

export const loginSuccess = createAction(
  '[Login] Login Success',
  props<{ data: any }>()
);

export const loginFailure = createAction(
  '[Login] Login Failure',
  props<{ error: any }>()
);
