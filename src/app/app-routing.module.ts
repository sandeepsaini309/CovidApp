import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MediaComponent } from './media/media.component';
import { CovidComponent } from './covid/covid.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthComponent } from './auth/auth.component';
import { HelplineComponent } from './helpline/helpline.component';
import { AddMediaComponent } from './add-media/add-media.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'auth', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'media', component: MediaComponent },
  { path: 'addMedia', component: AddMediaComponent, canActivate: [AuthGuard] },
  { path: 'covid', component: CovidComponent },
  { path: 'helpline', component: HelplineComponent },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
