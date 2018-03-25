import { Role } from '../models/Role';
import { Injectable } from '@angular/core';
import { User } from './../models/User';
import { Mapping } from './../models/Mapping';
import { Company } from '../models/Company';
@Injectable()
export class AdminFetchCurrentUsersService {
  userList: Array<User> = new Array<User>();
  usernames: Array<string> = new Array<string>();
  constructor() {
    // ideally this should call backend to fetch the list of current RMs.
    // for now stubbing the data
    this.generateStubUserData();
  }

  private generateStubUserData() {
    const names: Array<string> = ['Vishnu', 'KK', 'Rahul', 'Alex', 'James', 'Gorman'];
    const corpus: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis
    vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur
    felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum
    enim, vel tempor sapien arcu a tellus.`;
    corpus.split(' ').map((word) => { if (word) { names.push(word); } });

    const roles: Array<Role> = [Role.ARM, Role.RM, Role.MOP];
    for (let index = 0; index < names.length; ++index) {
      this.userList.push(
        new User(
          names[index],
          'inc' + index,
          'emp' + (names.length - index),
          roles[this.getRandomNumber(0, roles.length)],
          this.getRandomMobileNumber(),
          names[index] + '@incdocs.com',
          this.getRandomDate(),
          this.getRandomDate(),
          this.generateMappings(names[index])
        ));
        this.usernames.push(names[index]);
    }
  }

  private getRandomRole(): Role {
    const roles: Array<Role> = [Role.ARM, Role.RM, Role.MOP];
    return roles[this.getRandomNumber(0, roles.length)];
  }

  private getRandomDate(): string {
    const d = new Date();
    const dd = new Date(d.getTime() - 1000000 * this.getRandomNumber(1, 1000));
    return dd.toLocaleString();
  }

  private getRandomCompany(): string {
    const companies = ['Reliance Industries', 'Amazon', 'LIC', 'Morgan Stanley', 'ICICI'];
    return companies[this.getRandomNumber(0, companies.length)];
  }



  private generateMappings(user: string): Array<Mapping> {
    const mappings: Array<Mapping> = [];
    const rand = this.getRandomNumber(1, 10);
    for (let i = 0; i < rand; ++i) {
      const mapping = new Mapping(user, this.getRandomCompany(), this.getRandomRole(), this.getRandomDate());
      mappings.push(mapping);
    }
    return mappings;
  }

  private getRandomMobileNumber(): number {
    let mobile = 9;
    for (let i = 0; i < 9; ++i) {
      mobile = (mobile * 10) + this.getRandomNumber(0, 10);
    }

    return mobile;
  }

  private getRandomNumber(low: number, up: number): number {
    return Math.floor(Math.random() * up) + low;
  }

  public getListOfUsers() {
    return this.userList;
  }

  public getStringListOfUsers(){
    return this.usernames;
  }

  public fetchUsersHeaders() {
    return ['name', 'incdocsID', 'employeeID', 'role', 'mobile', 'email', 'createdOn', 'lastModifiedOn'];
  }

  // TODO this method should call the backend service to fetch all the companies mapped to this user.
  // instead for now, stubbing the companies data.
  public getListOfCompaniesForUser(user: User): Map<string, Company> {
    return this.generateStubbedListOfCompaniesForUser(user);
  }

  private generateStubbedListOfCompaniesForUser(user: User): Map<string, Company> {
    const companies: Array<Company> = new Array<Company>();
    const companiesMap: Map<string, Company> = new Map<string, Company>();
    const mappings: Array<Mapping> = new Array<Mapping>();
    mappings.push(new Mapping(user.$name, 'Tata Steel Limited', user.$role, this.getRandomDate()));
    mappings.push(new Mapping(user.$name, 'Prism Cement Limited', user.$role, this.getRandomDate()));
    user.$mappings = mappings;
    const tata: Company = new Company('Tata Steel Limited', 'BBBCV1234D', null, null, null,  null, null, null);
    const prism: Company = new Company('Prism Cement Limited', 'RRRED3456D', null, null, null, null, null, null);
    companies.push(tata);
    companiesMap.set(tata.$name, tata);
    companies.push(prism);
    companiesMap.set(prism.$name, prism);
    return companiesMap;
  }

}
