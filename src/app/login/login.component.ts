import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  error = false;

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  login(login, password) {
    this.error = this.auth.login(login, password);
    if (!this.error)
      this.router.navigate(['admin']);
    return false;
  }

}
