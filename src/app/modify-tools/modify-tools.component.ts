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
  constructor(private toolService:ListToolsService) { }

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

}
