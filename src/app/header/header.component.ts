import { Component, OnInit } from '@angular/core';
import { LoginService, LoginStatus } from '../login/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: LoginService) { }

  ngOnInit() {
  }

  showIcons(){
    //this should also check for Router state to see if we are in login page
    return this.service.isLoggedIn() === LoginStatus.LOGGEDIN;
  }

}
