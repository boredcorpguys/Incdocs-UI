import { Injectable } from '@angular/core';
import { User } from './../models/User';

@Injectable()
export class AdminFetchCurrentUsersService {
  userList: Array<User> = new Array<User>();
  constructor() {
    // ideally this should call backend to fetch the list of current RMs.
    // for now stubbing the data
    this.generateStubUserData();
  }

  private generateStubUserData() {
    const names: any = ['Vishnu', 'KK', 'Rahul', 'Alex', 'James', 'Gorman'];
    for (let index = 0; index < names.length; ++index) {
      this.userList.push(new User(names[index], 'inc' + index, 'emp' + (names.length - index)));
    }
  }

  public getListOfUsers() {
    return this.userList;
  }

}
