import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class ModifyToolsService {
  private url = 'http://localhost:8010/user';
  constructor(
    private HttpClient: HttpClient
  ) { }

  getUsers():Observable<User[]>{
    return this.HttpClient.get<User[]>(this.url);
  }
}
