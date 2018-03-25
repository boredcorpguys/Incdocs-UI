import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ModifyMappingsRow } from './models/ModifyMappingsRow';
import { AdminFetchCurrentMappingsService } from './services/admin-fetch-current-mappings.service';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AdminUpdateMappingPopupComponent } from './admin-update-mapping-popup/admin-update-mapping-popup.component';
import { AdminCompaniesActionsService } from '../services/admin-companies-actions.service';
import { User } from '../models/User';
import { AdminFetchCurrentUsersService } from '../services/admin-fetch-current-users.service';
import { AdminUserActionsService } from '../services/admin-user-actions.service';
import { AdminUserModifyPopupComponent } from './admin-user-modify-popup/admin-user-modify-popup.component';

//TODO 
//1. In User modify screen, sorting and pagination wont work for the same reason as for delete screens
//2.
@Component({
  selector: 'app-admin-modify',
  templateUrl: './admin-modify.component.html',
  styleUrls: ['./admin-modify.component.css']
})
export class AdminModifyComponent implements OnInit, AfterViewInit {
  displayedColumns: string[];
  dataSource: MatTableDataSource<ModifyMappingsRow>;

  displayedColumnsForUserDetails : string[];
  dataSourceForUserDetails: MatTableDataSource<User>;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  constructor(private mappingsService: AdminFetchCurrentMappingsService,
    public dialog: MatDialog,
    private adminCompanyActionsService: AdminCompaniesActionsService,
    private usersService: AdminFetchCurrentUsersService,
    private usersActionService: AdminUserActionsService
  ) {
    this.displayedColumns = this.mappingsService.fetchMappingsHeaders();
    this.dataSource = new MatTableDataSource(this.mappingsService.fetchCurrentMappings());

    this.displayedColumnsForUserDetails = this.usersService.fetchUsersHeaders();
    this.dataSourceForUserDetails = new MatTableDataSource(this.usersService.getListOfUsers());
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSourceForUserDetails.paginator = this.paginator;
    this.dataSourceForUserDetails.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  narrowUsers(filterValue: string){
    // filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSourceForUserDetails.filter = filterValue;
  }



  handleRowClick(row: ModifyMappingsRow) {
    console.log(row);
    this.openPopup(row);
  }

  handleUserModifyRowClick(row: User){
    this.openUserModifyPopup(row);
  }

  private openUserModifyPopup(row: User){
    const dialogRef = this.dialog.open(AdminUserModifyPopupComponent, {
      width: '500px',
      height: '550px',
      data: row,
      hasBackdrop: true,
      disableClose: false
    });
    dialogRef.afterClosed().subscribe((result: User) => {
      this.handleUserUpdate(result);
    });
  }

  private handleUserUpdate(user: User){
    console.log(user);
    this.usersActionService.updateUser(user);
  }


  private handleMappingUpdate(updatedMapping: ModifyMappingsRow) {
    // this should make an update service call to update the mapping.
    // server should make an entitlements check before committing this change
    this.adminCompanyActionsService.modifyMappingFromTableRow(updatedMapping);
  }

  private openPopup(row: ModifyMappingsRow) {
    const dialogRef = this.dialog.open(AdminUpdateMappingPopupComponent, {
      width: '500px',
      height: '550px',
      data: row,
      hasBackdrop: true,
      disableClose: false
    });

    dialogRef.afterClosed().subscribe((result: ModifyMappingsRow) => {
      this.handleMappingUpdate(result);
    });
  }

}
