import { ListToolsService } from './../list-tools.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgbDropdownConfig, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../login.service';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  userLoggedIn = false;
  searchForm = new FormGroup({
    search: new FormControl('')
  });

  constructor(private loginService: LoginService,
    private listToolsService:ListToolsService,
    private dataService:DataService) { }

  ngOnInit(): void {

  }

  onSubmit():void{
    this.dataService.setSearchTerm(String(this.searchForm.value.search));
    console.log(this.searchForm.value.search);

  }



}
