import { Component, OnInit } from '@angular/core';
import { BankRmRequestNewCompanyService } from './services/bank-rm-request-new-company.service';

@Component({
  selector: 'app-bank-rm-request-new-company',
  templateUrl: './bank-rm-request-new-company.component.html',
  styleUrls: ['./bank-rm-request-new-company.component.css']
})
export class BankRmRequestNewCompanyComponent implements OnInit {

  companyName: string = undefined;
  companyPAN: string = undefined;
  ghName: string = undefined;
  searchCriteria = [
    {value: 'name', viewValue: 'Company Name'},
    {value: 'pan', viewValue: 'Company PAN'},
    {value: 'ghName', viewValue: 'Group Head Name'}
  ];
  constructor(private service: BankRmRequestNewCompanyService) { 

  }

  ngOnInit() {
  }

  fetchResultsBasedOnQuery(search:string, queryString: string){
    console.log(search + queryString);
    //this should call service's method to fetch grid data based on search criteria
    this.service.fetchCompaniesBasedOnparameter(search, queryString);
    //parse these rows to populate grid
  }

}
