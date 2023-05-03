import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { ListUserService } from '../list-user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[] = [];

  constructor(
    private userService: ListUserService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers():void{
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.error('Error al obtener las herramientas:', error);
      }
    );
  }



}
