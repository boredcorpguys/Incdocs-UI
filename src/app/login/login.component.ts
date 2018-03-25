import { Component, OnInit } from '@angular/core';
import { LoginService, LoginStatus, UserCredentials } from './services/login.service';
import { MatSnackBar } from '@angular/material';
import { HttpEvent } from '@angular/common/http';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading: boolean;
  username: string;
  password: string;
  constructor(private loginService: LoginService, private snackBar: MatSnackBar, private data: DataService, private router: Router) {
    this.loading = false;
  }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    let validInput: boolean = this.validateInput();
    if (validInput) {
      this.loginService.login(this.username, this.password).subscribe((credentials: any) => {
        console.log(credentials);
        if (credentials.status === "ACTIVE") {
          this.loginService.setLoginStatus(LoginStatus.LOGGEDIN);
          this.data.userCredentials = credentials;
          this.routeToHomePage();
        } else {
          this.loginService.setLoginStatus(LoginStatus.LOGINERROR);
          this.handleInactiveStatus();
        }
      }, (error) => {
        console.log(error);
        this.loginService.setLoginStatus(LoginStatus.LOGINERROR);
      });
    }
    this.loading = false;

    // the login servie should actually send a flag status which says whether the credentials are correct or not
    //After that programmatically we should redirect to home page

  }

  routeToHomePage(){
    this.router.navigateByUrl("/home");
  }

  handleInactiveStatus() {
    this.snackBar.open("User profile is inactive in Incdocs system", "", {
      duration: 3000
    });
  }

  validateInput() {
    //put basic input validation checks here.
    if (!this.username || !this.password) {
      this.snackBar.open("Invalid username or password", "", {
        duration: 3000
      });
      return false;
    }
    return true;
  }

}
