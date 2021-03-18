import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isActive: boolean;

  constructor(private userService: UsersService) { 
    this.isActive = false;
  }

  ngOnInit(): void {
    this.userService.tokenId()
  }

  ngDoCheck(){
    this.isActive = this.userService.getToken();
  }

}
