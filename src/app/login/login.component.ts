import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname: string;
  psw: string;
  error: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.uname);
    if(this.uname && this.psw) {
      this.error = '';
      this.authenticate(this.uname, this.psw);
    } else {
      this.error = 'UserName And Password are Required';
    }
  }

  authenticate(username: string, psw: string) {
    if (username === 'admin' && psw  === 'admin') {
      this.router.navigate(['/landingPage']);
    } else {
      this.error = 'Incorrect Username or Password';
    }
  }
}
