import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './page/bienvenido/bienvenido.component';
import { LoginComponent } from './page/login/login.component';
import { ErrorComponent } from './page/error/error.component';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';
import { Ej1Component } from './page/ej1/ej1.component';
import { AuthenticationService } from './servicios/auth.service';

import { environment } from '../environments/environment';
import { NavBarComponent } from './page/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorMessageComponent } from './componentes/error-message/error-message.component';
import { ErrorMessagesService } from './servicios/error-messages.service';
import { SuccessMessageComponent } from './componentes/success-message/success-message.component';
import { SuccessMessageService } from './servicios/success-message.service';
import { GameCardComponent } from './componentes/game-card/game-card.component';
import { ChatComponent } from './page/chat/chat.component';
import { AhorcadoComponent } from './juegos/ahorcado/ahorcado.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    ErrorComponent,
    QuienSoyComponent,
    Ej1Component,
    NavBarComponent,
    ErrorMessageComponent,
    SuccessMessageComponent,
    GameCardComponent,
    ChatComponent,
    AhorcadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    NgbModule,
    AngularFireDatabaseModule, 
    HttpClientModule
  ],
  providers: [
    AuthenticationService, 
    ErrorMessagesService,
    SuccessMessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
