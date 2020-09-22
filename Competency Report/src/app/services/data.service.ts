import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private allUsers = [];

  constructor() { }

  public saveUser(user) {
    this.allUsers.push(user);
  }

  public getUsers() {
    return this.allUsers;
  }
}
