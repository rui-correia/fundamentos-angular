import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-tres',
  templateUrl: './exercicio-tres.component.html',
  styleUrls: ['./exercicio-tres.component.css']
})
export class ExercicioTresComponent implements OnInit {

  showText = false;
  log: Array<number> = [];
  //displays: Array<number> = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToogleDisplay(){
    this.showText = !this.showText;
    this.log.push(this.log.length + 1);
    
  }

}
