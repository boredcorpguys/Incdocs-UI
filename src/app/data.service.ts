import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { User } from './login/services/login.service';
import { UserEntitlements } from './home/services/home.service';

@Injectable()
export class DataService {

  public endpoint: string;
  public httpOptions :any;
  public userCredentials: User;
  public userEntitlements: UserEntitlements;
  constructor() { 
    this.endpoint = 'http://localhost:8080/incdocs/';
    // this.httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Authorization': 'my-auth-token',
    //     'incdocsID':"kkolhar1_icici123",
    //     'password': "abac"
    //   })
    // };
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token',
        'incdocsID':"rmane_icici123",
        'password': "abac"
      })
    };
  }

}
