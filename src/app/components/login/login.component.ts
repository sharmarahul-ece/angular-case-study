import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

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
              private readonly store: Store<{themeState: boolean}>) { 
    this.theme$ = store.pipe(select('themeState'));
  }

  ngOnInit(): void {
  }

  singIn() {
    if (!this.loginForm.valid)
      return;
    this.router.navigate(['']);
  }

}
