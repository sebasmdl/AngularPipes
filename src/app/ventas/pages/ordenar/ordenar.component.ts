import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.scss']
})
export class OrdenarComponent implements OnInit {
  public isUpperCase: boolean = false;
  public orderBy?  : keyof Hero;
  public heroes : Hero[] = [
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    }, 
    {
      name: 'Superman',
      canFly: true,
      color: Color.red
    }, 
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    }, 
    {
      name: 'Robin',
      canFly: true,
      color: Color.green
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  toUpperCase(){
    this.isUpperCase = !this.isUpperCase;
  }
  changeOrder(value: keyof Hero){
    this.orderBy = value
  }
}
