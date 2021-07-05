import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../services/media.service';

/**
 * @title Expansion panel as accordion
 */
@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
})
export class ExpansionPanelComponent implements OnInit {
  constructor(private media: MediaService) {}

  public symptomsImg = [];
  public protectImg = [];
  ngOnInit() {
    this.symptomsImg = this.media.getSymptoms();
    this.protectImg = this.media.getProtect();
  }
  // For MatAccordian
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
