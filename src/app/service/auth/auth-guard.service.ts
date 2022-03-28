import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    const username = window.sessionStorage.getItem('auth-username');
    // const role = window.sessionStorage.getItem('auth-role');
    console.log(username);
    // console.log(role);

    if (!username) {
      console.log('usuario logged out');
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
