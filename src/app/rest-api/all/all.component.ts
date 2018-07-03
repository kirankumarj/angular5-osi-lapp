import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  users:any;
  constructor(private _data:DataService) { }

  ngOnInit() {
    //this._data.getUsers().subscribe(response => this.users = response);
  }
}
