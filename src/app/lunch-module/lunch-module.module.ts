import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LunchModuleRoutingModule } from './lunch-module-routing.module';
import { NewLunchComponent } from '../new-lunch/new-lunch.component';

@NgModule({
  imports: [
    CommonModule,
    LunchModuleRoutingModule
  ],
  declarations: [NewLunchComponent]
})
export class LunchModuleModule { }
