import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService) { }

  ngOnInit() {
  }

  login(){
    this.validateInput(); 
    this.loginService.login(); 
    // the login servie should actually send a flag status which says whether the credentials are correct or not
    //After that programmatically we should redirect to home page

  }

  validateInput(){
    //put basic input validation checks here.
  }

}
