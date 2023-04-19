import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tool } from './model/Tool';

@Injectable({
  providedIn: 'root'
})
export class ListToolsService {

  private url = './assets/tools.json';
  private url2 = 'localhost:8090/tools'

  constructor(
    private httpClient: HttpClient
  ) { }

  getTools():Observable<Tool[]>{
    return this.httpClient.get<Tool[]>(this.url);
  }
}



