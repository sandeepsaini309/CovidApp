import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service';
import { CovidDataService } from '../services/covid-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private media: MediaService,
    private covidService: CovidDataService
  ) {}
  public isFeching: boolean;
  public trendVid: any = [];

  ngOnInit() {
    this.isFeching = false;
    this.getAllData();
    this.getTrendMedia();
  }

  public covidData: any = [];
  public covidTotal: any = [];
  public getAllData() {
    let resp = this.covidService.onFetchCovid();
    resp.subscribe((response) => {
      this.covidData = response;
      this.covidTotal = this.covidData.total;
      this.isFeching = true;
    });
  }
  getTrendMedia() {
    let resp = this.media.fetchTrendMedia();
    resp.subscribe((response) => {
      this.trendVid = response;
      // console.warn(this.trendVid);
      this.isFeching = true;
    });
  }
}
