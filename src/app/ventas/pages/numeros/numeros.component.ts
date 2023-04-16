import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {
  ventasNeta:number= 2567789.5567;
  porcentaje:number= 0.48;
  constructor() { }

  ngOnInit(): void {
  }

}
