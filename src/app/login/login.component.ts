import { Component, OnInit, Input } from '@angular/core';
import { Router }                 from '@angular/router';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() isLogin;
  constructor(private router: Router) {
    $('#menu-outer').hide();
  }

  ngOnInit() {
  }
  validateUser(){
    this.router.navigate(['/home']);
  }
}
