import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { close } from 'src/app/state/side-nav/side-nav.actions';

@Component({
  selector: 'acs-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  $sideNavState:  Observable<boolean>;
  theme$: Observable<boolean>;

  constructor(private readonly store: Store<{sideNavState: boolean, themeState: boolean}>) { 
    this.$sideNavState = store.pipe(select('sideNavState'));
    this.theme$ = store.pipe(select('themeState'));
  }

  closeSideNav(){
    this.store.dispatch(close());
  }

  ngOnInit(): void {
  }

}
