import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  id;

  lists = [];

  listOption = [];

  constructor( private router: Router, private route: ActivatedRoute) {
    this.lists = [{ name: 'option_1',
    startDate: '12-09-2016',
    endDate: '12-10-2016' },
    { name: 'option_2',
    startDate: '12-09-2016',
    endDate: '12-10-2016' },
    { name: 'option_3',
    startDate: '12-09-2016',
    endDate: '12-10-2016' },
    { name: 'option_4',
    startDate: '12-09-2016',
    endDate: '12-10-2016' },
    { name: 'option_5',
    startDate: '12-09-2016',
    endDate: '12-10-2016' }
  ];
  }

  ngOnInit() {

    this.route.paramMap.pipe( switchMap((params: ParamMap) => this.id = params.get('id')));

    console.log("id" + this.id);

    this.listOption = [
      {
        name: 'option_1',
      },
      {
        name: 'option_2',
      },
      {
        name: 'option_3',
      },
      {
        name: 'option_4',
      },
      {
        name: 'option_5',
      },
    ];
  }

  checkEqual(name1, name2) {

    if ( name1 === name2 ) {
      return true;
    } else {
      return false;
    }
    // let result = false;
    // this.listOption.forEach( list => {
    //   if (list.name === listo.name) {
    //     result = true;
    //   }
    // }
    //   );

    //   return result;
    // // console.log(r);
    // //   return false;
  }

}
