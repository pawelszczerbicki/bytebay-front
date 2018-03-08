import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  private loggedIn = false;

  constructor() {
  }

  login(login, password) {
    this.loggedIn = login === 'admin' && password === 'admin';
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  logout() {
    this.loggedIn = false;
  }

}
