import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import 'rxjs/add/operator/do';
import {AuthService} from './auth.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {
  }


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.auth.isLoggedIn().do(loggedIn => {
      if (!loggedIn) {
        this.router.navigate(['/login']);
      }
    });
  }
}
