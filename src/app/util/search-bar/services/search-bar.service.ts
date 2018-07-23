import { Injectable } from '@angular/core';
import { SearchOption } from '../models/search-option';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  constructor() { }

  searchBasedOnParameter(url:string, queryParameter):Array<SearchOption>{
    //make backend call to fetch options and then map them in the form of SearchOption.
    //duplicate name and value if they are not different
    return null;
  }
}
