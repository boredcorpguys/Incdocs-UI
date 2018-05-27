import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { GenericConfirmationPopupData } from './models/generic-confirmation-popup-model';
@Component({
  selector: 'app-generic-confirmation-popup',
  templateUrl: './generic-confirmation-popup.component.html',
  styleUrls: ['./generic-confirmation-popup.component.css']
})
export class GenericConfirmationPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GenericConfirmationPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GenericConfirmationPopupData) { }

  ngOnInit() {
  }

}
