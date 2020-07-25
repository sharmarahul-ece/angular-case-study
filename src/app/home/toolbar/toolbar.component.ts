import { Observable } from 'rxjs';
import { toggle } from './../../state/side-nav/side-nav.actions';
import { toggle as themeToggle } from './../../state/theme/theme.actions';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acs-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  theme$: Observable<boolean>;
  constructor(private readonly store: Store<{themeState: boolean}>) { 
    this.theme$ = store.pipe(select('themeState'))
  }

  ngOnInit(): void {
  }

  toggleSideNav(){
    this.store.dispatch(toggle());
  }
  
  toggleTheme(){
    this.store.dispatch(themeToggle());
  }

}
