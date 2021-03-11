import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../interfaces/user.interface';
import { baseUrl } from './baserUrl';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userTrip: string;
  usersUrl: string;

  constructor(private httpClient: HttpClient) {
    this.usersUrl = `${baseUrl}/api/users`;
 }


 getAllUsers(): Promise<user[]> {
  return this.httpClient.get<user[]>(this.usersUrl).toPromise();
  };

}



