import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <section class="container-fluid p-5 text-center">
      <h1 class="mat-display-4 mb-3">404</h1>
      <h3 class="mat-display-1 mb-2">Ooops!!</h3>
      <p class="mat-subheading-2">THAT PAGE DOESN'T EXIST OR IS UNAVAILABLE</p>
      <button mat-raised-button color="accent" [routerLink]="['/dashboard']">
        Go To Home Page
      </button>
    </section>
  `,
  styles: [],
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
