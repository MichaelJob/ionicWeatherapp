import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestDataProvider } from '../../providers/rest-data/rest-data';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  background_mood: any; //for background image
  city: any; // for city name
  current_weather_all: any; // unfiltered weather data
  current_weather: any; // filtered weather data
  current_hours: any; // for current ours to calculate when to change bg image description: any; // for weather condition description
  description: any; // for weather condition description
  sunrise: any; // sunrise time
  sunset: any; // sunset time
  weather_data: any; // forecast unfiltered weather_data_list: any; //forecast filtered
  weather_data_list: any; //forecast filtered
  //GeoLocation
  lat = 52;
  lon = 13;



  constructor(public navCtrl: NavController, private platform: Platform, private geolocation: Geolocation, public restProvider: RestDataProvider) {
    this.refresh();
    //when app is reopened call this
    document.addEventListener('resume', () => {
        this.refresh();
    });

    platform.ready().then(() => {

      // get current position
      geolocation.getCurrentPosition().then(pos => {
        this.lat = pos.coords.latitude;
        this.lon = pos.coords.longitude;
        console.log('lat: ' + this.lat + ', lon: ' + this.lon);
      });

      const watch = geolocation.watchPosition().subscribe(pos => {
        this.lat = pos.coords.latitude;
        this.lon = pos.coords.longitude;
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        this.getForecastData();
        this.getCurrent();
      });

      // to stop watching:  watch.unsubscribe();

    });
  }

refresh(){
      this.getForecastData();
      this.getCurrent();
      this.getCurrentHour();
}

getForecastData() {
    this.restProvider.getForecastData(this.lat, this.lon).then(data => {
      this.weather_data = data;
      this.city = this.weather_data.city.name;
      this.weather_data_list = this.weather_data.list;
    });
  }
  getCurrent() {
    this.restProvider.getCurrent(this.lat, this.lon).then(data => {
      this.current_weather_all = data;
      this.current_weather = this.current_weather_all.main.temp;
      this.description = this.current_weather_all.weather[0].main;
      this.sunrise = this.current_weather_all.sys.sunrise;
      this.sunset = this.current_weather_all.sys.sunset;
    });
  }
  getCurrentHour() {
    var d = new Date();
    this.current_hours = d.getHours();
    if (this.current_hours >= 8 && this.current_hours <= 18) { //day
      this.background_mood = "Sun.png";
    } else if (this.current_hours >= 19 && this.current_hours < 22) { //evening
      this.background_mood = "Moon.png";
    } else { //night
      this.background_mood = "Blood.png";
    }
  }
}
