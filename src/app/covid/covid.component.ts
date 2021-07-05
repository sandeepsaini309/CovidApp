import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CovidDataService } from '../services/covid-data.service';
/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss'],
})
export class CovidComponent implements OnInit {
  ELEMENT_DATA: any = [];
  displayedColumns: string[] = [
    'state',
    'active',
    'todayActive',
    'cases',
    'todayCases',
    'recovered',
    'todayRecovered',
    'deaths',
    'todayDeaths',
  ];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private covidService: CovidDataService) {}
  public isFeching: boolean;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.isFeching = false;
    this.getAllData();
    this.getCovidChartData();
  }

  // Feching CovidData From CovidServices
  public covidData: any = [];
  public covidTotal: any = [];
  public covidStates: any = [];
  public getAllData() {
    let resp = this.covidService.onFetchCovid();
    resp.subscribe((response) => {
      this.covidData = response;
      this.covidTotal = this.covidData.total;
      this.covidStates = this.covidData.states;
      this.dataSource.data = this.covidStates as any[];
      this.isFeching = true;
    });
  }

  // Chart functions
  public ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  public ChartLabels = [];
  public ChartType = 'line';
  public ChartLegend = true;
  public ChartData = [
    { data: [], label: 'Confirmed' },
    { data: [], label: 'Recovered' },
    { data: [], label: 'Deaths' },
  ];

  // Chart API
  public chartList: any = [];
  public chartNewLabel: any = [];
  public getCovidChartData() {
    let rsp = this.covidService.covidData();
    let Cdates = [];
    let Cconferm = [];
    let CDeceased = [];
    let CRecover = [];

    rsp.subscribe((response) => {
      this.chartList = response;
      this.chartNewLabel = this.chartList.cases_time_series;
      // console.log(this.chartNewLabel);

      this.chartNewLabel.forEach(function (value: any) {
        // console.info(value.date);
        let valueDate = value.date;
        let valueCon = value.dailyconfirmed;
        let valueDeceas = value.dailydeceased;
        let valueRecover = value.dailyrecovered;
        Cdates.push(valueDate);
        Cconferm.push(valueCon);
        CDeceased.push(valueDeceas);
        CRecover.push(valueRecover);
        // console.warn(Cdates);
      });
      this.ChartLabels = Cdates;
      this.ChartData[0].data = Cconferm;
      this.ChartData[1].data = CRecover;
      this.ChartData[2].data = CDeceased;
    });
  }
}
