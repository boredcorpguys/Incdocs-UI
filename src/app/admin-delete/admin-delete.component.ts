import { Component, OnInit } from '@angular/core';
import { AdminFetchCurrentUsersService } from './services/admin-fetch-current-users.service';
import { User } from './models/User';
import { MatListOption } from '@angular/material/list';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AdminDeleteConfirmationComponent } from './admin-delete-confirmation/admin-delete-confirmation.component';

@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin-delete.component.html',
  styleUrls: ['./admin-delete.component.css']
})
export class AdminDeleteComponent implements OnInit {
  userList: Array<User>;
  userCache: Array<User>;
  userMap: Map<string, User>;
  constructor(private userService: AdminFetchCurrentUsersService,
    public dialog: MatDialog
  ) {
    this.userList = userService.getListOfUsers();
    this.userCache = userService.getListOfUsers();
    this.userMap = new Map<string, User>();
    this.populateRMMap();
  }

  private populateRMMap() {
    this.userList.forEach((user: User) => {
      this.userMap.set(user.incdocsID, user);
    });
  }
  ngOnInit() {
  }

  deleteUsers(selections: Array<MatListOption>) {
    const selectedUsers: Array<User> = new Array<User>();
    selections.forEach(selection => {
      selectedUsers.push(this.userMap.get(selection.value));
    });
    this.openConfirmationBox(selectedUsers);
  }

  private openConfirmationBox(selectedUsers: Array<User>) {
    // this should open a confirmation box. If cancelled on confirmation box, do nothing. else, go ahead and make the backend call.
    console.log(selectedUsers);
    const dialogRef = this.dialog.open(AdminDeleteConfirmationComponent, {
      width: '300px',
      height: '300px',
      data: selectedUsers,
      hasBackdrop: true,
      disableClose: false
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      this.handleDeleteConfirmation(result, selectedUsers);
    });
  }

  private handleDeleteConfirmation(result: boolean, selectedRMs: Array<User>) {
    console.log(result);
    if (!result) {
      // do nothing
    } else {
      // Should open one more confirmation box, to ask if they want to map the companies to new RMs.
    }
  }

  applyFilter(searchValue: string) {
    if (!searchValue) {
      this.userList = this.userCache;
    } else {
      const temp: Array<User> = new Array<User>();
      this.userCache.forEach(element => {
        if (element.name.indexOf(searchValue) !== -1) {
          temp.push(element);
        }
      });
      this.userList = temp;
    }
  }

}
