import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as DashboardActions from '../actions/dashboard.actions';
import { DashboardService } from '../../services/dashboard.service';



@Injectable()
export class DashboardEffects {

  constructor(
    private actions$: Actions,
    private dashboardService: DashboardService
  ) {}

  listDoctor$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(DashboardActions.listDoctor),
      concatMap((action) => this.dashboardService.listDoctor(action.params)
        .pipe(
          map((response: any) => {
            return DashboardActions.listDoctorSuccess({ data: response });
          }),
          catchError((response: any) => {
            return of(DashboardActions.listDoctorFailure({error: response}));
          })
        )
      )
    );
  });

  listPatient$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(DashboardActions.listPatient),
      concatMap((action) => this.dashboardService.listPatient(action.params)
        .pipe(
          map((response: any) => {
            return DashboardActions.listPatientSuccess({ data: response });
          }),
          catchError((response: any) => {
            return of(DashboardActions.listPatientFailure({error: response}));
          })
        )
      )
    );
  });

  updateSchedule$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(DashboardActions.updateSchedule),
      concatMap((action) => this.dashboardService.updateSchedule(action.params)
        .pipe(
          map((response: any) => {
            return DashboardActions.updateScheduleSuccess({ data: response });
          }),
          catchError((response: any) => {
            return of(DashboardActions.updateScheduleFailure({error: response}));
          })
        )
      )
    );
  });


  getSchedule$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(DashboardActions.getSchedule),
      concatMap((action) => this.dashboardService.getSchedule()
        .pipe(
          map((response: any) => {
            return DashboardActions.getScheduleSuccess({ data: response });
          }),
          catchError((response: any) => {
            return of(DashboardActions.getScheduleFailure({error: response}));
          })
        )
      )
    );
  });

  getScheduleDoctor$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(DashboardActions.getScheduleDoctor),
      concatMap((action) => this.dashboardService.getScheduleDoctor(action.params)
        .pipe(
          map((response: any) => {
            return DashboardActions.getScheduleDoctorSuccess({ data: response });
          }),
          catchError((response: any) => {
            return of(DashboardActions.getScheduleDoctorFailure({error: response}));
          })
        )
      )
    );
  });

}
