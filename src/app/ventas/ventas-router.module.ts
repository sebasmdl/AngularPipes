import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';


const routes:Routes = [
  {
    path: '',
    component:BasicosComponent,
    pathMatch: 'full'
  },
  {
    path: 'numbers',
    component: NumerosComponent
  },
  {
    path: 'uncommon',
    component: NoComunesComponent
  },
  {
    path: 'custom',
    component: OrdenarComponent
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
