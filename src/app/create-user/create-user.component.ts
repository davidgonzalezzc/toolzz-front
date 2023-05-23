import { ListUserService } from './../list-user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { CreateUserService } from '../create-user.service';
import { User } from '../model/User';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user = new FormGroup({
    name: new FormControl(''),
    last: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    birthday: new FormControl(''),
    role: new FormControl('')
  });



  constructor(private fb: FormBuilder,private userService:ListUserService) {

   }

  ngOnInit(): void {


  }

  onSubmit() {
    console.log("COMPONENT",this.user.value);
    this.userService.postUser(this.user.value);

  }

}
