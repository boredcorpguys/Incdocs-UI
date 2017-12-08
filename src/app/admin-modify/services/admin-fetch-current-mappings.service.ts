import { Injectable } from '@angular/core';
import { Mapping } from './../models/Mapping';
@Injectable()
export class AdminFetchCurrentMappingsService {

  constructor() { }

  public fetchCurrentMappings(): Mapping[] {
    // this should be a backend call. for now mocking it.
    return this.fetchStubbedMappings();
  }

  public fetchMappingsHeaders(): string[] {
    return this.fetchStubbedHeaders();
  }

  private fetchStubbedMappings(): Mapping[] {
    const mappings: Mapping[] = new Array<Mapping>();
    for (let i = 0; i < 100; ++i) {
      mappings.push(new Mapping(
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
