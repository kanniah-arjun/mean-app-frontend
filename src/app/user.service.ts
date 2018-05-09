import { Injectable } from '@angular/core';
import { Http, HttpModule, Headers } from '@angular/http';
import { User } from './user';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  // retreiving UserService
  getUsers() {
    return this.http.get(process.env.NODE_GET)
      .map(res => res.json());
  }

  // add UserService
  addUser(newUser) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(process.env.NODE_POST, newUser, {headers: headers})
      .map(res => res.json());
  }

  // delete UserService
  deleteUser(id) {
    return this.http.delete(process.env.NODE_GET + id)
      .map(res => res.json());
  }

}
