import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { user } from './interfaces/user.interface';
import { UsersService } from './services/users.service';
import { tokenGuard } from './token.guard';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  headerView: boolean;
  userData: user;
  myId: string;


  constructor(
    private _activatedRoute: ActivatedRoute,
    private userSercice: UsersService,
    private tokenCheck: tokenGuard
  ) {
    this.headerView = true;
  }
  

  async ngOnInit() {
    
  
    
    // this.userData = await this.userSercice.getById(1);
    // console.log(this.userData.username)
  }

  

}
