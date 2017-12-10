import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RM } from './../models/RM';
@Component({
  selector: 'app-admin-delete-confirmation',
  templateUrl: './admin-delete-confirmation.component.html',
  styleUrls: ['./admin-delete-confirmation.component.css']
})
export class AdminDeleteConfirmationComponent implements OnInit {
  concatenatedData: string = '';
  constructor(public dialogRef: MatDialogRef<AdminDeleteConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Array<RM>) {
    this.data.forEach(_data => { this.concatenatedData += _data.name + ', '; });
    this.concatenatedData = this.concatenatedData.trim();
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
