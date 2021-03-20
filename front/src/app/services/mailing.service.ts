import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { mail } from '../interfaces/mail.interface';
import { baseUrl } from './baseUrl';

@Injectable({
  providedIn: 'root'
})
export class MailingService {

  mailsUrl: string;

  constructor(private httpClient: HttpClient) {
    this.mailsUrl = baseUrl+'/api/mailing'
   }

   getAll(): Promise<mail[]> {
    return this.httpClient.get<mail[]>(this.mailsUrl).toPromise();
    }

    getRecibed(user_r){
      return this.httpClient.get<mail[]>(this.mailsUrl+"/"+user_r).toPromise();
    }

}
