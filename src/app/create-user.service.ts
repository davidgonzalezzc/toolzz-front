import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  private url = 'http://localhost:8010/user';
  constructor(
    private http: HttpClient
  ) { }

  addUser(user:User):Observable<User>{
    return this.http.post<User>(this.url,user);
  }

}
