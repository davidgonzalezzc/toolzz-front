import { ListUserService } from './../list-user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { User2 } from '../model/User2';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    last: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    birthday: new FormControl(''),
    role: new FormControl('')
  });

  userObject: User2 ={
    name: '',
    last:'',
    email:'',
    password:'',
    birthday:'',
    role:''
  }


  constructor(private fb: FormBuilder,private userService:ListUserService) {

   }

  ngOnInit(): void {


  }

  onSubmit():void{
    this.userObject.name = String(this.user.value.name);
    this.userObject.last = String(this.user.value.last);
    this.userObject.email = String(this.user.value.email);
    this.userObject.password = String(this.user.value.password);
    this.userObject.birthday = String(this.user.value.birthday);
    this.userObject.role = String(this.user.value.role);
    this.userService.postUser(this.userObject).subscribe();
    alert("Creado");
  }

}
