import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent implements OnInit {


  matTooltipPosition:string;
  constructor() { 
    this.matTooltipPosition = 'right';
  }

  ngOnInit() {
  }

  submit(companyName: string, panNumber: string, cinNumber: string) {
    console.log(companyName + panNumber + cinNumber);
  }
}
