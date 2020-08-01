import { loginSuccess } from './../../state/auth/auth.actions';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { login } from "src/app/state/auth/auth.actions";

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

  theme$: Observable<boolean>;

  constructor(private router: Router,
              private readonly store: Store<{themeState: boolean, authState: boolean}>) { 
    this.theme$ = store.pipe(select('themeState'));
    this.store.pipe(select('authState')).subscribe(isSuccess => {
      if (isSuccess) {
        this.router.navigate(['']);
      }
    })
  }

  ngOnInit(): void {
  }

  singIn() {
    if (!this.loginForm.valid)
      return;
    // test the url here
    this.store.dispatch((login(this.loginForm.getRawValue())));
  }
}
