import { Injectable } from '@angular/core';
import { ErrorMessageComponent } from '../componentes/error-message/error-message.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessagesService {
  message =  "";
  constructor() { }
}
