import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { DataService } from './data.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule , NgModel ,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { LunchComponent } from './lunch/lunch.component';

import {NgxPaginationModule} from 'ngx-pagination';

import { HttpClientModule } from '@angular/common/http';
import { RestApiComponent } from './rest-api/rest-api.component';
import { AddComponent } from './rest-api/add/add.component';
import { DeleteComponent } from './rest-api/delete/delete.component';
import { SearchComponent } from './rest-api/search/search.component';
import { AllComponent } from './rest-api/all/all.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MyDirective } from './home/myDirective';
import { ViewComponent } from './view/view.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    LunchComponent,
    RestApiComponent,
    AddComponent,
    DeleteComponent,
    SearchComponent,
    AllComponent,
    LoginComponent,
    HomeComponent,
    ViewComponent,
    MyDirective,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
