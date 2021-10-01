import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';
import { BienvenidoComponent } from './page/bienvenido/bienvenido.component';
import { Ej1Component } from './page/ej1/ej1.component';
import { ErrorComponent } from './page/error/error.component';
import { ChatComponent } from '../app/page/chat/chat.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'ingreso', component: LoginComponent },
  { path: 'quien-soy', component: QuienSoyComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: BienvenidoComponent },
  { path: 'casa', component: BienvenidoComponent },
  { path: 'ej1', component: Ej1Component },
  { path: 'chat', component: ChatComponent},
  { path: 'juegos', loadChildren: () => import('./juegos/juegos.module').then(m => m.JuegosModule) },
  { path: '**', component: ErrorComponent }
];
const queryParams = {};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }

