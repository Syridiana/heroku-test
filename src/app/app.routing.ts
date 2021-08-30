import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { Ej1Component } from './ej1/ej1.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'quien-soy', component: QuienSoyComponent },
    { path: '', component: BienvenidoComponent },
    { path: 'ej1', component: Ej1Component }
];

export const routing = RouterModule.forRoot(appRoutes);