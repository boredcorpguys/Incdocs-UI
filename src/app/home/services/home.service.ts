import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './../../data.service';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class HomeService {
  url: string;
  entitlementsMap: Map<ActionType, Action> = new Map<ActionType, Action>();
  constructor(private http: HttpClient, private data: DataService) {
    this.url = "/incdocs/role/actions";
  }

  fetchEntitlements() {
    return this.http.get<UserEntitlements>(this.url, this.data.httpOptions);
  }

  populateEntitlementsMap(actions: Array<Action>) {
    actions.forEach((action: Action) => {
      this.entitlementsMap.set(ActionType[action.actionName], action);
    });
  }

  showActionItem(actionType: string): boolean {
    return this.entitlementsMap.has(ActionType[actionType]);
  }

}

export enum ActionType {
  CREATE_COMPANY = "CREATE_COMPANY",
  BULK_UPLOAD_MAPPINGS = "BULK_UPLOAD_MAPPINGS",
  VIEW_ROLES = "VIEW_ROLES",
  CREATE_USER = "CREATE_USER",
  VIEW_ANALYTICS = "VIEW_ANALYTICS",
  VIEW_STOCK_STATEMENT = "VIEW_STOCK_STATEMENT",
  APPROVE_STOCK_STATEMENT = "APPROVE_STOCK_STATEMENT",
  REJECT_STOCK_STATEMENT = "REJECT_STOCK_STATEMENT",
  MANAGE_PORTFOLIO = "MANAGE_PORTFOLIO",
  REQUEST_COMPANY = "REQUEST_COMPANY",
  CHANGE_GH = "CHANGE_GH"
}

export interface UserEntitlements {
  role: Role;
  actions: Array<Action>;
}

interface Role {
  roleID: string;
  roleName: string;
  description: string;
}

interface Action {
  actionID: string;
  actionName: string;
  description: string;
}