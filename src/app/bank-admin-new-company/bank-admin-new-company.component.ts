import { Component, OnInit } from '@angular/core';
import { BankAdminNewCompanyService, CreateCompanyModel } from './services/bank-admin-new-company.service';
import { MatSnackBar } from '@angular/material';
import { HttpEvent } from '@angular/common/http';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bank-admin-new-company',
  templateUrl: './bank-admin-new-company.component.html',
  styleUrls: ['./bank-admin-new-company.component.css']
})
export class BankAdminNewCompanyComponent implements OnInit {

  companyName: string;
  panNumber: string;
  companyID: string;

  matTooltipPosition: string;
  constructor(private service: BankAdminNewCompanyService, private snackBar: MatSnackBar, private data: DataService, private router: Router) {
    this.matTooltipPosition = 'right';
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.companyName + this.panNumber + this.companyID);
    this.service.createCompany(new CreateCompanyModel(this.companyName, this.companyID, this.panNumber)).subscribe((result)=>{
      console.log(result);
      this.routeToHomePage();
    },(error)=>{
      console.log(error);
      this.handleErrorStatus(error.message);
    });

  }

  routeToHomePage(){
    this.router.navigateByUrl("/home");
  }

  handleErrorStatus(error:string) {
    this.snackBar.open(error, "", {
      duration: 3000
    });
  }

  updateID() {
    const initials: string = this.getInitialsOfCompany();
    const panLast4Digits: string = this.getLast4DigitsOfPan();
    this.companyID = initials + panLast4Digits;
  }

  getInitialsOfCompany(): string {
    if (!this.companyName) {
      return "";
    }
    let initials: string = "";
    let arr = this.companyName.split(" ");
    arr.map((name) => { name.toUpperCase(); });
    arr.forEach((name) => {
      if(name){
        initials += name.charAt(0).toUpperCase();
      }
    });
    return initials;
  }

  getLast4DigitsOfPan(): string {
    if (!this.panNumber) {
      return "";
    }
    let last4Digits: string = this.panNumber.substring(this.panNumber.length - 4);

    return last4Digits;
  }
}
