import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModifyMappingsRow } from './../models/ModifyMappingsRow';
@Component({
  selector: 'app-admin-update-mapping-popup',
  templateUrl: './admin-update-mapping-popup.component.html',
  styleUrls: ['./admin-update-mapping-popup.component.css']
})
export class AdminUpdateMappingPopupComponent implements OnInit {
  matTooltipPosition: string;

  constructor(
    public dialogRef: MatDialogRef<AdminUpdateMappingPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModifyMappingsRow
  ) {
    this.matTooltipPosition = 'right';
  }


  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
