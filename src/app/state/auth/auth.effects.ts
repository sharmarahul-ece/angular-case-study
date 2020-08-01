import { login, loginSuccess } from './auth.actions';
import { AuthService } from './../../services/auth.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthEffects {
    login$ = createEffect(() =>
      this.actions$.pipe(
        ofType(login),
        mergeMap(user => this.auth.login(user.username, user.password)
          .pipe(
            tap(console.log),
            map(isSuccess => loginSuccess({ isSuccess })),
            catchError(() => EMPTY)
          )
        )
      )
    );

    constructor(private actions$: Actions, private auth: AuthService) {}
}

