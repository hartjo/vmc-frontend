import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '@environments/environment';
import { ModuleWithProviders } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { AppRootState, reducer } from '../reducers/app.reducer';


export interface State {
  router: RouterReducerState;
  app: AppRootState;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  app: reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const StoreDevToolModule: ModuleWithProviders[] = (!environment.production) ?
  [StoreDevtoolsModule.instrument({
    name: 'VMC',
    maxAge: 25,
    logOnly: environment.production
  })] : [];


export const getRouter = createFeatureSelector<any>('router');

export const getCurrentUrl = createSelector(
  getRouter,
  state => state.state.url
);

export const getApp = createFeatureSelector<any>('app');

export const getCredentials = createSelector(
  getApp,
  state => state.credentials
);

export const getEmployeeDetails = createSelector(
  getApp,
  state => state.credentials.employeeDetails
);
