import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { User } from './model/User';
import { Observable } from 'rxjs';
import { UserLogin } from './model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
/*
  constructor(private http: HttpClient,private cookies:CookieService) {
  }*/
  constructor(private http:HttpClient){

  }

  /*login(user:string,password:string):Observable<any>{
    let newAuthUser = new UserLogin(user, password);
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(newAuthUser);
    let obs: Observable<any> = this.http.post("http://localhost:8081/login", body, {'headers':headers});
    obs.forEach(value => {
      console.log(value.token);
      this.setToken(value);
    })
    return obs;
  }



  signIn(email: string, password: string): void{
    console.log("Llega email -> "+email);
    console.log("Llega pass -> "+password);
    let newAuthUser = new UserLogin(email, password);
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(newAuthUser);
    let obs: Observable<any> = this.http.post("http://localhost:8081/login", body, {'headers':headers});
    obs.forEach(value => {
      console.log(value.token);
      this.setToken(value);
    })
  }

  setToken(value: any):void{
    const dateNow = new Date();
    let maxrole = ""
    dateNow.setHours(dateNow.getHours() + 1);
    if(!this.cookies.check("token")){
      this.cookies.set("token",value.token.toString(),dateNow);
      this.cookies.set("email",value.email.toString(),dateNow);
      this.cookies.set("bearer",value.bearer.toString(),dateNow);
      value.authorities.array.forEach((valor: any)=> {
        if(maxrole==""){
          maxrole = valor.authority.toString();
        }
        else{
          if(valor.authority.toString()=="ADMIN"){
            maxrole = valor.authority.toString();
          }
        }
      });
      this.cookies.set("role",maxrole,dateNow);
    }
  }

  createUser(newUser: User):void{

    const body=JSON.stringify(newUser);
    if(this.isAuthenticated()){
      let headers = { 'content-type': 'application/json',
    'Authorization': this.getBearer()+" "+this.getToken()};
      this.http.post("http://localhost:8080/users/create-user", body, {'headers':headers})
    }

  }

  deleteToken():void{
    this.cookies.delete("token");
    this.cookies.delete("email");
    this.cookies.delete("bearer");
    this.cookies.delete("role");
  }

  getToken():string{
    return this.cookies.get("token").toString();
  }
  getBearer():string{
    return this.cookies.get("bearer").toString();
  }

  isAdmin():boolean{
    return this.cookies.get("role").toString()=="ADMIN";
  }

  isAuthenticated():boolean{
    return this.cookies.check("token");
  }
*/
}
