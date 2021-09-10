import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { JuegosComponent } from './juegos.component';
import { MayoromenorComponent } from './mayoromenor/mayoromenor.component';


@NgModule({
  declarations: [
    JuegosComponent,
    MayoromenorComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule
  ]
})
export class JuegosModule { }
