import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
