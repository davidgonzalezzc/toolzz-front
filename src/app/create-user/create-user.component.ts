import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { CreateUserService } from '../create-user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private fb: FormBuilder,private userService:CreateUserService) {

   }

  ngOnInit(): void {

  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    this.userService.addUser(f.value).subscribe(
      respuesta =>{console.log("Enviado");}
    );
      // false
  }

}
