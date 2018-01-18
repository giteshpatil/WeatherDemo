import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  
  apikey = '886875ab04dd1717';
  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

}