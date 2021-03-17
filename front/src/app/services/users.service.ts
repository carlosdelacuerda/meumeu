import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../interfaces/user.interface';
import { baseUrl } from './baseUrl';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // 'authorization': '750e8b43e5ed564462c90ef0d382db26'
  })
};

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

  create (formValues):Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders()
    }
    return this.httpClient.post( this.usersUrl, formValues, httpOptions).toPromise();
   }

   login(user: any):Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders()
    }
     return this.httpClient.post(this.usersUrl+'/login',user, httpOptions).toPromise();
   }


}



