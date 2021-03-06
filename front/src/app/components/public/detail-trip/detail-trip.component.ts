import { Component, Input, OnInit } from '@angular/core';
import { tripDetail } from 'src/app/interfaces/tripDetail.interface';
import { TripService } from 'src/app/services/trip.service';
import jwt_decode from 'jwt-decode';
import { user } from 'src/app/interfaces/user.interface';
import { mail } from 'src/app/interfaces/mail.interface';
import { MailingService } from 'src/app/services/mailing.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { baseUrl } from 'src/app/services/baseUrl';


@Component({
  selector: 'app-detail-trip',
  templateUrl: './detail-trip.component.html',
  styleUrls: ['./detail-trip.component.scss']
})
export class DetailTripComponent implements OnInit {

  @Input() userData: user;
  allData: user;

  myCountry: string;
  newMail: mail;
  baseUrl: string = baseUrl;

  myTrip: tripDetail;
  myId: number;
  url: string;
  positionId: number;
  modalContact;
  modalLogin;
  token;

  constructor(
    private tripService: TripService,
    private mailService: MailingService,
    private router: Router,
    private userService: UsersService
    ) {

   }

  async ngOnInit() {   
    this.token = localStorage.getItem('token')
    this.modalContact = document.querySelector(".modalContact");
    this.modalLogin = document.querySelector(".modalLogin");
    this.url = window.location.href;
    const arrId = this.url.split('/');
    this.positionId = arrId.length-1;
    const urlFinal = arrId[this.positionId];
    this.myTrip = await this.tripService.byId(urlFinal);
    console.log(this.myTrip)
  } 

  showModal(){
    if (this.token) {
    this.modalContact.style.display = "block";
    }
    this.modalLogin.style.display = "block";
  }

  closeModal(){
    this.modalContact.style.display = "none";
    this.modalLogin.style.display = "none";
  }

  async onSubmit(pForm) {
    const token = localStorage.getItem("token");
    const decode = jwt_decode(token);
    this.userData = decode['id'];
    // this.allData = await this.userService.getById(this.userData);
    pForm.fk_user_r = this.myTrip.user_id;
    pForm.fk_user_e = this.userData;
    pForm.fk_trip = this.myTrip.id;
    await this.mailService.create(pForm); 
    }

  // async loadDetail(pId) {
  //   this.myTrip = await this.tripService.byId(pId);  
  //   console.log(JSON.stringify(this.myTrip))
  // }

}
