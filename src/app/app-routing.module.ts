import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SigninpassComponent } from './signinpass/signinpass.component';

const routes: Routes = [
  {path: '', component:SigninComponent},
  {path:'signinpass', component:SigninpassComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
