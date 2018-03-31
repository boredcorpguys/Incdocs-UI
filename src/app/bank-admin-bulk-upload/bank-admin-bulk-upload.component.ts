import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';
import { BankAdminBulkUploadService } from './services/bank-admin-bulk-upload.service';
import * as FileSaver from 'file-saver';
import { HttpResponse } from 'selenium-webdriver/http';

@Component({
  selector: 'bank-admin-bulk-upload',
  templateUrl: './bank-admin-bulk-upload.component.html',
  styleUrls: ['./bank-admin-bulk-upload.component.css']
})
export class BankAdminBulkUploadComponent implements OnInit {
  step = 0;
  fileContent: any;
  loading: boolean;
  constructor(private snackBar: MatSnackBar, private service: BankAdminBulkUploadService) { }

  uploadFile(files: any, uploadType: string) {
    // how to get the file object here? Should we directly get the data or should we get reference to UI object
    // and then take data out of it?
    // This should use a service to send a POST ajax call to the backend. Should pass in a relative URI to this service.
    if (!files || !(files[0])) {
      this.openSnackBar('Please select a file to upload first!!', 'Dismiss');
      return;
    } else {
      console.log('data' + files[0].name);
      this.service.uploadFile(files[0], uploadType).subscribe((result) => {
        console.log(result);
      }, (error) => {
        console.log(error);
      });
      const snackContent: string = files[0].name + ' is being uploaded.';
      const action = 'view status';
      this.openSnackBar(snackContent, action);
    }
  }

  downloadFile(downloadType: string) {
    this.loading = true;
    this.service.downloadFile(downloadType).subscribe((result: any) => {
      if (result && result.status === 200) {
        FileSaver.saveAs(result.body, downloadType + ".xlsx");
        this.loading = false;
      }
    }, (error) => {
      console.log(error);
      this.loading = false;
    });
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
      console.log('action clicked !! This should redirect to the uploads page');
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  ngOnInit() {
  }

}
