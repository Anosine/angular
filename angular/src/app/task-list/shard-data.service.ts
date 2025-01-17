import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  isLoggedIn: boolean = false;

  setLoggedIn(value: boolean) {
    this.isLoggedIn = value;
    console.log('User is logged set in:', this.isLoggedIn);
  }
  getLoggedIn() {
    console.log('User is logged get in:', this.isLoggedIn);
    return this.isLoggedIn;
  }

  constructor() { }
}
