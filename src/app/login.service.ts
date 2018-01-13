import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  loggedIn: boolean = false;
  constructor() { }

  isLoggedIn() {
    // return this.loggedIn;
    return true;
  }

  login(): boolean {
    this.loggedIn = true;
    return true; // Actually, we should return whether or not the credentials are correct
  }

  logoff(): boolean {
    this.loggedIn = false;
    return true;
  }
}
