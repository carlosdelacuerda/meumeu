import { Component, OnInit } from '@angular/core';
import { mail } from 'src/app/interfaces/mail.interface';
import { MailingService } from 'src/app/services/mailing.service';

@Component({
  selector: 'app-mail-revive',
  templateUrl: './mail-revive.component.html',
  styleUrls: ['./mail-revive.component.scss']
})
export class MailReviveComponent implements OnInit {

  userRecibed: number;
  arrMails: mail[];

  constructor(
    private mailService: MailingService
  ) {}

  ngOnInit() {
    this.getAll(1)
  }

    getAll(param){
      this.userRecibed = 1;
    this.mailService.getRecibed(param)
    .then(response => {
      this.arrMails = response;
      console.log(this.arrMails)
    })
    .catch(error => {
      console.log(error)
    });
    console.log(this.arrMails)
  }
  

}
