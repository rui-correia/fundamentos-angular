import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-tres',
  templateUrl: './exercicio-tres.component.html',
  styleUrls: ['./exercicio-tres.component.css']
})
export class ExercicioTresComponent implements OnInit {

  showText = false;
  counter = 0;
  displays: Array<number> = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToogleDisplay(){
    if(this.showText){
      this.showText = false;
    } else {
      this.showText = true;
    }
    this.onCountClicks();
    
  }

  onCountClicks(){
    this.counter = this.counter + 1;
    this.displays.push(this.counter);
  }

}
