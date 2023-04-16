import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { PrimeNgModule } from '../primeng/primeng.module';
import { VentasRoutingModule } from './ventas-router.module';
import { ToogleCasePipe } from './pipes/toggle-case.pipe';
import { canFlyPipe } from './pipes/canfly.pipe';
import { sortByPipe } from './pipes/sort-by.pipe';

const components = [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
    ToogleCasePipe,
    canFlyPipe,
    sortByPipe
]

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    VentasRoutingModule,
    PrimeNgModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VentasModule { }
