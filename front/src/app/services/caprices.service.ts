import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { caprice } from '../interfaces/caprice.interface';
import { baseUrl } from './baseUrl';

@Injectable({
  providedIn: 'root'
})
export class CapricesService {

  capricesUrl: string;

  constructor(private httpClient: HttpClient) {
    this.capricesUrl = `${baseUrl}/api/desires`;
  }

  getAllCaprices(): Promise<caprice[]> {
    return this.httpClient.get<caprice[]>(this.capricesUrl).toPromise();
    }
}
