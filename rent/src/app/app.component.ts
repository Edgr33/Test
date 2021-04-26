import { Component, OnInit } from '@angular/core';
import { User } from './model/user';
import { UserService } from './servicios/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rent'; 
  user: User

  userName

  constructor (
    private sUser: UserService
  ) {

  }

  ngOnInit() {
    this.localUserName()
  }

  localUserName () {
   let userName = localStorage.getItem('username')
   if (userName){
     console.log(this.sUser.getUserByName(userName))
     localStorage.removeItem('username')
   }
  }
}
