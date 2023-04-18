import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListToolComponent } from './list-tool/list-tool.component';

const routes: Routes = [{ path: '', component: ListToolComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
