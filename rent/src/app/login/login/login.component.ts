import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(
    private sUser: UserService
  ) {
    this.user = new User('', '');
  }

  ngOnInit(): void {
    if (localStorage.getItem('username')) {
      console.log('Usuario loguedo');
    }
  }

  login(user: User) {
    if (this.sUser.loginUser(user)) {
      localStorage.setItem('username', user.username);
      console.log('Usuario logueado');
    } else {
      console.log('Login incorrecto');
    }
  }

  addUser(user: User) {
    if (this.sUser.getUserByName(user.username)) {
      console.log('El usuario ya existe intentelo con otro nombre');
    } else {
      this.sUser.addUser(user);
    }
  }

}
