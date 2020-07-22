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

  constructor(private readonly sideNaveStore: Store<{sideNavState: boolean}>) { 
    this.$sideNavState = sideNaveStore.pipe(select('sideNavState'));
  }

  closeSideNav(){
    this.sideNaveStore.dispatch(close());
  }

  ngOnInit(): void {
  }

}
