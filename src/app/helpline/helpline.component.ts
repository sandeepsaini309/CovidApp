import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CovidDataService } from '../services/covid-data.service';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-helpline',
  templateUrl: './helpline.component.html',
  styleUrls: ['./helpline.component.scss'],
})
export class HelplineComponent implements OnInit {
  ELEMENT_DATA: any = [];
  constructor(private covidService: CovidDataService) {}
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  public isFeching: boolean;
  displayedColumns: string[] = ['loc', 'number'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  // List filter
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.gethelpline();
    this.isFeching = false;
  }

  public dataHelpline: any = [];
  public RegionalHelpline: any = [];
  gethelpline() {
    let helpResp = this.covidService.covidHelpline();
    helpResp.subscribe((response) => {
      this.dataHelpline = response;
      this.RegionalHelpline = this.dataHelpline.data.contacts.regional;

      this.dataSource.data = this.RegionalHelpline as any[];
      // console.warn(this.dataSource.data);
      this.isFeching = true;
    });
  }
}
