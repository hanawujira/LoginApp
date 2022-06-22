import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({});

  constructor(private loginService: LoginService, private router: Router) {

  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    const user = this.loginForm?.getRawValue();
    this.loginService.login(user).subscribe(result => {
      LoginService.setToken(result.authToken);
      this.router.navigate(['offers']);
    })
  }

}
