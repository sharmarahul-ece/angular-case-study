import { MatCardModule } from '@angular/material/card';
import { HomeRoutingModule } from './home-routing.module';
import { EmployeesModule } from './../employees/employees.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// Components
import { LayoutComponent } from './layout/layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SideNavListComponent } from './side-nav-list/side-nav-list.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ToolbarComponent,
    SideNavListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    EmployeesModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatCardModule
  ],
  exports: [
    HomeRoutingModule
  ]
})
export class HomeModule { }
