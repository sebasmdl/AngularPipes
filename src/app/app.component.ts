import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pipesApp';
  name = 'Sebastian Martinez'
  constructor(private primeNgConfig: PrimeNGConfig){}
  ngOnInit(){
    this.primeNgConfig.ripple = true;
  }
}
