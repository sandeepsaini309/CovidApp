import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthGuard } from './auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'CovidApp';

  screenWidth: number;

  constructor(private guard: AuthGuard, private _snackBar: MatSnackBar) {
    // set screenWidth on page load
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      // set screenWidth on screen size change
      this.screenWidth = window.innerWidth;
    };
  }

  massage = 'Loging out';
  action = 'close';
  openSnackBar() {
    this._snackBar.open(this.massage, this.action, {
      duration: 2000,
    });
  }
  logOut() {
    localStorage.clear();
    // this.openSnackBar();
    this.guard.canActivate();
  }
}
