import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuccessMessageService {
  message =  "";
  constructor() { }
}
