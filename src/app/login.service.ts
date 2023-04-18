import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: User[] = [];

  private url = './assets/user.json';


  constructor(
    private http: HttpClient
  ) { }

  login():boolean{
    this.http.get('./assets/user.json').subscribe(
      (data) => {console.log(data.toString)
      }
    )

    return true;
  }
}
