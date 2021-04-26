import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];

  constructor(
    private http: HttpClient
  ) {
    this.users = [];
  }

  addUser(user: User): void {
    this.users.push(user);
    // let header: HttpHeaders = {headers: {'Content-Type':application/json,X-Master-Key':'$2b$10$XhcGFCqRwzuQXYOnyy96G.NfNH8IotyakshC/jNlYZPGEtvA785cq'}"}
    // this.http.post("https://api.jsonbin.io/v3/b", this.users,)
    // localStorage.setItem('allUsers', this.users)
  }

  getUserByName(username: string) {
    console.log(this.users)
    return this.users.find(el => el.username == username);
  }

  loginUser(user: User): boolean {
    let login = this.users.find(el => el.username == user.username && el.password == user.password)
    return login ? true : false;
  }
}
