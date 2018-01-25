import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the Weather1Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Weather1Provider {

  constructor(public http: HttpClient) {
    console.log('Hello Weather1Provider Provider');
  }

}
