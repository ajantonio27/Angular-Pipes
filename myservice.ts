import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Myservice {
  serviceproperty = 'Hello, this is a service property';

  constructor() {}

  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }
}
