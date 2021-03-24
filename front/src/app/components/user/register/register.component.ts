import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { user } from '../../../interfaces/user.interface'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public users:user [];
  public user: user;
  files;
  // formUser: user;
  
  constructor(private usersService: UsersService, private router: Router) { 



  }


  ngOnInit(): void {
  }



  async onSubmit(pForm) {
    // await this.usersService.create(pForm); 
    // Creación del objeto donde incluimos todos los campos del formulario y además la imagen
    let fd = new FormData();
    fd.append('image', this.files[0]);

    // Delegamos el envío del formulario en el servicio
    this.usersService.create(pForm).then(result => {
      this.router.navigate(['']);
    })
  }

  onChange($event) {
    this.files = $event.target.files;
  }

  

}
