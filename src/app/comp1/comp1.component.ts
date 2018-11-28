import {Component} from '@angular/core';
@Component({
  selector: 'comp1',
  templateUrl: './comp1.html'
})
export class Comp1 {
  'title': 'Heros';
  getColor(){
    return Math.random() > 0.5?'green':'red';
  }
}
