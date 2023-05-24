import { DataService } from './../data.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ListToolsService } from '../list-tools.service';
import { Tool } from '../model/Tool';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list-tool',
  templateUrl: './list-tool.component.html',
  styleUrls: ['./list-tool.component.css']
})
export class ListToolComponent implements OnInit,OnChanges {

  pagedItems: Tool[] = [];
  pageSize = 6;
  currentPage = 0;
  selectedName: string='';

  selectedBrand: string = '';
  tools: Tool[] = [];
  searchName = '';


  constructor(
    private toolService:ListToolsService,
    private dataService:DataService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }



  ngOnInit(): void {
    this.getTools();
    this.setPage(this.currentPage);
    this.toolService.getPaginatedTools(this.currentPage,this.pageSize).subscribe(data=> this.pagedItems = data.content);
    this.toolService.searchToolByName(this.dataService.data).subscribe(data=>{this.pagedItems=data; console.log(data);});
  }


  getTools(): void {
    this.toolService.getTools().subscribe(
      data => {
        this.tools = data;
        console.log(data);
      },
      error => {
        console.error('Error al obtener las herramientas:', error);
      }
    );
  }




  setPage(page: number): void {
    if (page < 1 || page > this.totalPages.length) {
      return;
    }

    this.currentPage = page;

    const startIndex = (page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedItems = this.tools.slice(startIndex, endIndex);
  }

  get totalPages(): number[] {
    return Array.from({ length: Math.ceil(this.tools.length / this.pageSize) }, (_, index) => index + 1);
  }

  previousPage(): void {
    this.setPage(this.currentPage - 1);
  }

  nextPage(): void {
    this.setPage(this.currentPage + 1);
  }



}
