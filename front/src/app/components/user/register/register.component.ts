import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { user } from '../../../interfaces/user.interface'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public users:user [];
  public user:user;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    
  }



  onSubmit(pForm) {
    this.usersService.create(this.user).subscribe(
      (newUser) => {
        newUser.data = this.user;
        console.log(newUser);
      });

  
  }

  

}
