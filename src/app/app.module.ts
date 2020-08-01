import { AuthEffects } from './state/auth/auth.effects';
import { EmployeesEffects } from './state/employees/employees.effects';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

// State
import { SideNavReducer } from './state/side-nav/side-nav.reducer';
import { AuthReducer } from './state/auth/auth.reducer';
import { ThemeReducer } from './state/theme/theme.reducer';
import { EmployeesReducer } from './state/employees/employees.reducer';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    HomeModule,
    HttpClientModule,
    AppRoutingModule,
    EffectsModule.forRoot([EmployeesEffects, AuthEffects]),
    StoreModule.forRoot({
      sideNavState: SideNavReducer,
      authState: AuthReducer,
      themeState: ThemeReducer,
      employees: EmployeesReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
