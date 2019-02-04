import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vscroll';
  people:number[]=[];
  constructor(){
    for(var i =0 ; i<10000;i++){
this.people.push(i)
    }
  }
}
