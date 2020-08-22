import { Injectable } from '@angular/core';
import { Actions, createEffect, OnInitEffects, ROOT_EFFECTS_INIT, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import * as appAction from '../actions/app.actions';
import { map } from 'rxjs/operators';



@Injectable()
export class AppEffects implements OnInitEffects {

  constructor(private actions$: Actions) { }

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      map((response: any) => {
        if (localStorage.getItem('credentials') === 'undefined') {
          return appAction.addCredentialsFailure();
        } else {
          const credentials = JSON.parse(localStorage.getItem('credentials'));
          if (credentials !== null && credentials !== undefined) {
            return appAction.addCredentialsSuccess({ data: credentials });
          }
          return appAction.addCredentialsFailure();
        }
      }),
    )
  );

  ngrxOnInitEffects() {
    return { type: '[EffectWithInitAction] Init' };
  }

}
