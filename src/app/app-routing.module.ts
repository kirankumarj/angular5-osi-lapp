import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LunchComponent } from './lunch/lunch.component';
import {RestApiComponent } from './rest-api/rest-api.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';
import { HomeComponent } from './home/home.component';

import { TestComponent } from './test/test.component';

const routes: Routes = [

	{
		path:'',
		component: LoginComponent
	},
	{
		path:'lunch',
		component: LunchComponent
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path:'view',
		component: ViewComponent
	},
	{
		path: 'restApi',
		component: RestApiComponent
  },
  {
		path: 'test/:id',
		component: TestComponent
	}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
