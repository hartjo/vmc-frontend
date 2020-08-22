import { Injectable } from '@angular/core';
import { BaseService } from '@shared/services/base.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BaseService {

  constructor(
    http: HttpClient
  ) {
    super(http);
  }

  listDoctor(params): Observable<any> {
    const url = '/doctors/list';

    return this.post(url, params);
  }

  listPatient(params): Observable<any> {
    const url = '/patients/list';

    return this.post(url, params);
  }

  updateSchedule(params): Observable<any> {
    const url = '/doctors/update-schedule';

    return this.post(url, params);
  }

  getSchedule(): Observable<any> {
    const url = '/doctors/get-schedule';

    return this.get(url);
  }

  getScheduleDoctor(params): Observable<any> {
    const url = '/doctors/get-doctor-schedule';

    return this.post(url, params);
  }
}
