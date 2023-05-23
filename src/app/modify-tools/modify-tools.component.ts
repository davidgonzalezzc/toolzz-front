import { Component, OnInit } from '@angular/core';
import { Tool } from '../model/Tool';
import { ListToolsService } from '../list-tools.service';

@Component({
  selector: 'app-modify-tools',
  templateUrl: './modify-tools.component.html',
  styleUrls: ['./modify-tools.component.css']
})
export class ModifyToolsComponent implements OnInit {

  tools: Tool[] = [];
  pagedItems: Tool[] = [];
  pageSize = 6;
  currentPage = 1;

  constructor(private toolService:ListToolsService) { }

  ngOnInit(): void {
    this.getTools();
    this.setPage(this.currentPage);
  }
  getTools(): void {
    this.toolService.getTools().subscribe(
      data => {
        this.tools = data;
        console.log('data',data);
      },
      error => {
        console.error('Error al obtener las herramientas:', error);
      }
    );
  }
  onDelete(tool:Tool):void{
    this.toolService.deleteTool(tool).subscribe(
    );
    alert("Eliminado");
  }
  ngOnChanges():void{
    this.getTools();
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
