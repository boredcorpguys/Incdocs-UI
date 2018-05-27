import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankRmChangeGhService {

  constructor() {
    // Needs two services
    // 1. search service. when user types gh name, we need to hit backend and show autocomplete suggestions
    // 2. Service to take in GH change request. (could be PUT/POST)
  }

  sendBackendRequestToChangeGH(){
    console.log("sending backend request to change gh..");

  }
}
