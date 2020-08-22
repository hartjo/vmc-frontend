import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpResponse, HttpInterceptor, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as fromRoot from '@rootState/store';
import { Store } from '@ngrx/store';
import { addCredentialsSuccess } from '@rootState/actions/app.actions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  constructor(
    private storeRoot: Store<fromRoot.State>,
    private router: Router
  ) { }

  intercept(request: HttpRequest<any>, handler: HttpHandler): Observable<any> {

    const credentials = JSON.parse(localStorage.getItem('credentials'));
    let token = 'aes';

    if (credentials) {
      token = credentials.token;
    }
    const authRequest = request.clone({ headers: request.headers.set('Authorization', token) });

    return handler.handle(authRequest).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {

          // if (event.body.refreshToken !== null) {
          //   localStorage.setItem('credentials', JSON.stringify(event.body.refreshToken));
          //   this.storeRoot.dispatch(addCredentialsSuccess({data: event.body.refreshToken}));
          // }

        }
      }, error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 500) {
            // this.toastr.error('Something went wrong! Server Error', 'Error!');
          }
          if (error.status === 401 || error.status === 403) {
            // redirect to login page
            this.router.navigate(['/auth/login']);
          }
        }
      })
    );
  }
}



