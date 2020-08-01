import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'acs-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  theme$: Observable<boolean>;

  constructor(private readonly store: Store<{themeState: boolean}>) { 
    this.theme$ = store.pipe(select('themeState'));
  }

  ngOnInit(): void {
  }

}
