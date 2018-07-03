import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  isTodayDateSelected:boolean;
  isOtherDateSelected:boolean;
  details:any;
  otherDatedetails:any;
  selectDate:Date;
  constructor(private _data:DataService) { 
    
  }

  ngOnInit() {
    var todayDate = new Date();
    var month = todayDate.getMonth() + 1;
    var reqDate = todayDate.getDate()+'/'+ month +'/'+todayDate.getFullYear(); 
    this._data.getDayWiseInfo(reqDate).subscribe(response => this.details = response);
  }

  SelectedTodayDate(){
      this.isTodayDateSelected = true;
      this.isOtherDateSelected = false;
  }


  SelectedOtherDate(){
    this.otherDatedetails = {};
    this.isOtherDateSelected = true;
    this.isTodayDateSelected = false;
  }


  getSelectedDateData(){
    var todayDate = new Date(this.selectDate);
    var month = todayDate.getMonth() + 1;
    var reqDate = todayDate.getDate()+'/'+ month +'/'+todayDate.getFullYear(); 
    console.log(todayDate+'-- '+reqDate);
    this._data.getDayWiseInfo(reqDate).subscribe(response => this.otherDatedetails = response);
  }
}
