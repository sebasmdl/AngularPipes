import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit {
  nombreLower: string = 'Sebastian';
  nombreUpper: string = 'SEBASTIAN';
  nombreCompleto: string = 'SeBAStian MartiNEz';
  fecha: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
