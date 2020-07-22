import { toggle } from './../../state/side-nav/side-nav.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acs-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  constructor(private readonly sideNavStore: Store) { }

  ngOnInit(): void {
  }

  toggle(){
    this.sideNavStore.dispatch(toggle());
  }

}
