import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  name:string;
  role:string;
  id:string;


  constructor(private _data:DataService) { }

  ngOnInit() {
  }

  doInsertUser() {
    console.log("POST");
    let user= {
      "name": this.name,
      "role": this.role,
      "id": this.id,
  };
  if(this.name && this.role && this.id ){
    if(this._data.insertUser(user) === 'SUCESS'){
      alert('okkkk');
    }
  }
   // let url = `${this.apiRoot}/post`;
   // this.http.post(url, {moo:"foo",goo:"loo"}).subscribe(res => console.log(res.json()));
  }
}
