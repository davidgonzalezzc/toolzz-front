import { ListToolsService } from './../list-tools.service';
import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
userLoggedIn = false;

  constructor(private loginService: LoginService,
    private listToolsService:ListToolsService) { }

  ngOnInit(): void {
  }



}
