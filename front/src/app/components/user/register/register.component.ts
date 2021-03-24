import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { user } from '../../../interfaces/user.interface'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public users:user[];
  public user: user;

  formulario: FormGroup;
  files: any[];

  // formUser: user;
  
  constructor(
    private usersService: UsersService,
    private router: Router) {
       

  }


  ngOnInit(): void {

    this.formulario = new FormGroup({
      username: new FormControl(),
      description: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })

  }



  // async onSubmit() {
  //   await this.usersService.create; 
  //   }


    onSubmit() {
     // Creación del objeto donde incluimos todos los campos del formulario y además la imagen
      let fd = new FormData();
      fd.append('picture', this.files[0]);
      fd.append('username', this.formulario.value.username);
      fd.append('password', this.formulario.value.password);
      fd.append('email', this.formulario.value.email);
  
  
      // Delegamos el envío del formulario en el servicio
      this.usersService.create(fd).then(result => {
        this.router.navigate(['/login']);
      })
    }
  
    onChange($event) {
      this.files = $event.target.files;
      console.log(this.files)
    }
  

}
