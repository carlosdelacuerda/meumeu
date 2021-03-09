import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trip } from '../interfaces/trip.interface';


@Injectable({
  providedIn: 'root'
})
export class TripService {

  // baseUrl: string;

  // constructor(private httpClient: HttpClient) {
  //   this.baseUrl = 'http://localhost/3000/api/trips'
  //  }

  //  getAll () {
  //    return this.httpClient.get<trip[]>(this.baseUrl).toPromise;
  //  }

  //  insert(formValues) {
  //   return this.httpClient.post(this.baseUrl, formValues).toPromise();
  // }
}
