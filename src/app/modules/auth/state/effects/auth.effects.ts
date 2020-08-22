import { Injectable, Component } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as AuthActions from '../actions/auth.actions';
import { AuthService } from '../../services/auth.service';



@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(AuthActions.login),
      concatMap((action) => this.authService.login(action.params)
        .pipe(
          map((response: any) => {
            return AuthActions.loginSuccess({ data: response });
          }),
          catchError((response: any) => {
            return of(AuthActions.loginFailure({error: response}));
          })
        )
      )
    );
  });


}
