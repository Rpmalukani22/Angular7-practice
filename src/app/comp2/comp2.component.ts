// import { Component } from '@angular/core';
// @Component({
//   selector: 'comp2',
//   templateUrl: 'comp2.html'
// })
// export class Comp2 {
//
// }

import {Component} from '@angular/core';

@Component({
  selector: 'comp2',
  templateUrl: 'comp2.html'
})
export class Comp2 {
  clickstatus = 'Don\'t click me please!';
  isdisabled = true;
  inputstring = '';
  fun = () => {
    if (this.clickstatus === 'Don\'t click me please!') {
      this.clickstatus = 'Click Me now !';
      this.isdisabled = true;
    }
    else if (this.clickstatus === 'Click Me now !') {
      this.clickstatus = 'Don\'t click me please!';
      this.isdisabled = false;
    }
  };

  constructor() {
    setTimeout(this.fun
      , 2000);
  }

  onInput(event: Event) {
    console.log(event);
    this.inputstring = event.target.value;
  }
}

