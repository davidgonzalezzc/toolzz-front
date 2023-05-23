import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/User';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListUserService {

  private url = 'http://localhost:8010/user';
  constructor(
    private HttpClient: HttpClient
  ) { }

  getUsers():Observable<User[]>{
    return this.HttpClient.get<User[]>(this.url);
  }

  postUser(user:any): Observable<User>{
    return this.HttpClient.post<any>(this.url,user);
  };


}
