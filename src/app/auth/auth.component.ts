import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

/**
 * @title Basic snack-bar
 */
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(
    private _snackBar: MatSnackBar,
    private fb: UntypedFormBuilder,
    private _router: Router
  ) {}

  logDetails = [{ id: 'admin', password: '12345' }];
  ngOnInit(): void {
    console.info(this.logDetails);
  }
  massage = 'Welcome...';
  action = 'Close';
  openSnackBarLogIn() {
    this._snackBar.open(this.massage, this.action, {
      duration: 1000,
    });
  }
  err = 'Wrong details ';
  openSnackBarError() {
    this._snackBar.open(this.err, this.action, {
      duration: 2000,
    });
  }

  public auth: boolean;
  myId: string = 'admin';
  myPassword: Number = 12345;

  LoginForm = this.fb.group({
    id: ['', Validators.required],
    password: ['', Validators.required],
  });
  onSubmit() {
    let formId: string = this.LoginForm.value.id;
    let formPass: number = this.LoginForm.value.password;

    if (formId == this.myId && formPass == this.myPassword) {
      this.openSnackBarLogIn();
      localStorage.setItem('key', formId);
      this._router.navigate(['/addMedia']);
    } else {
      this.LoginForm.reset();
      this.openSnackBarError();
    }
  }
  logLater() {
    this._router.navigate(['/dashboard']);
    localStorage.clear();
  }
}
