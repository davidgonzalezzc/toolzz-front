import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    login: '',
    password:'',
  });


  constructor(private formBuilder:FormBuilder,
    private loginService:LoginService,
    public router:Router) {

  }
  ngOnInit(): void {

  }
  onSubmit():void{

  }
  /*
  onSubmit():void{
    let userParam:string;
    let passParam:string;
    userParam = ''+this.checkoutForm.value.login;
    passParam = ''+this.checkoutForm.value.password;
    console.log('JAJA');
    this.loginService.login(userParam,passParam).subscribe(
      data=>  {
        console.log(data);
        this.loginService.setToken(data.token);
        this.router.navigateByUrl('/');
    });
    this.checkoutForm.reset();
  }*/
}
