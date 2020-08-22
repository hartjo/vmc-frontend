import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '@rootState/store';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(
    private router: Router,
    private store: Store<fromRoot.State>
  ) { }

  create(data) {

    localStorage.setItem('credentials', JSON.stringify(data));

  }

  destroy(): void {
    this.clear();
  }


  private clear(): void {
    localStorage.clear();
    if (window.location.href.indexOf('/auth/login') === -1) {
      if (this.router.url !== '/') {
          this.router.navigate(['/auth/login']);
      } else {
          this.router.navigate(['/auth/login']);
      }
      return;
    }
  }

  isAuthenticated$(): Observable<boolean> {
    return this.store.pipe(
      select(fromRoot.getApp),
      map(root => {
        if (root) {
          if (root.credentials.token !== undefined && root.credentials.token !== null) {

            const helper = new JwtHelperService();
            return  !helper.isTokenExpired(root.credentials.token);
          }
          return false;
        }
        return false;
      })
    );
  }

}
