import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trip } from '../interfaces/trip.interface';
import { baseUrl } from './baserUrl';



@Injectable({
  providedIn: 'root'
})
export class TripService {

  tripsUrl: string;

  constructor(private httpClient: HttpClient) {
    this.tripsUrl = `${baseUrl}/api/trips`;
 }


 getAllTrips(): Promise<trip[]> {
  return this.httpClient.get<trip[]>(this.tripsUrl).toPromise();
  }

  // getByCountry(country){
  //   return this.httpClient.get<trip[]>(this.tripsUrl).toPromise();
  // }


}
