import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/User';
import { Observable, catchError } from 'rxjs';
import { User2 } from './model/User2';

@Injectable({
  providedIn: 'root'
})
export class ListUserService {

  private url = 'http://localhost:8010/user';
  constructor(
    private HttpClient: HttpClient
  ) { }

  getUsers():Observable<User[]>{
    const url = 'http://localhost:8010/list';
    return this.HttpClient.get<User[]>(url);
  }

  postUser(user:User2): Observable<User2>{
    const url = 'http://localhost:8010/user';
    return this.HttpClient.post<User>(url,user);
  };

  getPaginatedUsers(page:number,size:number):Observable<any>{
    const url = `http://localhost:8010/searchPaginated?page=${page}&size=${size}&order=id&asc=true`;
    return this.HttpClient.get<any>(url);
  }


}
