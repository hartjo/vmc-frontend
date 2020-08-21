import { Injectable } from '@angular/core';
import { BaseService } from '@shared/services/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  constructor(
    http: HttpClient
  ) {
    super(http);
   }

   login(params): Observable<any> {
    const url = '/users/login';

    return this.post(url, params);
   }

}
