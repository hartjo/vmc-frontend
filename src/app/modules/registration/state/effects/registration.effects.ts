import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as RegistrationActions from '../actions/registration.actions';
import { RegistrationService } from '../../services/registration.service';



@Injectable()
export class RegistrationEffects {

  constructor(
    private actions$: Actions,
    private regService: RegistrationService
    ) {}

  doctorSpecialtiesList$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(RegistrationActions.doctorSpecialtiesList),
      concatMap((action) => this.regService.specialtiesList()
        .pipe(
          map((response: any) => {
            return RegistrationActions.doctorSpecialtiesListSuccess({ data: response });
          }),
          catchError((response: any) => {
            return of(RegistrationActions.doctorSpecialtiesListFailure({error: response}));
          })
        )
      )
    );
  });

  saveDoctor$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(RegistrationActions.saveDoctor),
      concatMap((action) => this.regService.saveDoctor(action.params)
        .pipe(
          map((response: any) => {
            return RegistrationActions.saveDoctorSuccess({ data: response });
          }),
          catchError((response: any) => {
            return of(RegistrationActions.saveDoctorFailure({error: response}));
          })
        )
      )
    );
  });

  savePatient$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(RegistrationActions.savePatient),
      concatMap((action) => this.regService.savePatient(action.params)
        .pipe(
          map((response: any) => {
            return RegistrationActions.savePatientSuccess({ data: response });
          }),
          catchError((response: any) => {
            return of(RegistrationActions.savePatientFailure({error: response}));
          })
        )
      )
    );
  });


}
