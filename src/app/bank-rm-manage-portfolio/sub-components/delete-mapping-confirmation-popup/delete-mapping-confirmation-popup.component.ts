import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DataRow } from '../../services/bank-rm-manage-portfolio-details.service';

@Component({
  selector: 'app-delete-mapping-confirmation-popup',
  templateUrl: './delete-mapping-confirmation-popup.component.html',
  styleUrls: ['./delete-mapping-confirmation-popup.component.css']
})
export class DeleteMappingConfirmationPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteMappingConfirmationPopupComponent>, @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    console.log(this.data);
  }

}
