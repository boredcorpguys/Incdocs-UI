import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-bulk-upload',
  templateUrl: './admin-bulk-upload.component.html',
  styleUrls: ['./admin-bulk-upload.component.css']
})
export class AdminBulkUploadComponent implements OnInit {
  step = 0;
  fileContent:any;
  constructor() { }

  uploadFile(data:any){
    //how to get the file object here? Should we directly get the data or should we get reference to UI object and then take data out of it?
    //This should use a service to send a POST ajax call to the backend. Should pass in a relative URI to this service.
    console.log("data" + data.files[0].name);
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
