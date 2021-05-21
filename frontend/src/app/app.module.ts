import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './template/main/main.component';
import { TableComponent } from './components/table/table.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UpdateUserComponent } from './components/update-user/update-user.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TableComponent,
    RegisterComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    // 
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
