import { Injectable } from '@angular/core';
import { user } from '../data/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false

  constructor() { }

  users: user[] = []

  isAuthenticated() {
    return this.isLoggedIn
  }

  getUsers() {
    return this.users
  }

  setLogged(logged: boolean) {
    this.isLoggedIn = logged
  }

  pushUser(user: user) {
    this.users.push(user)
  }
}
