import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AdminFetchCurrentUsersService } from '../services/admin-fetch-current-users.service';
import { User } from '../models/User';
import {Company} from '../models/Company';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { MatListOption } from '@angular/material/list';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AdminDeleteConfirmationComponent } from './admin-delete-confirmation/admin-delete-confirmation.component';
import { AdminFetchCurrentCompaniesService } from '../services/admin-fetch-current-companies.service';
import { AdminDeleteMappingConfirmationComponent } from './admin-delete-mapping-confirmation/admin-delete-mapping-confirmation.component';
import { AdminUserModifyPopupComponent } from '../admin-modify/admin-user-modify-popup/admin-user-modify-popup.component';

//TODO
// 1. On Delete mapping page, sorting and pagination doesnt work because of ViewChild decorator
// 2. Also, sorting doesnt work as Company doesnt directly have the strings and has Users instead
@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin-delete.component.html',
  styleUrls: ['./admin-delete.component.css']
})
export class AdminDeleteComponent implements OnInit, AfterViewInit {

  displayedColumns: string[];
  dataSource: MatTableDataSource<User>;

  displayedColumnsForCompanies: string[];
  dataSourceForCompanies: MatTableDataSource<Company>;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  constructor(private userService: AdminFetchCurrentUsersService,
    private companiesService: AdminFetchCurrentCompaniesService,
    public dialog: MatDialog
  ) {
    this.displayedColumns = this.userService.fetchUsersHeaders();
    this.dataSource = new MatTableDataSource(this.userService.getListOfUsers());

    this.displayedColumnsForCompanies = this.companiesService.getHeadersToDisplayInDeleteCompanyMappings();
    this.dataSourceForCompanies = new MatTableDataSource(this.companiesService.getCurrentListOfCompanies());
  }


  ngOnInit() {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSourceForCompanies.paginator = this.paginator;
    this.dataSourceForCompanies.sort = this.sort;
  }

  handleRowClick(row: User) {
    console.log(row);
    this.openConfirmationBox(row);
  }

  handleDeleteMappingRowClick(row: Company){
    this.openConfirmationBoxForDeleteMapping(row);
  }



  private openConfirmationBox(selectedUser: User) {
    // this should open a confirmation box. If cancelled on confirmation box, do nothing. else, go ahead and make the backend call.
    console.log(selectedUser);
    const dialogRef = this.dialog.open(AdminDeleteConfirmationComponent, {
      width: '600px',
      height: '550px',
      data: selectedUser,
      hasBackdrop: true,
      disableClose: false
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      this.handleDeleteConfirmation(result, selectedUser);
    });
  }

  private handleDeleteConfirmation(result: boolean, selectedRMs: User) {
    console.log(result);
    if (!result) {
      // do nothing
    } else {
      // Should open one more confirmation box, to ask if they want to map the companies to new RMs.
    }
  }

  private openConfirmationBoxForDeleteMapping(company: Company){
    const dialogRef = this.dialog.open(AdminDeleteMappingConfirmationComponent,{
      width: '600px',
      height: '550px',
      data: company,
      hasBackdrop: true,
      disableClose: false
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  narrowMappings(filterValue: string) {
    filterValue = filterValue.toLowerCase().trim();
    this.dataSourceForCompanies.filter = filterValue; //TODO this will not search Users with their usernames as they are objects and not plain strings

  }

}
