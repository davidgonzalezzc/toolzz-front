import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tool } from './model/Tool';

@Injectable({
  providedIn: 'root'
})
export class ListToolsService {

  private url = './assets/tools.json';

  constructor(
    private httpClient: HttpClient
  ) { }

  getTools():Observable<Tool[]>{
    return this.httpClient.get<Tool[]>(this.url);
  }
}



