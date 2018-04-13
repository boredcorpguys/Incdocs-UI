import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './../../data.service';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class BankAdminNewUserService {

  url: string;
  urlToCreateUser: string;
  ghRoleID: number;
  adminRoleID: number;
  constructor(private http: HttpClient, private data: DataService) {
    this.url = '/incdocs/company/roles';
    this.urlToCreateUser = '/incdocs/admin/create/user';
  }

  fetchRoles() {
    return this.http.get<Array<UserRole>>(this.url, this.data.httpOptions);
  }

  createUser(model: CreateUserModel){
    return this.http.post<CreateUserModel>(this.urlToCreateUser, model, this.data.httpOptions);
  }

  setGHRoleIDAndAdminRoleID(roles: Array<UserRole>) {
    roles.forEach((role) => {
      if (role.roleName === 'GROUP_HEAD') {
        this.ghRoleID = role.roleID;
      }
      else if (role.roleName === 'ADMIN') {
        this.adminRoleID = role.roleID;
      }
    });
  }

  showGHInput(roleID: number): boolean {
    return roleID && (roleID != this.ghRoleID) && (roleID != this.adminRoleID);
  }

}

export class UserRole {
  roleID: number;
  roleName: string;
  description: string;
  active: boolean;
  client:boolean;
}

export class CreateUserModel{
  name:string;
  roleID: number;
  id: string;
  ghID: string;


	constructor(_name: string, _roleID: number, _id:string, _ghID: string ) {
    this.name = _name;
    this.roleID = _roleID;
    this.id = _id;
    this.ghID = _ghID;
  }
  
}