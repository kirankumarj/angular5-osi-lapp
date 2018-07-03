import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as MongoClient from 'mongodb';
import * as $ from 'jquery';
import mongoose from 'mongoose';
import { DataService } from '../data.service';


@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.scss']
})
export class LunchComponent implements OnInit {

  empName:string;
  empId:string;

  id:string;
  fromDate : string = "From Date";
  toDate : string = "To Date"; 
  selectedDates: boolean = false;
  dates: any[] = [];
  breakfast:boolean = true;
  lunch:boolean = true;
  dinner:boolean = true;
  datesSelected:boolean = false;

  startDate:Date;
  constructor(private route: ActivatedRoute, private _data:DataService) {
      this.route.params.subscribe(res => this.id = res.id);
  }
  days:number;

  ngOnInit() {
  }
  
  fromDateSelected(){
    this.dates = [];
    this.breakfast = true;
    this.lunch = true;
    this.dinner = true;
  }

  changedBreakfast(evt){
    if(this.dates){
      this.dates.forEach(selectedDate => {
        selectedDate.b = !selectedDate.b;
      });
    }
    console.log(this.dates);
  }
  
  changedLunch(){
    if(this.dates){
      this.dates.forEach(selectedDate => {
        selectedDate.l = !selectedDate.l;
      });
    }
    console.log(this.dates);
  }
  changedDinner(){
    if(this.dates){
      this.dates.forEach(selectedDate => {
        selectedDate.d = !selectedDate.d;
      });
    }
    console.log(this.dates);
  }
  toDateSelected() {
    this.datesSelected = true;
    this.dates = [];
    this.selectedDates = true;
    var date1 = new Date(this.fromDate);
    var date2 = new Date(this.toDate);

    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    var t  =  1 + diffDays ;
    var i=0;
    
    while(i < t){
        this.startDate = new Date(Date.parse(this.fromDate) + i * 24*60*60*1000);  
        
        var day = this.startDate.getDate();
        var monthIndex = this.startDate.getMonth();
        var year = this.startDate.getFullYear();
        var month = monthIndex + 1;
      console.log(day+'/'+month+'/'+year);
        var d = {
          day:day+'/'+month+'/'+year,
          id:this.empId,
          name:this.empName,
           dayName:this.startDate,
            hours: 8,
            b:true,
            l:true,
            d:true,
            selectedDate:this.startDate
        }
        this.dates.push(d);
        i++;
    }
    console.log(this.dates);
    }

    seletesdDateBChnage(index){
      this.dates[index].b = !this.dates[index].b;
    }

    seletesdDateLChnage(index){
      this.dates[index].l = !this.dates[index].l;
    }

    seletesdDateDChnage(index){
      this.dates[index].d = !this.dates[index].d;
    }

    empEnroll(){
      var res = this._data.empEnroll(this.dates);
      console.log(res);
    }
}
