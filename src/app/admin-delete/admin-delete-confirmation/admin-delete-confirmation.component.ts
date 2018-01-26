import { AdminFetchCurrentUsersService } from '../../services/admin-fetch-current-users.service';
import { Mapping } from '../../models/Mapping';
import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';
import { User } from '../../models/User';
import { Company } from '../../models/Company';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ShowUserToCompanyMapping } from './models/ShowUserToCompanyMapping';
import {AdminUserActionsService} from './../../services/admin-user-actions.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-delete-confirmation',
  templateUrl: './admin-delete-confirmation.component.html',
  styleUrls: ['./admin-delete-confirmation.component.css']
})
export class AdminDeleteConfirmationComponent implements OnInit, AfterViewInit {
  displayedColumns: string[];
  dataSource: MatTableDataSource<ShowUserToCompanyMapping>;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  user: User;
  companiesMap: Map<string, Company>;
  constructor(
    public dialogRef: MatDialogRef<AdminDeleteConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public _user: User,
    private userService: AdminFetchCurrentUsersService,
    private userActionsService: AdminUserActionsService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.user = _user;

    this.companiesMap = this.userService.getListOfCompaniesForUser(this.user);
    const mappings: Array<Mapping> = this.user.$mappings;
    const rows: Array<ShowUserToCompanyMapping> = new Array<ShowUserToCompanyMapping>();
    // rows.push(new ShowUserToCompanyMapping());
    mappings.forEach((mapping: Mapping) => {
      rows.push(new ShowUserToCompanyMapping(mapping.$company, this.companiesMap.get(mapping.$company).$pan, mapping.$mappedOn));
    });
    this.displayedColumns = this.fetchHeadersForCompanyDetails();
    this.dataSource = new MatTableDataSource(rows);
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

  // This method should call user actions service to delete this user
  // Also it should open another popup saying that these companies are currently unmapped and if the user wants to map them now.
  deleteUser(): void {
    this.userActionsService.deleteUser(this.user);
    // instead of opening another popup with same content(companies list) as in this popup,
    // opening a snackbar instead.
    const content = 'User: ' + this.user.$name + ' is deleted and his companies are now unmapped.';
    const action = 'Map Now';
    this.openSnackBar(content, action);
  }

  openSnackBar(snackContent: string, action: string) {
    const snackBarRef: MatSnackBarRef<any> = this.snackBar.open(snackContent, action, {
      duration: 5000,
    });
    snackBarRef.onAction().subscribe(() => {
      // alert("action clicked !!");
      // would it be better to use snackBar.openFromComponent? especially when we have to route to uploads page?
      // if action is View Status, then we should redirect to uploads page
      // else if action is dismiss, then we should do nothing
      console.log('To map unmapped companies, redirecting to Modify Mappings screen');
      this.router.navigateByUrl('/home');
    });
  }


}
