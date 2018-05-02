import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CheckService {
  constructor(private http: HttpClient) { }

  //File users.json is located in assets folder and contains a valid user name/password combination for log on
  getUser() {
      return this.http.get('users.json');
    }

}
