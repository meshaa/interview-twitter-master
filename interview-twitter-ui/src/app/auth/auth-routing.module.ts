import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterContainerComponent} from "./register-container/register-container.component";
import {MainComponent} from "./main/main.component";
import {LoginContainerComponent} from "./login-container/login-container.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: '', component: MainComponent,
    children: [
      {path: 'login', component: LoginContainerComponent},
      {path: 'register', component: RegisterContainerComponent}
  ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
