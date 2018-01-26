import { Injectable } from '@angular/core';
import { Company } from './../models/Company';
import { AdminFetchCurrentUsersService } from './admin-fetch-current-users.service';
import { User } from './../models/User';
@Injectable()
export class AdminFetchCurrentCompaniesService {
  private companies: Array<Company>;
  constructor(
    private userService: AdminFetchCurrentUsersService
  ) {
    this.stubCompaniesList();
  }

  public getCurrentListOfCompanies(): Array<Company> {
    // currently returning stub data, once the services are ready, this would be a service call.
    return this.companies;
  }

  public getHeadersToDisplayInDeleteCompanyMappings(): Array<string> {
    return ['name', 'rm', 'arm1', 'arm2', 'mop1', 'mop2'];
  }

  private stubCompaniesList() {
    const users: Array<User> = this.userService.userList;
    this.companies = new Array<Company>();
    for (let i = 0; i < 100; ++i) {
      this.companies.push(new Company(
        'Company' + i,
        'PAN' + i,
        users[this.getRandomNumber(0, users.length)],
        users[this.getRandomNumber(0, users.length)],
        users[this.getRandomNumber(0, users.length)],
        users[this.getRandomNumber(0, users.length)],
        users[this.getRandomNumber(0, users.length)],
        users[this.getRandomNumber(0, users.length)],
      ));
    }
  }

  private getRandomNumber(low: number, up: number): number {
    return Math.floor(Math.random() * up) + low;
  }
}
