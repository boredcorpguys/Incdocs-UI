import { Component, OnInit } from '@angular/core';
import { AdminFetchCurrentRmsService } from './services/admin-fetch-current-rms.service';
import { RM } from './models/RM';
import { MatListOption } from '@angular/material/list';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AdminDeleteConfirmationComponent } from './admin-delete-confirmation/admin-delete-confirmation.component';

@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin-delete.component.html',
  styleUrls: ['./admin-delete.component.css']
})
export class AdminDeleteComponent implements OnInit {
  rmList: Array<RM>;
  rmCache: Array<RM>;
  rmMap: Map<string, RM>;
  constructor(private rmService: AdminFetchCurrentRmsService,
    public dialog: MatDialog
  ) {
    this.rmList = rmService.getListOfRMs();
    this.rmCache = rmService.getListOfRMs();
    this.rmMap = new Map<string, RM>();
    this.populateRMMap();
  }

  private populateRMMap() {
    this.rmList.forEach((rm: RM) => {
      this.rmMap.set(rm.incdocsID, rm);
    });
  }
  ngOnInit() {
  }

  deleteRMs(selections: Array<MatListOption>) {
    const selectedRMs: Array<RM> = new Array<RM>();
    selections.forEach(selection => {
      selectedRMs.push(this.rmMap.get(selection.value));
    });
    this.openConfirmationBox(selectedRMs);
  }

  private openConfirmationBox(selectedRMs: Array<RM>) {
    // this should open a confirmation box. If cancelled on confirmation box, do nothing. else, go ahead and make the backend call.
    console.log(selectedRMs);
    const dialogRef = this.dialog.open(AdminDeleteConfirmationComponent, {
      width: '300px',
      height: '300px',
      data: selectedRMs,
      hasBackdrop: true,
      disableClose: false
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      this.handleDeleteConfirmation(result, selectedRMs);
    });
  }

  private handleDeleteConfirmation(result: boolean, selectedRMs: Array<RM>) {
    console.log(result);
    if (!result) {
      // do nothing
    } else {
      // Should open one more confirmation box, to ask if they want to map the companies to new RMs.
    }
  }

  applyFilter(searchValue: string) {
    if (!searchValue) {
      this.rmList = this.rmCache;
    } else {
      const temp: Array<RM> = new Array<RM>();
      this.rmCache.forEach(element => {
        if (element.name.indexOf(searchValue) !== -1) {
          temp.push(element);
        }
      });
      this.rmList = temp;
    }
  }

}
