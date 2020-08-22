import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  canActivate(): Observable<boolean> {
    return this.authenticationService.isAuthenticated$()
      .pipe(map(isAuthenticate => {
        if (!isAuthenticate) {
          this.authenticationService.destroy();
          return;
        }
        return isAuthenticate;
      }));
  }
}
