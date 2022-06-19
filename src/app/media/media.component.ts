import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
  exportAs: 'ngForm',
})
export class MediaComponent implements OnInit {
  constructor(private media: MediaService, private fb: UntypedFormBuilder) {}

  public isFeching: boolean;
  ngOnInit() {
    this.isFeching = false;
    this.getTrendMedia();
    this.getLearnMedia();
    this.getImmunityMedia();
  }

  public trendVid: any = [];
  public learnVid: any = [];
  public immunityVid: any = [];

  // get media functions
  getTrendMedia() {
    let resp = this.media.fetchTrendMedia();
    resp.subscribe((response) => {
      this.trendVid = response;
      // console.warn(this.trendVid);
      this.isFeching = true;
    });
  }
  getLearnMedia() {
    let resp = this.media.fetchLearnMedia();
    resp.subscribe((response) => {
      this.learnVid = response;
      // console.warn(this.learnVid);
      this.isFeching = true;
    });
  }
  getImmunityMedia() {
    let resp = this.media.fetchImmunityMedia();
    resp.subscribe((response) => {
      this.immunityVid = response;
      // console.warn(this.immunityVid);
      this.isFeching = true;
    });
  }
}
