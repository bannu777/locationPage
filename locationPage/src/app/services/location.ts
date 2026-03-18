import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private url = 'location.json';

  constructor (private http : HttpClient) {

  }

  getLocationData() : Observable<any> {
    return this.http.get<any>(this.url);
  }

}
