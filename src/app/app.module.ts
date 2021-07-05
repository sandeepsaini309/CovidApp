import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MediaComponent } from './media/media.component';
import { CovidComponent } from './covid/covid.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExpansionPanelComponent } from './dashboard/expansion-panel/expansion-panel.component';

import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelplineComponent } from './helpline/helpline.component';
import { SafeUrlPipe } from './safe-url.pipe';
import { AddMediaComponent } from './add-media/add-media.component';

import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MediaComponent,
    CovidComponent,
    PageNotFoundComponent,
    AuthComponent,
    ExpansionPanelComponent,
    HelplineComponent,
    SafeUrlPipe,
    AddMediaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
