import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { TableComponent } from './components/table/table.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { MainComponent } from './template/main/main.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component: MainComponent,children:[
    {path:'',component:TableComponent},
    {path:'register',component:RegisterComponent},
    {path:'update',component:UpdateUserComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
