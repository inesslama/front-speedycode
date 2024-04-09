import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextingComponent } from './texting/texting.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'send',component: TextingComponent},
  {path:'',component: LoginComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
