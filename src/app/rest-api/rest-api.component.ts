import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AddComponent } from './add/add.component';
import { AllComponent } from './all/all.component';
import { SearchComponent } from './search/search.component';
import { DeleteComponent } from './delete/delete.component';
//import { User } from '../interfaces/Users';

@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.scss']
})
export class RestApiComponent implements OnInit {

  users:any;
  constructor() { }

  ngOnInit() {
    
  }

}