import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CreateUserModel } from '../../services/bank-admin-new-user.service';
import {BankAdminNewUserService} from './../../services/bank-admin-new-user.service';
@Component({
  selector: 'app-bank-admin-create-new-user-popup',
  templateUrl: './bank-admin-create-new-user-popup.component.html',
  styleUrls: ['./bank-admin-create-new-user-popup.component.css']
})
export class BankAdminCreateNewUserPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BankAdminCreateNewUserPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private service: BankAdminNewUserService) { 
      console.log(data);
    }

  showGHSpecifics():boolean{
    return this.service.showGHInput(this.data.input.roleID);
  }

  ngOnInit() {
  }

}
