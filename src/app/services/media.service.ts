import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  constructor(private http: HttpClient) {}

  // post media functions
  postTrendMedia(value: string) {
    return this.http.post<{ name: string }>(
      'https://covidapp-c498a.firebaseio.com/trendVid.json',
      value
    );
  }
  postLearnMedia(value: string) {
    return this.http.post<{ name: string }>(
      'https://covidapp-c498a.firebaseio.com/learnVid.json',
      value
    );
  }
  postImmunityMedia(value: string) {
    return this.http.post<{ name: string }>(
      'https://covidapp-c498a.firebaseio.com/immunityVid.json',
      value
    );
  }

  // fetch media functions
  fetchTrendMedia() {
    return this.http
      .get('https://covidapp-c498a.firebaseio.com/trendVid.json')
      .pipe(
        map((responseData) => {
          const postArray: any = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
        })
      );
  }
  fetchLearnMedia() {
    return this.http
      .get('https://covidapp-c498a.firebaseio.com/learnVid.json')
      .pipe(
        map((responseData) => {
          const postArray: any = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
        })
      );
  }
  fetchImmunityMedia() {
    return this.http
      .get('https://covidapp-c498a.firebaseio.com/immunityVid.json')
      .pipe(
        map((responseData) => {
          const postArray: any = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
        })
      );
  }
  // panel images
  getSymptoms() {
    return [
      {
        img: 'assets/img/sym/congestion and runny nose.jpg',
        caption: 'Congestion or runny nose',
      },
      { img: 'assets/img/sym/coughing.png', caption: 'Cough' },
      { img: 'assets/img/sym/fever.png', caption: 'Fever or chills' },
      {
        img: 'assets/img/sym/jhmneckache.png',
        caption: 'Muscle or body aches',
      },
      {
        img: 'assets/img/sym/breathing difficulty.png',
        caption: 'Shortness of breath or difficulty breathing',
      },
    ];
  }
  getProtect() {
    return [
      {
        img: 'assets/img/protect/handwashing.png',
        caption:
          'Frequently wash your hands with soap and water, or use a hand sanitizer with at least 60% alcohol.',
      },
      {
        img: 'assets/img/protect/face mask cropped.jpg',
        caption:
          'Wear a cloth face mask when in public to prevent the spread of the virus.',
      },
      {
        img: 'assets/img/protect/sneezing tissue.png',
        caption:
          'Cough or sneeze into a tissue or bent elbow. Throw the tissue in the trash.',
      },
      {
        img: 'assets/img/protect/distance.png',
        caption: 'Stay 6 feet away from others.',
      },
      {
        img: 'assets/img/protect/sleeping at home.png',
        caption:
          'If you feel sick, stay home and contact your health care provider.',
      },
      {
        img: 'assets/img/protect/coughing hand.png',
        caption: 'Do not touch your face without washing your hands first.',
      },
      {
        img: 'assets/img/protect/disinfect.png',
        caption: 'Clean and disinfect frequently touched objects and surfaces.',
      },
    ];
  }
}
