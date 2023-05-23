import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CookieService} from "ngx-cookie-service";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListToolComponent } from './list-tool/list-tool.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import { ModifyToolsComponent } from './modify-tools/modify-tools.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserComponent } from './user/user.component';
import { FormCreateToolComponent } from './form-create-tool/form-create-tool.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ListToolComponent,
    ListUserComponent,
    LoginComponent,
    ModifyToolsComponent,
    CreateUserComponent,
    UserComponent,
    FormCreateToolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
