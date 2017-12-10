import { Injectable } from '@angular/core';
import { RM } from './../models/RM';

@Injectable()
export class AdminFetchCurrentRmsService {
  rmList: Array<RM> = new Array<RM>();
  constructor() {
    // ideally this should call backend to fetch the list of current RMs.
    // for now stubbing the data
    this.generateStubRMData();
  }

  private generateStubRMData() {
    const names: any = ['Vishnu', 'KK', 'Rahul', 'Alex', 'James', 'Gorman'];
    for (let index = 0; index < names.length; ++index) {
      this.rmList.push(new RM(names[index], 'inc' + index, 'emp' + (names.length - index)));
    }
  }

  public getListOfRMs() {
    return this.rmList;
  }

}
