import {Component} from '@angular/core';
@Component({
  selector: 'comp1',
  templateUrl: './comp1.html'
})
export class Comp1 {
  ary=["c1","c2"]
  datatoprint:number=-1;
  'title': 'Heros';
  getColor(){
    return Math.random() > 0.5?'green':'red';
  }
  adddiv(){
    this.ary.push("c3");
  }
}
