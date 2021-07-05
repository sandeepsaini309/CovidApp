import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.scss'],
})
export class AddMediaComponent implements OnInit {
  constructor(private media: MediaService, private fb: FormBuilder) {}

  ngOnInit() {}

  // forms functions
  trendingForm = this.fb.group({
    url: ['', Validators.required],
    caption: ['', Validators.required],
  });
  learningForm = this.fb.group({
    url: ['', Validators.required],
    caption: ['', Validators.required],
  });
  immunityForm = this.fb.group({
    url: ['', Validators.required],
    caption: ['', Validators.required],
  });

  // submit functions
  onSubmitTrend() {
    let postResp = this.media.postTrendMedia(this.trendingForm.value);
    postResp.subscribe((response) => {
      // console.log(response);
      // this.getTrendMedia();
      this.trendingForm.reset();
    });
  }
  onSubmitLearn() {
    let postResp = this.media.postLearnMedia(this.learningForm.value);
    postResp.subscribe((response) => {
      // console.log(response);
      // this.getLearnMedia();
      this.learningForm.reset();
    });
  }
  onSubmitImmunity() {
    let postResp = this.media.postImmunityMedia(this.immunityForm.value);
    postResp.subscribe((response) => {
      // console.log(response);
      // this.getImmunityMedia();
      this.immunityForm.reset();
    });
  }

  // reset functions
  onResetTrend() {
    this.trendingForm.reset();
  }
  onResetLearn() {
    this.learningForm.reset();
  }
  onResetImmunity() {
    this.immunityForm.reset();
  }
}
