import {Component, OnInit} from '@angular/core';
import {AuthService} from '../login/auth.service';
import {Router, RouterState} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

}
