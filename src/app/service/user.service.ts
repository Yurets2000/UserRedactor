import { Injectable } from '@angular/core';
import {User} from '../model/User';
import {USERS} from '../model/Users';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(USERS);
  }
}
