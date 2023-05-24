import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { ListUserService } from '../list-user.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[] = [];
  pagedItems: User[] = [];
  pageSize = 6;
  currentPage = 0;
  constructor(
    private userService: ListUserService
  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.setPage(this.currentPage);
    this.userService.getPaginatedUsers(this.currentPage,this.pageSize).subscribe(data=> this.pagedItems = data.content);

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


  setPage(page: number): void {
    if (page < 1 || page > this.totalPages.length) {
      return;
    }

    this.currentPage = page;

    const startIndex = (page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedItems = this.users.slice(startIndex, endIndex);
  }

  get totalPages(): number[] {
    return Array.from({ length: Math.ceil(this.users.length / this.pageSize) }, (_, index) => index + 1);
  }

  previousPage(): void {
    this.setPage(this.currentPage - 1);
  }

  nextPage(): void {
    this.setPage(this.currentPage + 1);
  }




}
