import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'acs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  theme$: Observable<boolean>;

  constructor(private readonly store: Store<{themeState: boolean}>) { 
    this.theme$ = store.pipe(select('themeState'));
  }

  ngOnInit(): void {
  }

}
