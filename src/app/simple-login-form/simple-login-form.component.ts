import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-login-form',
  templateUrl: './simple-login-form.component.html',
  styleUrls: ['./simple-login-form.component.css']
})
export class SimpleLoginFormComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  onSubmit(){}

  constructor() { }

  ngOnInit(): void {
  }

}
