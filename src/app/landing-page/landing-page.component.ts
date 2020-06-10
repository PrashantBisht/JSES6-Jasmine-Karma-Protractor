import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  uname: string;
  psw: string;

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.uname);
  }
}
