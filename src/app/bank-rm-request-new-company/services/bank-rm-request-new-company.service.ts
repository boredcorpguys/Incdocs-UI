import { Injectable } from '@angular/core';
import { DataService } from '../../data.service';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class BankRmRequestNewCompanyService {
  url:string;
  httpOptions : any;
  constructor(private http: HttpClient, private data: DataService) {
    this.url = '/incdocs/company/search';
    this.httpOptions = this.data.httpOptions;
   }

   fetchCompaniesMappedToMyGH(){
    return this.http.get<CompanyResponse>(this.url, this.data.httpOptions);
   }

   fetchCompaniesBasedOnparameter(parameterName: string, parameterValue: string){
    let url = this.url+ '?' + parameterName + '=' + parameterValue;
    return this.http.get<CompanyResponse>(this.url, this.data.httpOptions);
   }

}

export class CompanyResponse{

}
