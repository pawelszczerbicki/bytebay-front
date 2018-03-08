import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './login/login.component';
import {LoginGuard} from './login/login.guard';
import {Route, RouterModule} from '@angular/router';
import {AuthService} from './login/auth.service';
import { HomeComponent } from './home/home.component';

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'admin', component: AdminComponent, canActivate: [LoginGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
