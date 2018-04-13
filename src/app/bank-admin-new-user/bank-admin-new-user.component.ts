  import { Component, OnInit } from '@angular/core';
import { BankAdminNewUserService, UserRole, CreateUserModel } from './services/bank-admin-new-user.service';
import { MatSnackBar } from '@angular/material';
import { HttpEvent } from '@angular/common/http';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BankAdminCreateNewUserPopupComponent } from './sub-components/bank-admin-create-new-user-popup/bank-admin-create-new-user-popup.component';
import { trigger, transition, useAnimation, AnimationMetadata } from '@angular/animations';
import { bounceInDown, bounceOutRight, bounceOutDown} from 'ng-animate/lib/bouncing';
import { fadeInDown } from 'ng-animate/lib/fading';

@Component({
  selector: 'app-new-rm',
  templateUrl: './bank-admin-new-user.component.html',
  styleUrls: ['./bank-admin-new-user.component.css'],
  animations: [
    trigger('showOrHideGroupHead', [
      transition('void => true', useAnimation(bounceInDown,{params: { timing: 2}})),
      transition('true => void', useAnimation(bounceOutDown,{params: { timing: 2}}))
    ])
  ]
})
export class BankAdminNewUserComponent implements OnInit {
  matTooltipPosition: string;
  roles: Array<UserRole>;
  ghRoleID: number;
  adminRoleID: number;

  employeeName: string;
  employeeID: string;
  roleID: number;
  ghID: string;

  constructor(private service: BankAdminNewUserService, private snackBar: MatSnackBar, private data: DataService, private router: Router,
    private dialog: MatDialog) {
    this.matTooltipPosition = 'right';
    this.fetchRoles();
  }

  fetchRoles() {
    this.service.fetchRoles().subscribe((result: any) => {
      console.log(result);
      this.service.setGHRoleIDAndAdminRoleID(result);
      this.roles = result;
    }, (error) => {
      console.log(error);
    });
  }

  showGHInput(): boolean {
    return this.service.showGHInput(this.roleID);
    // return (this.roleID != this.ghRoleID) && (this.roleID != this.adminRoleID);
  }


  submit() {
    let model = new CreateUserModel(this.employeeName, this.roleID, this.employeeID, this.ghID);
    this.service.createUser(model).subscribe((result: any) => {
      console.log(result);
      let data = {
        'input': model,
        'output': result
      };
      this.handleStatusUpdate(data);
      // this.routeToHomePage();
    }, (error) => {
      if (error.status == 200) {
        let data = {
          'input': model,
          'output': error.error.text
        };
        this.handleStatusUpdate(data);
        // this.routeToHomePage();
        return;
      }
      console.log(error);
      this.handleErrorState(error.message);
    });
  }

  routeToHomePage() {
    this.router.navigateByUrl("/home");
  }

  handleErrorState(msg: string) {
    this.snackBar.open(msg, "", {
      duration: 3000
    });
  }

  handleStatusUpdate(_data: any) {
    let dialogRef = this.dialog.open(BankAdminCreateNewUserPopupComponent, {
      width: '400px',
      minHeight: '200px',
      maxHeight: '500px',
      data: _data
    });
    dialogRef.afterClosed().subscribe((result)=>{
      console.log(result + " is the result from the dialog");
    });
  }

  ngOnInit() {
  }

}
