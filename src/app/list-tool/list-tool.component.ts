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
  selectedBrand: string = '';
  tools: Tool[] = [];

  constructor(
    private toolService:ListToolsService
  ) { }



  ngOnInit(): void {
    this.getTools();
  }

  getTools(): void {
    this.toolService.getTools().subscribe(
      data => {
        this.tools = data;
      },
      error => {
        console.error('Error al obtener las herramientas:', error);
      }
    );
  }

getBrand(brand:String):void{
  this.tools = this.tools.filter(tool => tool.brand.toLowerCase() === brand.toLowerCase());
}


}
