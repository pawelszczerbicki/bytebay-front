import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  @ViewChild('email') email: ElementRef;
  @ViewChild('password') password: ElementRef;
  error;
  wait;

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.error = '';
    this.wait = true;
    this.auth.login(this.email.nativeElement.value, this.password.nativeElement.value)
      .then(() => this.router.navigate(['/admin']))
      .catch(err => {
        this.error = err;
        this.wait = false;
      });
    return false;
  }
}

