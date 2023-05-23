import { Component, OnInit } from '@angular/core';
import { ListToolsService } from '../list-tools.service';
import { Tool } from '../model/Tool';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list-tool',
  templateUrl: './list-tool.component.html',
  styleUrls: ['./list-tool.component.css']
})
export class ListToolComponent implements OnInit {


  pagedItems: Tool[] = [];
  pageSize = 6;
  currentPage = 1;


  selectedBrand: string = '';
  tools: Tool[] = [];
  searchName = '';


  constructor(
    private toolService:ListToolsService
  ) { }



  ngOnInit(): void {
    this.getTools();
    //this.listPaginated(this.currentPage,this.pageSize);
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
  list(index:number):void {
    this.toolService.getTools().subscribe(
      data => {
        console.log(data);
      },
      error =>{
        console.error('Error');
      }
    );
  }
  listPaginated(page:number,size:number):void{
    this.toolService.getToolsPaginated(page,size).subscribe(
      data=> {
        this.pagedItems = data.content;
        console.log(data);
      },
      error =>{
        console.error('Error');
      }
    )
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
