import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { GenericConfirmationPopupComponent } from '../util/generic-confirmation-popup/generic-confirmation-popup.component';
import { GenericConfirmationPopupData } from '../util/generic-confirmation-popup/models/generic-confirmation-popup-model';
import { GenericConfirmationPopupResult } from '../util/generic-confirmation-popup/models/generic-confirmation-popup-result';
import { BankRmChangeGhService } from './services/bank-rm-change-gh.service';

@Component({
  selector: 'app-bank-rm-change-gh',
  templateUrl: './bank-rm-change-gh.component.html',
  styleUrls: ['./bank-rm-change-gh.component.css']
})
export class BankRmChangeGhComponent implements OnInit {
  currentGroupHead:string
  matTooltipPosition:string ;

  //popup details
  popupHeaderText:string;
  popupBodyText:string;

  constructor(private dataService: DataService, private router: Router,
    private dialog: MatDialog, private service: BankRmChangeGhService ) {
    // ideally we need to show manager Name here.
    this.currentGroupHead = this.dataService.userCredentials.managerID;
    this.matTooltipPosition = 'right';

    //popup specifics
    this.popupHeaderText = "Please confirm change";
    this.popupBodyText = "Are you sure you want to request for a new Group Head?";
   }

  ngOnInit() {
  }

  cancel(){
    //route back to homepage
    this.router.navigateByUrl('/home');
  }

  request(){
    //open confirmation popup. If confirmed, send a backend request to change GH.
    //if cancelled, remain on this page
    let _data: GenericConfirmationPopupData = new GenericConfirmationPopupData(this.popupHeaderText, this.popupBodyText);
    let dialogRef = this.dialog.open(GenericConfirmationPopupComponent, {
      width: '400px',
      minHeight: '200px',
      maxHeight: '500px',
      data: _data
    });
    dialogRef.afterClosed().subscribe((result)=>{
      console.log(result + " is the result from the dialog");
      if(GenericConfirmationPopupResult.success === result){
        // call service's method to send a request to backned.
        this.service.sendBackendRequestToChangeGH();
      }
      //else ignore
    });
    
  }

}
