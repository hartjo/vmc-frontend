import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(
    private http: HttpClient
  ) { }


  buildUrl(url: string) {
    return environment.apiServer + url;
  }

  get(url: string): Observable<any> {
    const buildurl = this.buildUrl(url);
    return this.http.get(buildurl);
  }

  post(url: string, params: any) {
    const buildurl = this.buildUrl(url);
    return this.http.post(buildurl, params);
  }

  put(url: string, params: any) {
    const buildurl = this.buildUrl(url);
    return this.http.put(buildurl, params);
  }

  delete(url: string, params: any) {
    const buildurl = this.buildUrl(url);
    return this.http.delete(buildurl, params);
  }


  postFormData(url: string, params: any) {

    const formData = new FormData();

    for (const key in params) {
      if (key) {
        formData.append(key, params[key]);
      }
    }

    const buildurl = this.buildUrl(url);
    return this.http.post(buildurl, formData);
  }

  putFormData(url: string, params: any): Observable<any> {

    const formData = new FormData();

    for (const key in params) {
      if (key) {
        formData.append(key, params[key]);
      }
    }

    const buildurl = this.buildUrl(url);
    return this.http.put(buildurl, formData);
  }


}
