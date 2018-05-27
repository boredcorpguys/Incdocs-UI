import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './../../data.service';
import { Observable } from 'rxjs';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {

  // isUserLoggedIn: boolean = false;
  url: string;
  loginStatus : LoginStatus;

  constructor(private http: HttpClient, private data: DataService) {
    this.url =  '/incdocs/user/login';
  }


  login(id: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token',
        'incdocsID':id,
        'password': password
      })
    };
    this.data.httpOptions = httpOptions;
    return this.http.get<UserCredentials>(this.url, this.data.httpOptions);

  }

  logout() {
    this.setLoginStatus(LoginStatus.LOGGEDOUT);
  }

  isLoggedIn(): LoginStatus {
    return this.loginStatus;
  }

  public setLoginStatus(status: LoginStatus){
    this.loginStatus = status;
  }

}

export enum LoginStatus{
  LOGGEDIN,
  LOGGEDOUT,
  LOGINERROR
}

export class User {
  incdocsID: string;
  empID: string;
  emailID: string;
  name: string;
  roleID: string;
  companyID: string;
  status: string;
  client: string;
  managerID: string;
}

export interface UserCredentials {
  user: User;
  entities: Array<string>;
}