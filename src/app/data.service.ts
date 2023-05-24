import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: string = '';

  setSearchTerm(term:string){
    this.data = term;
  }
}
