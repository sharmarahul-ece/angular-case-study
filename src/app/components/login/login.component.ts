import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'acs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('admin', [Validators.required]),
    password: new FormControl('admin@123', [Validators.required])
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  singIn() {
    if (!this.loginForm.valid)
      return;
    this.router.navigate(['']);
  }

}
