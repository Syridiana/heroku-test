import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosComponent } from './juegos.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayoromenorComponent } from './mayoromenor/mayoromenor.component';

const routes: Routes = [
  { path: '', component: JuegosComponent },
  { path: 'ahorcado', component: AhorcadoComponent },
  { path: 'mayoromenor', component: MayoromenorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
