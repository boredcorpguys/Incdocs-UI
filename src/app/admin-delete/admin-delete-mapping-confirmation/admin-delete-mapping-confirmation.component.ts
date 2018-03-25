import { AdminFetchCurrentUsersService } from '../../services/admin-fetch-current-users.service';
import { Mapping } from '../../models/Mapping';
import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';
import { User } from '../../models/User';
import { Company } from '../../models/Company';
import { Role } from '../../models/Role';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AdminUserActionsService } from './../../services/admin-user-actions.service';
import { Router } from '@angular/router';
import {ShowCompanyMappingDetails} from './models/ShowCompanyMappingDetails';
import { AdminCompaniesActionsService } from '../../services/admin-companies-actions.service';


@Component({
  selector: 'app-admin-delete-confirmation',
  templateUrl: './admin-delete-mapping-confirmation.component.html',
  styleUrls: ['./admin-delete-mapping-confirmation.component.css']
})
export class AdminDeleteMappingConfirmationComponent implements OnInit, AfterViewInit {
  displayedColumns: string[];
  dataSource: MatTableDataSource<ShowCompanyMappingDetails>;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  rows: Array<ShowCompanyMappingDetails>;
  currentlySelectedAll: boolean;
  company: Company;
  constructor(
    public dialogRef: MatDialogRef<AdminDeleteMappingConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public _company: Company,
    private snackBar: MatSnackBar,
    private companiesActionsService: AdminCompaniesActionsService
  ) {
    this.company = _company;
    const rows: Array<ShowCompanyMappingDetails> = this.rows = this.getUserListFromCompany(_company);
    this.dataSource = new MatTableDataSource(rows);
    this.displayedColumns = this.getDisplayedColumnsForCompanyMappings();
  }

  private getDisplayedColumnsForCompanyMappings():Array<string>{
    return ['selected', 'role', 'name', 'incdocsId', 'employeeId'];
  }

  private getUserListFromCompany(company:Company):Array<ShowCompanyMappingDetails>{
    const rows : Array<ShowCompanyMappingDetails> = new Array<ShowCompanyMappingDetails>();
    rows.push(new ShowCompanyMappingDetails(company.$arm1));
    rows.push(new ShowCompanyMappingDetails(company.$arm2));
    rows.push(new ShowCompanyMappingDetails(company.$rm));
    rows.push(new ShowCompanyMappingDetails(company.$mop1));
    rows.push(new ShowCompanyMappingDetails(company.$mop2));
    return rows;
  }

  private fetchHeadersForCompanyDetails(): Array<string> {
    return ['companyName', 'pan', 'mappedOn'];
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // This method should call companies actions service to delete this user
  deleteMappings(): void {
    this.rows.forEach((row: ShowCompanyMappingDetails)=>{
      if(row.$selected){
        console.log(row.$role + " is being deleted");
        this.companiesActionsService.deleteMappingFromCompany(this.company, Role[row.$role]);
      }
    });
    const content:string = 'The selected Mappings are deleted from ' + this.company.$name;
    const action:string='Ok';
    this.openSnackBar(content, action);
  }

  selectAllRows(){
    if(this.currentlySelectedAll){
      this.rows.forEach((row: ShowCompanyMappingDetails)=>{
        row.$selected = false;
      });
    }
    else{
      this.rows.forEach((row: ShowCompanyMappingDetails)=>{
        row.$selected = true;
      });
    }
    this.currentlySelectedAll = !this.currentlySelectedAll;
  }

  openSnackBar(snackContent: string, action: string) {
    const snackBarRef: MatSnackBarRef<any> = this.snackBar.open(snackContent, action, {
      duration: 5000,
    });
    snackBarRef.onAction().subscribe(() => {
      // alert("action clicked !!");
    });
  }


}
