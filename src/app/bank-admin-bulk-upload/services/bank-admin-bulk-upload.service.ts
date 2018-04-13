import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { DataService } from './../../data.service';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import * as FileSaver from 'file-saver';
import { ResponseContentType } from '@angular/http';
import { RequestOptionsArgs } from '@angular/http';

@Injectable()
export class BankAdminBulkUploadService {

  urlToDownloadBulkUserUploadTemplate: string;
  urlToDownloadBulkCompaniesUploadTemplate: string;
  urlToUploadBulkUsers: string;
  urlToUploadBulkCompanies:string;
  constructor(private http: HttpClient, private data: DataService) { 
    this.urlToDownloadBulkUserUploadTemplate = "/incdocs/admin/bulk/user/download";
    this.urlToDownloadBulkCompaniesUploadTemplate = "/incdocs/admin/bulk/company/download";
    this.urlToUploadBulkUsers="/incdocs/admin/bulk/user/upload";
    this.urlToUploadBulkCompanies="/incdocs/admin/bulk/company/upload";
  }
    
  uploadFile(file:any, uploadType:string){
    let url: string;
    if(uploadType === BulkUploadType.BulkUsersUpload){
      url = this.urlToUploadBulkUsers;
    }
    else if (uploadType === BulkUploadType.BulkCompaniesUpload){
      url = this.urlToUploadBulkCompanies;
    }
    let formData = new FormData();
    formData.set("file",file);
    let httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type':  'multipart/form-data',
        'Authorization': 'my-auth-token',
        'incdocsID':"kkolhar1_icici123",
        'password': "abac"
      })
    };
    return this.http.post(url, formData, httpOptions);
  }

  downloadFile(downloadType: string){
    let url: string;
    if(downloadType === BulkUploadType.BulkUsersUpload){
      url = this.urlToDownloadBulkUserUploadTemplate;
    }
    else if (downloadType === BulkUploadType.BulkCompaniesUpload){
      url = this.urlToDownloadBulkCompaniesUploadTemplate;
    }
    let httpOptions = this.data.httpOptions;
    httpOptions['responseType'] = 'blob';
    // let httpOptions = {
    //   headers: new HttpHeaders({
    //     'Authorization': 'my-auth-token',
    //     'incdocsID':"kkolhar1_icici123",
    //     'password': "abac"
    //   }),
    //   responseType:'blob'
    // };
    let req = new HttpRequest("GET",url, httpOptions);
    return this.http.request(req);
  }

}

export class BulkUploadType{
  static  BulkUsersUpload = "BulkUsersUpload";
  static  BulkCompaniesUpload = "BulkCompaniesUpload";
}
