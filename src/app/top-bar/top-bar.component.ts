import { ListToolsService } from './../list-tools.service';
import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../login.service';
import { FormControl, FormGroup } from '@angular/forms';

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
    private listToolsService:ListToolsService) { }

  ngOnInit(): void {
  }

  onSubmit():void{

  }



}
