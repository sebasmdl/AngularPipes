import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedIModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
import localEs from '@angular/common/locales/es-CO';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common'
registerLocaleData(localEs)
registerLocaleData(localFr)
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedIModule,
    VentasModule,
    AppRouterModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide:LOCALE_ID, useValue: 'es_CO'
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
