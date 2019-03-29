import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhoneData } from './phone-data';
import { Observable } from 'rxjs';

@Injectable()
export class PhoneService {
  constructor(private http: HttpClient) {}
  query(): Observable<PhoneData[]> {
    return this.http.get<PhoneData[]>(`phones/phones.json`);
    // .pipe(map((res: Response) => res.json()));
  }
  get(id: string): Observable<PhoneData> {
    return this.http.get<PhoneData>(`phones/${id}.json`);
    // .pipe(map((res: Response) => res.json()));
  }
}

// import * as angular from 'angular';
// import { downgradeInjectable } from '@angular/upgrade/static';

// angular
//   .module('core.phone', [])
//   .factory('phone', downgradeInjectable(PhoneService));
