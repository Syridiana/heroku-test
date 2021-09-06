import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class Usuario {
  email: string;
  password: string;
  constructor() { 
    this.email = "";
    this.password = "";
  }
}
