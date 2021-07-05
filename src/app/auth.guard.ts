import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router, private _snackBar: MatSnackBar) {}
  loggedIn() {
    return !!localStorage.getItem('key');
  }
  massage = 'Log in required';
  action = 'close';
  openSnackBar() {
    this._snackBar.open(this.massage, this.action, {
      duration: 2000,
    });
  }
  canActivate(): boolean {
    if (this.loggedIn()) {
      return true;
    } else {
      this.openSnackBar();
      this._router.navigate(['/auth']);
      return false;
    }
  }
}
