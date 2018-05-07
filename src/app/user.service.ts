import { Injectable } from '@angular/core';
import { Http, HttpModule, Headers } from '@angular/http';
import { User } from './user';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  // retreiving UserService
  getUsers() {
    return this.http.get('35.232.173.186:80/api/users')
      .map(res => res.json());
  }

  // add UserService
  addUser(newUser) {
    const headers = new Headers();
    headers.append('COntent-Type', 'application/json');
    return this.http.post('35.232.173.186:80/api/user', newUser, {headers: headers})
      .map(res => res.json());
  }

  // delete UserService
  deleteUser(id) {
    return this.http.delete('35.232.173.186:80/api/user/' + id)
      .map(res => res.json());
  }

}
