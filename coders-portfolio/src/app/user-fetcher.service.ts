import { Injectable } from '@angular/core';
import { user } from './user';
import { Observable, of, observable } from 'rxjs';
import { fakeUsers } from './testUsers';

@Injectable({
  providedIn: 'root'
})
export class UserFetcherService {
  getUser(id: number): user
  {
    return fakeUsers[id];
  }
  constructor() { }
}
