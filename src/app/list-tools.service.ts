import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tool } from './model/Tool';
import { Tool2 } from './model/Tool2';

@Injectable({
  providedIn: 'root'
})
export class ListToolsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getTools():Observable<Tool[]>{
    const url = 'http://localhost:8090/api/list';
    return this.httpClient.get<Tool[]>(url);
  }

  getToolsPaginated(page: number, size: number):Observable<any> {
    const url = `http://localhost:8090/api/searchPaginated?page=${page}&size=${size}&order=id&asc=true`;
    return this.httpClient.get<any>(url);
  }

  post(tool :Tool2):Observable<Tool>{
    const url = 'http://localhost:8090/api/tool';
    return this.httpClient.post<Tool>(url,tool);
  }

  deleteTool(tool: Tool):Observable<Tool> {
    const url = `http://localhost:8090/api/tool/${tool.id}`;
    return this.httpClient.delete<Tool>(url);
  }

  searchToolByName(name: String):Observable<Tool[]>{
    const url = `http://localhost:8090/api/listByName/${name}`;
    if (name != null)
    return this.httpClient.get<Tool[]>(url);
    return this.httpClient.get<Tool[]>("http://localhost:8090/api/list");
  }

  getPaginatedTools(page:number,size:number):Observable<any>{
    const url = `http://localhost:8090/api/searchPaginated?page=${page}&size=${size}&order=id&asc=true`;
    return this.httpClient.get<any>(url);
  }




}



