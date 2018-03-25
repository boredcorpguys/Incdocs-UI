import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './../../data.service';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class BankAdminNewCompanyService {
  url:string;
  httpOptions: any;
  constructor(private http: HttpClient, private data: DataService) {
    this.url = '/incdocs/admin/create/company';
    this.httpOptions = this.data.httpOptions;
   }

   createCompany(model: CreateCompanyModel){
    return this.http.post<CreateCompanyModel>(this.url, model, this.data.httpOptions);
   }

}

export class CreateCompanyModel{
  name: string;
  id: string;
  pan: string;

  constructor(_name: string, _id:string, _pan:string){
    this.name = _name;
    this.id = _id;
    this.pan = _pan;
  }
}