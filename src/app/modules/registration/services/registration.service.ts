import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '@shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService extends BaseService {

  constructor(
    http: HttpClient
  ) {
    super(http);
   }

   specialtiesList(): Observable<any> {
    const url = '/doctors/specialties-list';

    return this.get(url);
   }

   saveDoctor(params): Observable<any> {
    const url = '/doctors/save';

    return this.post(url, params);
   }

   savePatient(params): Observable<any> {
    const url = '/patients/save';

    return this.post(url, params);
   }
}
