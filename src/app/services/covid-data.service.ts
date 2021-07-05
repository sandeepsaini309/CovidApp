import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CovidDataService {
  constructor(private http: HttpClient) {}
  public onFetchCovid(): Observable<any> {
    return this.http.get('https://disease.sh/v3/covid-19/gov/india');
  }

  public covidData(): Observable<any> {
    return this.http.get('https://api.covid19india.org/data.json');
  }

  public covidHelpline(): Observable<any> {
    return this.http.get('https://api.rootnet.in/covid19-in/contacts');
  }
}
