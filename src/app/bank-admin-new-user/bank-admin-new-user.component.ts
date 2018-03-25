import { Component, OnInit } from '@angular/core';
import { BankAdminNewUserService, UserRole, CreateUserModel } from './services/bank-admin-new-user.service';
import { MatSnackBar } from '@angular/material';
import { HttpEvent } from '@angular/common/http';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-rm',
  templateUrl: './bank-admin-new-user.component.html',
  styleUrls: ['./bank-admin-new-user.component.css']
})
export class BankAdminNewUserComponent implements OnInit {
  matTooltipPosition: string;
  roles: Array<UserRole>;
  ghRoleID: number;

  employeeName: string;
  employeeID: string;
  roleID: number;
  ghID: string;

  constructor(private service: BankAdminNewUserService, private snackBar: MatSnackBar, private data: DataService, private router: Router) {
    this.matTooltipPosition = 'right';
    this.fetchRoles();
  }

  fetchRoles() {
    this.service.fetchRoles().subscribe((result: any) => {
      console.log(result);
      this.setGHRoleID(result);
      this.roles = result;
    }, (error) => {
      console.log(error);
    });
  }

  setGHRoleID(roles: Array<UserRole>) {
    roles.forEach((role) => {
      if (role.roleName === 'GROUP_HEAD') {
        this.ghRoleID = role.roleID;
      }
    });
  }

  submit() {
    this.service.createUser(new CreateUserModel(this.employeeName, this.roleID, this.employeeID, this.ghID)).subscribe((result:any)=>{
      console.log(result);
      this.handleStatusUpdate("Successfully created User");
      this.routeToHomePage();
    }, (error)=>{
      if(error.status == 200){
        this.handleStatusUpdate("Successfully created User");
        this.routeToHomePage();
        return;
      }
      console.log(error);
      this.handleStatusUpdate(error.message);
    });
  }

  routeToHomePage(){
    this.router.navigateByUrl("/home");
  }

  handleStatusUpdate(msg:string) {
    this.snackBar.open(msg, "", {
      duration: 3000
    });
  }

  ngOnInit() {
  }

}
