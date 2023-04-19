import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListToolComponent } from './list-tool/list-tool.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: '', component: ListToolComponent },
{ path:'login',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
