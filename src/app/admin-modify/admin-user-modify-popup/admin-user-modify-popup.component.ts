import { Component, OnInit , Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../../models/User';

@Component({
  selector: 'app-admin-user-modify-popup',
  templateUrl: './admin-user-modify-popup.component.html',
  styleUrls: ['./admin-user-modify-popup.component.css']
})
export class AdminUserModifyPopupComponent implements OnInit {
  matTooltipPosition: string;
  constructor(
    public dialogRef: MatDialogRef<AdminUserModifyPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) { 
    this.matTooltipPosition = 'right';
  }

  ngOnInit() {
  }

}
