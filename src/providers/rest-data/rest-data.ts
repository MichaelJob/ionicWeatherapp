import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the RestDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestDataProvider {

  //Basel:
  //apiUrl_forecast = 'http://api.openweathermap.org/data/2.5/forecast/daily?id=7285161&units=metric&cnt=7&APPID=3cbb121142377f3d89940fbc833633a1';
  //apiUrl_current  = 'http://api.openweathermap.org/data/2.5/weather?id=7285161&units=metric&cnt=7&APPID=3cbb121142377f3d89940fbc833633a1';
  
  constructor(public http: HttpClient) {
    console.log('Hello RestDataProvider Provider');
  }

  getForecastData(lat, lon) {
    let apiUrl_forecast = 'http://api.openweathermap.org/data/2.5/forecast/daily?lat='+lat+'&lon='+lon+'&units=metric&cnt=7&APPID=3cbb121142377f3d89940fbc833633a1';
    return new Promise(resolve => {
      this.http.get(apiUrl_forecast).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getCurrent(lat, lon) {
    let apiUrl_current='http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric&cnt=7&APPID=3cbb121142377f3d89940fbc833633a1';
    return new Promise(resolve => {
      this.http.get(apiUrl_current).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}