import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.scss']
})
export class NoComunesComponent  {

  constructor() { }
  //I18nSelect
  nombre:string = 'Juan Carlos';
  genero:string = 'masculino';
  invitacionMap = { 'masculino':'invitarlo', 'femenino':'invitarla'}
  //I18Plural
  clientes:string[] = [
    'eric'
  ]
  clientesMap= {
    '=0':'No tenemos ningún cliente esperando.',
    '=1':'Tenemos 1 cliente esperando.',
    '=2':'Tenemos 2 clientes esperando.',
    'other': 'Tenemos # clientes esperando.'
  }
  ngOnInit(): void {
  }
  cambiarGenero(v:string){
    if(v == 'masculino'){
      this.genero = 'femenino'
      this.nombre = 'Rosana'
    }else{
      this.genero = 'masculino'
      this.nombre= 'Juan Carlos'
    }
   
  }
  borrarCliente(){
    this.clientes.pop()
  }
  addCliente(){
    this.clientes.push('cliente')
  }

}
