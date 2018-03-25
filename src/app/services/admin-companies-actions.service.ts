import { Injectable } from '@angular/core';
import {Company} from './../models/Company';
import { Role } from './../models/Role';
import { ModifyMappingsRow } from '../admin-modify/models/ModifyMappingsRow';
@Injectable()
export class AdminCompaniesActionsService {

  //All the below functions should be making a backend call to make the db edit
  constructor() { }

  deleteCompany(company: Company){

  }

  addCompany(company: Company){

  }

  deleteMappingFromCompany(company: Company, role: Role){

  }

  modifyMappingFromCompany(modifiedCompany: Company){
    //make a PUT call based on Company ID or some identifier.
  }

  modifyMappingFromTableRow(row: ModifyMappingsRow){
    //this row would have flattenned user details.
    
  }
}
