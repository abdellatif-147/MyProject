import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './modules/usermodule/signin/signin.component';


const routes: Routes = [
  {path :'' , component:SigninComponent} ,
  {path:'user' , loadChildren: () => import('./modules/usermodule/user.module').then(module=>module.usermodel) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
