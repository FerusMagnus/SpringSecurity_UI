import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public registration(): void {
    localStorage.setItem('token', 'token');
  }

  public login(): void {
    localStorage.setItem('token', 'token');
  }

  public signOut(): void {
    localStorage.removeItem('token');
  }

  public getUser(): Observable<User> {
    return of({
      name: 'TestUser',
      email: 'TestUser@mail.com',
      password: 'qwerty'
    });
  }
}
