import { Injectable } from '@angular/core';
import { ModifyMappingsRow } from './../models/ModifyMappingsRow';
@Injectable()
export class AdminFetchCurrentMappingsService {

  constructor() { }

  public fetchCurrentMappings(): ModifyMappingsRow[] {
    // this should be a backend call. for now mocking it.
    // or else, this should use the other service to fetch all the users, companies and then flatten this out
    return this.fetchStubbedMappings();
  }

  public fetchMappingsHeaders(): string[] {
    return this.fetchStubbedHeaders();
  }

  private fetchStubbedMappings(): ModifyMappingsRow[] {
    const mappings: ModifyMappingsRow[] = new Array<ModifyMappingsRow>();
    for (let i = 0; i < 100; ++i) {
      mappings.push(new ModifyMappingsRow(
        'Company' + i,
        'RM' + i,
        'ARM1' + i,
        'ARM2' + i,
        'ARM3' + i,
        'MOP1' + i,
        'MOP2' + i
      ));
    }
    return mappings;
  }

  private fetchStubbedHeaders(): string[] {
    return ['company', 'rm', 'arm1', 'arm2', 'arm3', 'middleOfficePerson1', 'middleOfficePerson2'];
  }
}
