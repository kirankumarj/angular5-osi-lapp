import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  name:string;
  role:string;
  id:string;
  users:any;

  constructor(private _data:DataService) { }

  ngOnInit() {
  }
  doSearchUser() {
    //console.log("POST");
    let user= {
      "name": this.name,
      "role": this.role,
      "id": this.id,
  };
  if(this.name || this.role || this.id ){
    console.log(this._data.searchUser(user));
    this._data.searchUser(user).subscribe(response => this.users = response);
    console.log(this.users);
  }
   // let url = `${this.apiRoot}/post`;
   // this.http.post(url, {moo:"foo",goo:"loo"}).subscribe(res => console.log(res.json()));
  }
}
