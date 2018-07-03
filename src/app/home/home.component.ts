import { Component, OnInit , ElementRef, Directive} from '@angular/core';
import 'lodash';

declare var jquery:any;
declare var $ :any;
declare var _:any;


// @Directive({
//   selector: ['testDirective']
// })

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(el : ElementRef) {
   
    $('#menu-outer').show();
    var list = [1,2,3,4,5];
    console.log(_.shuffle(list));

    el.nativeElement.style.display = 'none';
   }

  ngOnInit() {
  }

}
