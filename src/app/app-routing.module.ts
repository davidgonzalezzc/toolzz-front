import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListToolComponent } from './list-tool/list-tool.component';
import { LoginComponent } from './login/login.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ModifyToolsComponent } from './modify-tools/modify-tools.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormCreateToolComponent } from './form-create-tool/form-create-tool.component';

const routes: Routes = [{ path: '', component: ListToolComponent },
{ path:'login',component:LoginComponent},
{ path:'users',component:ListUserComponent},
{ path:'tools',component:ModifyToolsComponent},
{ path:'create-user',component:CreateUserComponent},
{path:'form-create-tool',component:FormCreateToolComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
